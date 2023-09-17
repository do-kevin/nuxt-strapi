import { ref, isRef, toRef } from "vue";
import type { Ref } from "vue";
import { vi } from "vitest";

type MockNuxtStateType = {
  [key: string]: any;
};

const mockNuxtState: MockNuxtStateType = {};

export const useStateMock = vi.fn(
  <T>(key?: string, init?: () => T | Ref<T>): Ref<T> => {
    if (!key) {
      throw new TypeError("[nuxt] [useState] key must be a string: " + key);
    }

    if (init !== undefined && typeof init !== "function") {
      throw new Error("[nuxt] [useState] init must be a function: " + init);
    }

    const stateKey = "$s" + key;

    // If the state exists in the mock global state, use it.
    if (mockNuxtState[stateKey]) {
      return toRef(mockNuxtState, stateKey);
    }

    // Otherwise, initialize the state with the provided init function or a default value.
    if (init) {
      const initialValue = init();

      if (isRef(initialValue)) {
        mockNuxtState[stateKey] = initialValue.value;
        return initialValue;
      }

      mockNuxtState[stateKey] = initialValue;
    } else {
      mockNuxtState[stateKey] = ref(null); // Default value if no init function provided.
    }

    return toRef(mockNuxtState, stateKey);
  }
);
