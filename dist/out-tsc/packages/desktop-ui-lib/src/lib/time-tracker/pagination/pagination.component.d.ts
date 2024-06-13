import { EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { LocalDataSource } from 'angular2-smart-table';
import { Subscription } from 'rxjs';
export declare class PaginationComponent implements OnChanges, OnDestroy {
    private _source;
    private _perPageSelect;
    private _currentPerPage;
    private _pages;
    private _page;
    private _count;
    private _perPage;
    private _changePage;
    private _dataChangedSub;
    constructor();
    private _processPageChange;
    private _initPages;
    ngOnChanges(changes: SimpleChanges): void;
    get isShouldShow(): boolean;
    paginate(page: number): boolean;
    next(): boolean;
    prev(): boolean;
    get last(): number;
    get isPageOutOfBounce(): boolean;
    onChangePerPage(event: any): void;
    get startCount(): number;
    get endCount(): number;
    set source(value: LocalDataSource);
    get source(): LocalDataSource;
    set perPageSelect(values: any[]);
    get perPageSelect(): any[];
    get currentPerPage(): any;
    set currentPerPage(value: any);
    protected get pages(): Array<any>;
    protected set pages(value: Array<any>);
    protected get page(): number;
    protected set page(value: number);
    protected get count(): number;
    protected set count(value: number);
    protected get perPage(): number;
    protected set perPage(value: number);
    get changePage(): EventEmitter<{
        page: number;
    }>;
    protected get dataChangedSub(): Subscription;
    protected set dataChangedSub(value: Subscription);
    ngOnDestroy(): void;
}
//# sourceMappingURL=pagination.component.d.ts.map