import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import {
	NbCardModule,
	NbButtonModule,
	NbIconModule,
	NbSpinnerModule,
	NbDialogModule,
	NbCheckboxModule,
	NbSelectModule,
	NbTabsetModule,
	NbInputModule,
	NbBadgeModule,
	NbTooltipModule,
	NbStepperModule
} from '@nebular/theme';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ProductFormComponent } from './components/edit-inventory-item/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPermissionsModule } from 'ngx-permissions';
import {
	ImageAssetService,
	InventoryStore,
	ProductService,
	ProductVariantPriceService,
	ProductVariantService,
	ProductVariantSettingService,
	TranslatableService
} from '@gauzy/ui-sdk/core';
import { CurrencyModule, LanguageSelectorModule, TagsColorInputModule } from '@gauzy/ui-sdk/shared';
import { OrganizationsService } from '@gauzy/ui-sdk/core';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { TableInventoryComponent } from './components/table-inventory-items/table-inventory.component';
import { InventoryComponent } from './components/inventory.component';
import { SharedModule } from '@gauzy/ui-sdk/shared';
import { VariantTableComponent } from './components/edit-inventory-item/variant-table/variant-table.component';
import { OptionsFormComponent } from './components/edit-inventory-item/options-form/options-form.component';
import { VariantFormComponent } from './components/edit-inventory-item/variant-form/variant-form.component';
import { InventoryVariantFormComponent } from './components/edit-inventory-item-variant/variant-form.component';
import { CardGridModule } from './../../@shared/card-grid/card-grid.module';
import { ProductGalleryComponent } from './components/edit-inventory-item/product-gallery/product-gallery.component';
import { InventoryItemViewComponent } from './components/view-inventory-item/view-inventory-item.component';
import { MerchantModule } from './components/manage-merchants/merchant.module';
import { ProductTypesModule } from './components/manage-product-types/product-types.module';
import { ProductCategoriesModule } from './components/manage-product-categories/product-categories.module';
import { WarehousesModule } from './components/manage-warehouses/warehouses.module';
import { InventoryTableComponentsModule } from './components/inventory-table-components/inventory-table-components.module';
import { SelectAssetModule } from '../../@shared/select-asset-modal/select-asset.module';
import { ImageAssetModule } from '../../@shared/image-asset/image-asset.module';
import { PaginationV2Module } from '@gauzy/ui-sdk/shared';
import { GauzyButtonActionModule } from '@gauzy/ui-sdk/shared';
import { ProductTypeSelectorModule } from '../../@shared/product-type-selector/product-type-selector.module';
import { ProductCategorySelectorModule } from '../../@shared/product-category-selector/product-category-selector.module';

const NB_MODULES = [
	NbCardModule,
	NbButtonModule,
	NbIconModule,
	NbSpinnerModule,
	NbDialogModule,
	NbCheckboxModule,
	NbSelectModule,
	NbTabsetModule,
	NbInputModule,
	NbStepperModule,
	NbTooltipModule,
	NbBadgeModule,
	NbDialogModule.forChild()
];

@NgModule({
	declarations: [
		InventoryComponent,
		InventoryItemViewComponent,
		InventoryVariantFormComponent,
		OptionsFormComponent,
		ProductGalleryComponent,
		ProductFormComponent,
		TableInventoryComponent,
		VariantFormComponent,
		VariantTableComponent
	],
	imports: [
		CardGridModule,
		CommonModule,
		CurrencyModule,
		FormsModule,
		ImageAssetModule,
		InventoryRoutingModule,
		MerchantModule,
		...NB_MODULES,
		NgSelectModule,
		Angular2SmartTableModule,
		PaginationV2Module,
		ProductTypesModule,
		ProductCategoriesModule,
		ReactiveFormsModule,
		SharedModule,
		SelectAssetModule,
		InventoryTableComponentsModule,
		TagsColorInputModule,
		ThemeModule,
		I18nTranslateModule.forChild(),
		WarehousesModule,
		LanguageSelectorModule,
		GauzyButtonActionModule,
		ProductTypeSelectorModule,
		ProductCategorySelectorModule,
		NgxPermissionsModule.forChild()
	],
	providers: [
		ProductService,
		ProductVariantService,
		ProductVariantSettingService,
		ProductVariantPriceService,
		OrganizationsService,
		ImageAssetService,
		InventoryStore,
		TranslatableService
	]
})
export class InventoryModule {}
