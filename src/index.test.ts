import { hello } from './index'
import { mockProcessStdout } from 'jest-mock-process'

const stdout = mockProcessStdout()

describe('hello', () => {
  beforeEach(stdout.mockClear)
  it('print async output', async () => {
    await hello()
    expect(stdout).toHaveBeenNthCalledWith(1, 'H')
    expect(stdout).toHaveBeenNthCalledWith(2, 'e')
    expect(stdout).toHaveBeenNthCalledWith(3, 'l')
    expect(stdout).toHaveBeenNthCalledWith(4, 'l')
    expect(stdout).toHaveBeenNthCalledWith(5, 'o')
  })
})
