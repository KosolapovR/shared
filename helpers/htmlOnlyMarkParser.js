import React from 'react';
import htmlParser from 'react-markdown/plugins/html-parser';

/**
 * Кастомный парсер, который используется вместе с библиотекой react-markdown.
 * Необходим для обработки тегов mark
 */
export default htmlParser({
  isValidNode: node => node.type !== 'script',
  processingInstructions: [
    {
      shouldProcessNode: node => node.type === 'tag',
      processNode: (node, children, index) =>
        React.createElement(node.name === 'mark' ? 'mark' : 'span', { key: index }, children),
    },
    {
      shouldProcessNode: node => node.type === 'text',
      processNode: node => node.data,
    },
  ],
});
