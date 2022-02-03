import { useCalculator } from "./useCalculator";
import { act, renderHook } from '@testing-library/react-hooks'


describe('useCalculator', () => {
  describe('initialState', () => {
    it('returns displayValue of 0 when nothing passed', () => {
      const { result } = renderHook(() => useCalculator())
      const { displayValue } = result.current;
      expect(displayValue).toEqual(0)
    });
  })
  
  describe('setNumber', () => {
    it('does not change if zero is set', () => {
      const { result } = renderHook(() => useCalculator())
      act(() => {
        result.current.methods.setNumber(0)
      })
      expect(result.current.displayValue).toEqual(0);
    })
    
    it('sets the display value to 99', () => {
      const { result } = renderHook(() => useCalculator())
      act(() => {
        result.current.methods.setNumber(9);
        result.current.methods.setNumber(9);
      })
      
      expect(result.current.displayValue).toEqual(99);
    })
    
    it('sets the display value to 65343', () => {
      const { result } = renderHook(() => useCalculator())
      act(() => {
        result.current.methods.setNumber(6);
        result.current.methods.setNumber(5);
        result.current.methods.setNumber(3);
        result.current.methods.setNumber(4);
        result.current.methods.setNumber(3);
      })
      
      expect(result.current.displayValue).toEqual(65343); 
    })
    
    it('sets the display value to 100', () => {
      const { result } = renderHook(() => useCalculator())
      act(() => {
        result.current.methods.setNumber(1);
        result.current.methods.setNumber(0);
        result.current.methods.setNumber(0);
      })
      
      expect(result.current.displayValue).toEqual(100);  
    })
  })

  describe('add', () => {
    it('changes the display value to 0', () => {
      const { result } = renderHook(() => useCalculator())
      act(() => {
        result.current.methods.setNumber(9);
        result.current.methods.setNumber(9);
      })

      expect(result.current.displayValue).toEqual(99);

      act(() => {
        result.current.methods.add()
      })

      expect(result.current.displayValue).toBe(0)
    })

    it('sets the second display value', () => {
      const { result } = renderHook(() => useCalculator())
      act(() => {
        result.current.methods.setNumber(9);
        result.current.methods.setNumber(9);
      })

      expect(result.current.displayValue).toEqual(99);

      act(() => {
        result.current.methods.add()
        result.current.methods.setNumber(5)
      }) 

      expect(result.current.displayValue).toEqual(5)
    })
  })

  describe('total', () => {
    it('adds to numbers together', () => {
      const { result} = renderHook(() => useCalculator())
      act(() => {
        result.current.methods.setNumber(1)
        result.current.methods.setNumber(2)
        result.current.methods.setNumber(3)
        result.current.methods.add();
        result.current.methods.setNumber(3)
        result.current.methods.setNumber(2)
        result.current.methods.setNumber(1)
        result.current.methods.total()
      })

      expect(result.current.displayValue).toBe(444)
    })
  })
})