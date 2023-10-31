function throttle(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
    let timeout: NodeJS.Timeout | null = null;

    return function (...innerArgs: any[]) {
        if (!timeout) {
            timeout = setTimeout(() => {
                func(...innerArgs);
                timeout = null;
            }, wait);
        }
    };
}

export default throttle;
