type DebouncedFunction<T extends (...args: any[]) => any> = {
    (...args: Parameters<T>): void;
    cancel: () => void;
  };
  
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): DebouncedFunction<T> {
    let timeoutId: ReturnType<typeof setTimeout>;
  
    const debounced: DebouncedFunction<T> = (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  
    debounced.cancel = () => clearTimeout(timeoutId);
  
    return debounced;
  }
  