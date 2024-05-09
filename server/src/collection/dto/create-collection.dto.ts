import { IsNotEmpty,  IsOptional, IsString } from "class-validator"
import { User } from "src/user/entities/user.entity"


export class CreateCollectionDto {

    @IsNotEmpty()
    @IsString()
    title: string

    @IsOptional()
    @IsString()
    img?: string

    @IsOptional()
    user?: User
}



// Ошибка   [Nest] 2908  - 27.04.2024, 20:34:17   ERROR [ExceptionsHandler] неверный синтаксис для типа integer: "NaN"
// QueryFailedError: неверный синтаксис для типа integer: "NaN"
//     at PostgresQueryRunner.query (E:\journayJournalV2_Test\server\src\driver\postgres\PostgresQueryRunner.ts:331:19)
//     at processTicksAndRejections (node:internal/process/task_queues:95:5)
//     at SelectQueryBuilder.loadRawResults (E:\journayJournalV2_Test\server\src\query-builder\SelectQueryBuilder.ts:3805:25)
//     at SelectQueryBuilder.executeEntitiesAndRawResults (E:\journayJournalV2_Test\server\src\query-builder\SelectQueryBuilder.ts:3551:26)
//     at SelectQueryBuilder.getRawAndEntities (E:\journayJournalV2_Test\server\src\query-builder\SelectQueryBuilder.ts:1670:29)
//     at SelectQueryBuilder.getMany (E:\journayJournalV2_Test\server\src\query-builder\SelectQueryBuilder.ts:1760:25)
//     at CollectionService.create (E:\journayJournalV2_Test\server\src\collection\collection.service.ts:23:21)
//     at E:\journayJournalV2_Test\server\node_modules\@nestjs\core\router\router-execution-context.js:46:28
//     at E:\journayJournalV2_Test\server\node_modules\@nestjs\core\router\router-proxy.js:9:17
