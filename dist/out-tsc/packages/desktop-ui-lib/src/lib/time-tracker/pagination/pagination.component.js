"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationComponent = void 0;
const tslib_1 = require("tslib");
/* It's a pagination component that works with the angular2-smart-table component */
const core_1 = require("@angular/core");
const angular2_smart_table_1 = require("angular2-smart-table");
const rxjs_1 = require("rxjs");
const until_destroy_1 = require("@ngneat/until-destroy");
let PaginationComponent = exports.PaginationComponent = class PaginationComponent {
    constructor() {
        this._count = 0;
        this._changePage = new core_1.EventEmitter();
        this._perPageSelect = [5, 10, 25, 50, 100];
    }
    _processPageChange(changes) {
        if (changes['action'] === 'prepend') {
            this._source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this._source.setPage(this.last);
        }
    }
    _initPages() {
        const pagesCount = this.last;
        let showPagesCount = 4;
        showPagesCount =
            pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this._pages = [];
        if (this.isShouldShow) {
            let middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this._page >= middleOne ? this._page : middleOne;
            let lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            const firstOne = lastOne - showPagesCount + 1;
            for (let i = firstOne; i <= lastOne; i++) {
                this._pages.push(i);
            }
        }
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this._dataChangedSub.unsubscribe();
            }
            this._dataChangedSub = this._source
                .onChanged()
                .pipe((0, rxjs_1.tap)((dataChanges) => {
                this._page = this._source.getPaging().page;
                this._perPage = this._source.getPaging().perPage;
                this._currentPerPage = this._perPage;
                this._count = this._source.count();
                if (this.isPageOutOfBounce) {
                    this._source.setPage(--this._page);
                }
                this._processPageChange(dataChanges);
                this._initPages();
            }), (0, until_destroy_1.untilDestroyed)(this))
                .subscribe();
        }
    }
    get isShouldShow() {
        return this._source.count() > this._perPage;
    }
    paginate(page) {
        this._source.setPage(page);
        this._page = page;
        this.changePage.emit({ page });
        return false;
    }
    next() {
        return this.paginate(this._page + 1);
    }
    prev() {
        return this.paginate(this._page - 1);
    }
    get last() {
        return Math.ceil(this._count / this._perPage);
    }
    get isPageOutOfBounce() {
        return (this._page * this._perPage >= this._count + this._perPage &&
            this._page > 1);
    }
    onChangePerPage(event) {
        this._currentPerPage = event;
        console.log('PerPage', event);
        if (this._currentPerPage) {
            if (typeof this._currentPerPage === 'string' &&
                this._currentPerPage.toLowerCase() === 'all') {
                this._source.getPaging().perPage = null;
            }
            else {
                this._source.getPaging().perPage = this._currentPerPage * 1;
                this._source.refresh();
            }
            this._initPages();
        }
    }
    get startCount() {
        return (this._page - 1) * this._perPage + 1;
    }
    get endCount() {
        const entriesEndPage = (this._page - 1) * this._perPage + this._perPage;
        if (entriesEndPage > this._count) {
            return this._count;
        }
        return entriesEndPage;
    }
    set source(value) {
        this._source = value;
    }
    get source() {
        return this._source;
    }
    set perPageSelect(values) {
        this._perPageSelect = values;
    }
    get perPageSelect() {
        return this._perPageSelect;
    }
    get currentPerPage() {
        return this._currentPerPage;
    }
    set currentPerPage(value) {
        this._currentPerPage = value;
    }
    get pages() {
        return this._pages;
    }
    set pages(value) {
        this._pages = value;
    }
    get page() {
        return this._page;
    }
    set page(value) {
        this._page = value;
    }
    get count() {
        return this._count;
    }
    set count(value) {
        this._count = value;
    }
    get perPage() {
        return this._perPage;
    }
    set perPage(value) {
        this._perPage = value;
    }
    get changePage() {
        return this._changePage;
    }
    get dataChangedSub() {
        return this._dataChangedSub;
    }
    set dataChangedSub(value) {
        this._dataChangedSub = value;
    }
    ngOnDestroy() { }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", angular2_smart_table_1.LocalDataSource),
    tslib_1.__metadata("design:paramtypes", [angular2_smart_table_1.LocalDataSource])
], PaginationComponent.prototype, "source", null);
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], PaginationComponent.prototype, "perPageSelect", null);
tslib_1.__decorate([
    (0, core_1.Output)(),
    tslib_1.__metadata("design:type", core_1.EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], PaginationComponent.prototype, "changePage", null);
exports.PaginationComponent = PaginationComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'ga-pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PaginationComponent);
//# sourceMappingURL=pagination.component.js.map