import { Colors, Spacing } from '@/constants/theme';

describe('theme', () => {
  it('defines matching color keys for light and dark', () => {
    expect(Object.keys(Colors.light).sort()).toEqual(Object.keys(Colors.dark).sort());
  });

  it('defines spacing scale in ascending order', () => {
    const values = Object.values(Spacing);
    expect(values).toEqual([...values].sort((a, b) => a - b));
  });
});
