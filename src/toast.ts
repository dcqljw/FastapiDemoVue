// toast.js
let toastInstance: any = null;

export const setToastInstance = (instance: any) => {
    toastInstance = instance;
};

export const useToastGlobal = () => {
    if (!toastInstance) {
        throw new Error('Toast instance not initialized. Call setToastInstance first.');
    }
    return toastInstance;
};
