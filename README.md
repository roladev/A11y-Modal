# React Accessible Modal

A lightweight, accessible modal dialog component for React applications. Built with TypeScript and CSS Modules, this component provides a robust foundation for creating modals that are both beautiful and accessible.

## Features

- 🎯 Built with TypeScript for type safety
- ♿️ Fully accessible (WAI-ARIA compliant)
- 🎨 Styled with CSS Modules/SCSS
- 📱 Responsive design
- ⌨️ Keyboard navigation support
- 🔄 Focus trap management
- 🎭 Smooth animations
- 🖥️ Portal-based rendering

## Installation

1. Install the package in your React project:

```bash
npm install @roladev/react-accessible-modal
# or
yarn add @roladev/react-accessible-modal
```

2. Make sure your project is configured to handle SCSS modules. If not, you'll need to add the appropriate loaders to your bundler configuration.

## Usage

```tsx
import { Modal } from '@roladev/react-accessible-modal';
import { useState } from 'react';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Optional Modal Title"
      >
        <div>
          <p>Your modal content goes here!</p>
        </div>
      </Modal>
    </>
  );
};
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| children | ReactNode | Yes | The content to be displayed inside the modal |
| isOpen | boolean | Yes | Controls the visibility of the modal |
| onClose | () => void | Yes | Function called when the modal should close |
| title | string | No | Optional title displayed at the top of the modal |

## Features

### Keyboard Support
- `Esc` key closes the modal
- `Tab` key traps focus within the modal
- Focus returns to the trigger element when closed

### Accessibility
- WAI-ARIA compliant
- Proper role and ARIA attributes
- Screen reader friendly
- Focus management
- Semantic HTML structure

### Styling
- Responsive design
- Customizable through CSS Modules
- Smooth animations
- Backdrop blur effect

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [roladev](https://github.com/roladev)

## 🧙 Authors

- [@Arol](https://gitlab.com/arol.flex)

