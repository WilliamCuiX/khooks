import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../index';

describe('useCounter', () => {
  it('should initialize with default initial value 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should initialize with a given initial value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));
    expect(result.current.count).toBe(5);
  });

  it('should increment the count', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should decrement the count', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });

  it('should reset the count to the initial value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(7);
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(5);
  });

  it('should reset the count to the default initial value if none provided', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });

  it('should set the count to a specific value', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setValue(10);
    });
    expect(result.current.count).toBe(10);
  });
});
