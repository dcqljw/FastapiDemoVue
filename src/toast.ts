// toast.js
let toastInstance: any = null;

export const setToastInstance = (instance: any) => {
    console.log(instance)
    toastInstance = instance;
};

export const useToastGlobal = () => {
    console.log(toastInstance)
    if (!toastInstance) {
        throw new Error('Toast instance not initialized. Call setToastInstance first.');
    }
    return toastInstance;
};
