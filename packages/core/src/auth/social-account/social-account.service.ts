import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial } from 'typeorm';
import { ISocialAccount, ISocialAccountBase } from '@gauzy/contracts';
import { TenantAwareCrudService } from '../../core/crud';
import { SocialAccount } from './social-account.entity';
import { MicroOrmSocialAccountRepository, TypeOrmSocialAccountRepository } from './repository';
import { User } from '../../user';

@Injectable()
export class SocialAccountService extends TenantAwareCrudService<SocialAccount> {
	constructor(
		@InjectRepository(SocialAccount) readonly typeOrmSocialAccountRepository: TypeOrmSocialAccountRepository,
		readonly mikroOrmSocialAccountRepository: MicroOrmSocialAccountRepository
	) {
		super(typeOrmSocialAccountRepository, mikroOrmSocialAccountRepository);
	}

	async registerSocialAccount(partialEntity: DeepPartial<ISocialAccount>): Promise<ISocialAccount> {
		try {
			return await this.typeOrmRepository.save(partialEntity);
		} catch (error) {
			throw new BadRequestException('Could not create this account');
		}
	}

	async findAccountByProvider(input: ISocialAccountBase): Promise<SocialAccount> {
		const { provider, providerAccountId } = input;
		return await this.typeOrmRepository.findOne({
			where: { provider, providerAccountId, isActive: true, isArchived: false },
			relations: {
				user: true
			}
		});
	}

	async findUserBySocialId(input: ISocialAccountBase): Promise<User> {
		return (await this.findAccountByProvider(input)).user;
	}
}
