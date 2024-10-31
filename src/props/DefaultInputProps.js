export default {
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  minlength: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: "",
  },
  styles: {
    type: Object,
    default: () => ({}),
  },
};
