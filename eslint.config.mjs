import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import tailwind from "eslint-plugin-tailwindcss";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: true,
      indent: 2,
      quotes: "single",
    },
  },
})
  .append(...tailwind.configs["flat/recommended"], prettierConfig, {
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "crlf" }],
    },
  })
  .prepend()
  .override("tailwindcss:rules", {
    rules: {
      "tailwindcss/no-custom-classname": "off",
    },
  })
  .override("nuxt/stylistic", {
    rules: {
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "comma",
            requireLast: false,
          },
          singleline: {
            delimiter: "comma",
            requireLast: false,
          },
          multilineDetection: "brackets",
        },
      ],
    },
  })
  .override("nuxt/vue/rules", {
    rules: {
      "vue/block-order": [
        "error",
        {
          order: ["script", "template", "style"],
        },
      ],
      "vue/component-name-in-template-casing": "error",
      "vue/component-options-name-casing": "error",
      "vue/custom-event-name-casing": "error",
      "vue/define-emits-declaration": "error",
      "vue/define-macros-order": [
        "error",
        {
          order: ["defineOptions", "defineProps", "defineEmits", "defineSlots"],
        },
      ],
      "vue/define-props-declaration": "error",
      "vue/html-button-has-type": [
        "error",
        {
          button: true,
          submit: true,
          reset: true,
        },
      ],
      "vue/html-comment-content-spacing": [
        "error",
        "always",
        {
          exceptions: [],
        },
      ],
      "vue/new-line-between-multi-line-property": [
        "error",
        {
          minLineOfMultilineProperty: 2,
        },
      ],
      "vue/no-boolean-default": ["error", "default-false"],
      "vue/no-deprecated-model-definition": [
        "error",
        {
          allowVue3Compat: true,
        },
      ],
      "vue/no-duplicate-attr-inheritance": "error",
      "vue/no-multiple-objects-in-class": "error",
      "vue/no-ref-object-reactivity-loss": "error",
      "vue/no-required-prop-with-default": [
        "error",
        {
          autofix: true,
        },
      ],
      "vue/no-v-text-v-html-on-component": "off",
      "vue/no-root-v-if": "error",
      "vue/no-v-html": "off",
      "vue/no-setup-props-reactivity-loss": "error",
      "vue/no-template-target-blank": "error",
      "vue/no-this-in-before-route-enter": "error", // без vue-route не использовать
      "vue/no-undef-properties": "error",
      "vue/no-unused-emit-declarations": "error",
      "vue/no-unused-properties": "error",
      "vue/no-unused-refs": "error",
      "vue/no-use-v-else-with-v-for": "error",
      "vue/no-useless-mustaches": "error",
      "vue/no-useless-v-bind": "error",
      "vue/no-v-text": "error",
      "vue/no-v-model-argument": "off",
      "vue/padding-line-between-blocks": "error",
      "vue/prefer-define-options": "error",
      "vue/prefer-prop-type-boolean-first": "error",
      "vue/prefer-separate-static-class": "error",
      "vue/prefer-true-attribute-shorthand": "error",
      "vue/require-macro-variable-name": "error",
      // 'vue/require-typed-object-prop': 'error',
      "vue/require-typed-ref": "error",
      "vue/v-for-delimiter-style": "error",
      "vue/v-on-handler-style": "off",
      "vue/valid-define-options": "error",
      "vue/block-lang": [
        "error",
        {
          script: {
            lang: "ts",
          },
        },
      ],
    },
  });
