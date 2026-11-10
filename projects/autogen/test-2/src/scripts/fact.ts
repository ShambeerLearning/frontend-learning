export function fact(n: number): number {
    if (n == 1 || n == 0) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}