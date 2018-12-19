// * 号可以将除了default 这个默认导出的接口之外的其他接口都导出来
export * from './lib';

// 从lib.mjs中导入默认接口并将其导出
export { default } from './lib';

// 我们也可以将lib.mjs中倒入默认接口并将其重命名导出
export { default as Life } from './lib';
