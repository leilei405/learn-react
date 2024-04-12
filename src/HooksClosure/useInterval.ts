import { useEffect, useRef, useLayoutEffect, useCallback } from 'react';

// 声明一个名为 useInterval 的自定义 Hook，它接受两个参数：
// fn: 要周期性执行的函数
// time: 执行间隔（毫秒）
export const useInterval = (fn: Function, time: number) => {

    // 使用 useRef Hook 创建一个 ref 对象，用于存储传入的函数 fn 的当前值
    const ref = useRef(fn);

    // 使用 useLayoutEffect Hook，在组件渲染后、DOM 更新前，更新 ref.current 的值为传入的 fn
    useLayoutEffect(() => {
        ref.current = fn;
    });

    // 使用 useRef Hook 创建一个 ref 对象，用于存储清除定时器的函数
    let cleanUpFnRef = useRef<Function>();

    // 使用 useCallback Hook 创建一个不会被重新创建的回调函数 clean
    // 这个函数用于清除定时器
    const clean = useCallback(() =>{
        cleanUpFnRef.current?.();
    }, []);

    // 使用 useEffect Hook，在组件挂载和更新时，创建一个定时器
    // 该定时器会周期性地执行 ref.current（即传入的 fn）函数
    // 每次执行的间隔为 time 毫秒
    useEffect(() => {
        const timer = setInterval(() => ref.current(), time);

        // 将清除定时器的函数存储在 cleanUpFnRef.current 中
        cleanUpFnRef.current = ()=> {
            clearInterval(timer);
        }

        // 返回一个函数，用于在组件卸载或更新时清除定时器
        return clean;
    }, []);

    // 返回清除定时器的函数，以便在需要时停止定时器的执行
    return clean;
}