import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ 
  children, 
  title, 
  isOpen, 
  onClose 
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      dialog.showModal();
      document.body.classList.add(styles.noScroll);
    } else {
      dialog.close();
      document.body.classList.remove(styles.noScroll);
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
  }, [isOpen]);

  const handleClickOutside = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (dialog && event.target === dialog) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const modalContent = (
    <dialog
      ref={dialogRef}
      onClick={handleClickOutside}
      className={styles.modal}
      aria-labelledby={title ? "modal-title" : undefined}
      aria-modal="true"
    >
      <div role="document" className={styles.container}>
        <header className={styles.header}>
          {title && (
            <h2 id="modal-title" className={styles.title}>
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close modal"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.closeIcon}
            >
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </header>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </dialog>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
