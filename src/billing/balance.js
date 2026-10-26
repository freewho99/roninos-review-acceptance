export async function decrementBalance(account, amount) {
  const current = await account.getBalance();
  await account.setBalance(current - amount);
}
