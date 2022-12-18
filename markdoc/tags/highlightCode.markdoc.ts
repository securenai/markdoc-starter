import { HighlightCode } from '../../components';

export const highlightCode = {
  render: HighlightCode,
  children: ['text'],
  attributes: {
    language: {
      type: String,
    },
  },
};
