/** Declaration file generated by dts-gen */
import { ExecException } from 'child_process';
export = sleep_mode;

declare function sleep_mode(cb: (error: ExecException, stderr: string, stdout: string) => void): void;
