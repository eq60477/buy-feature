// Import necessary testing libraries
import "@testing-library/jest-dom";

class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

// Mock the ResizeObserver API
(global as any).ResizeObserver = ResizeObserver;