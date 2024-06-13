import { OfflineQueue } from './offline-queue';
export declare abstract class QueueState<T> {
    protected context: OfflineQueue<T>;
    constructor(queue: OfflineQueue<T>);
    abstract enqueue(data: T): void;
    abstract dequeue(): Promise<void> | void;
}
//# sourceMappingURL=queue-state.d.ts.map