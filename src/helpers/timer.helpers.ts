export const getDays = (ms: number) => {
    return Math.trunc(ms / (60000 * 60 * 24));
};

export const getHours = (ms: number) => {
    const min = ms / 60000;
    const days = Math.trunc(min / (60 * 24));
    return Math.trunc((min - days * 24 * 60) / 60);
};

export const getMins = (ms: number) => {
    const min = ms / 60000;
    const days = Math.trunc(min / (60 * 24));
    const hours = Math.trunc((min - days * 24 * 60) / 60);
    return Math.trunc(min - days * 24 * 60 - hours * 60);
};

export const getSecs = (ms: number) => {
    const secs = ms / 1000;
    const days = Math.trunc(secs / (60 * 60 * 24));
    const hours = Math.trunc((secs - days * 24 * 60 * 60) / (60 * 60));
    const minutes = Math.trunc(
        (secs - days * 24 * 60 * 60 - hours * 60 * 60) / 60
    );
    return Math.trunc(
        secs - days * 24 * 60 * 60 - hours * 60 * 60 - 60 * minutes
    );
};

export const convertToTwoDigit = (num: number): string =>
    num > 9 ? String(num) : `0${num}`;
