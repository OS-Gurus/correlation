/** Function to test the compiler. */
export async function hello () {
  for (const char of 'Hello World!') {
    await new Promise(resolve => setTimeout(resolve, 50))
    process.stdout.write(char)
  }
}
