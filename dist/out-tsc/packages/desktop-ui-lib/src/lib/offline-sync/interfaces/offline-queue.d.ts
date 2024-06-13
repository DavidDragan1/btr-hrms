import { Observable } from 'rxjs';
import { IQueue } from './iqueue';
import { LinkedList } from '../concretes/linked-list';
import { QueueState } from './queue-state';
export declare abstract class OfflineQueue<T> implements IQueue<T> {
    private _queue;
    private _queueChanged$;
    private _state;
    constructor();
    abstract synchronize(data: T): Promise<void>;
    abstract process(): Promise<void>;
    enqueue(data: T): void;
    dequeue(): Promise<void>;
    isEmpty(): boolean;
    get state$(): Observable<QueueState<T>>;
    get queue(): LinkedList<T>;
    get state(): QueueState<T>;
    set state(value: QueueState<T>);
    private notifyState;
}
//# sourceMappingURL=offline-queue.d.ts.map