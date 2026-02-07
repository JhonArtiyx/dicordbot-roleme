
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AutoRole
 * 
 */
export type AutoRole = $Result.DefaultSelection<Prisma.$AutoRolePayload>
/**
 * Model ReactionRole
 * 
 */
export type ReactionRole = $Result.DefaultSelection<Prisma.$ReactionRolePayload>
/**
 * Model VerificationConfig
 * 
 */
export type VerificationConfig = $Result.DefaultSelection<Prisma.$VerificationConfigPayload>
/**
 * Model TicketConfig
 * 
 */
export type TicketConfig = $Result.DefaultSelection<Prisma.$TicketConfigPayload>
/**
 * Model TicketCategory
 * 
 */
export type TicketCategory = $Result.DefaultSelection<Prisma.$TicketCategoryPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model TicketMessage
 * 
 */
export type TicketMessage = $Result.DefaultSelection<Prisma.$TicketMessagePayload>
/**
 * Model TicketRating
 * 
 */
export type TicketRating = $Result.DefaultSelection<Prisma.$TicketRatingPayload>
/**
 * Model LevelConfig
 * 
 */
export type LevelConfig = $Result.DefaultSelection<Prisma.$LevelConfigPayload>
/**
 * Model UserLevel
 * 
 */
export type UserLevel = $Result.DefaultSelection<Prisma.$UserLevelPayload>
/**
 * Model LevelReward
 * 
 */
export type LevelReward = $Result.DefaultSelection<Prisma.$LevelRewardPayload>
/**
 * Model StatsChannelConfig
 * 
 */
export type StatsChannelConfig = $Result.DefaultSelection<Prisma.$StatsChannelConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleMode: {
  SINGLE: 'SINGLE',
  MULTIPLE: 'MULTIPLE'
};

export type RoleMode = (typeof RoleMode)[keyof typeof RoleMode]


export const TicketStatus: {
  OPEN: 'OPEN',
  CLAIMED: 'CLAIMED',
  CLOSED: 'CLOSED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]

}

export type RoleMode = $Enums.RoleMode

export const RoleMode: typeof $Enums.RoleMode

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AutoRoles
 * const autoRoles = await prisma.autoRole.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AutoRoles
   * const autoRoles = await prisma.autoRole.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.autoRole`: Exposes CRUD operations for the **AutoRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutoRoles
    * const autoRoles = await prisma.autoRole.findMany()
    * ```
    */
  get autoRole(): Prisma.AutoRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reactionRole`: Exposes CRUD operations for the **ReactionRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReactionRoles
    * const reactionRoles = await prisma.reactionRole.findMany()
    * ```
    */
  get reactionRole(): Prisma.ReactionRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationConfig`: Exposes CRUD operations for the **VerificationConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationConfigs
    * const verificationConfigs = await prisma.verificationConfig.findMany()
    * ```
    */
  get verificationConfig(): Prisma.VerificationConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketConfig`: Exposes CRUD operations for the **TicketConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketConfigs
    * const ticketConfigs = await prisma.ticketConfig.findMany()
    * ```
    */
  get ticketConfig(): Prisma.TicketConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketCategory`: Exposes CRUD operations for the **TicketCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketCategories
    * const ticketCategories = await prisma.ticketCategory.findMany()
    * ```
    */
  get ticketCategory(): Prisma.TicketCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketMessage`: Exposes CRUD operations for the **TicketMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketMessages
    * const ticketMessages = await prisma.ticketMessage.findMany()
    * ```
    */
  get ticketMessage(): Prisma.TicketMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketRating`: Exposes CRUD operations for the **TicketRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketRatings
    * const ticketRatings = await prisma.ticketRating.findMany()
    * ```
    */
  get ticketRating(): Prisma.TicketRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.levelConfig`: Exposes CRUD operations for the **LevelConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LevelConfigs
    * const levelConfigs = await prisma.levelConfig.findMany()
    * ```
    */
  get levelConfig(): Prisma.LevelConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLevel`: Exposes CRUD operations for the **UserLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLevels
    * const userLevels = await prisma.userLevel.findMany()
    * ```
    */
  get userLevel(): Prisma.UserLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.levelReward`: Exposes CRUD operations for the **LevelReward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LevelRewards
    * const levelRewards = await prisma.levelReward.findMany()
    * ```
    */
  get levelReward(): Prisma.LevelRewardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statsChannelConfig`: Exposes CRUD operations for the **StatsChannelConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatsChannelConfigs
    * const statsChannelConfigs = await prisma.statsChannelConfig.findMany()
    * ```
    */
  get statsChannelConfig(): Prisma.StatsChannelConfigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AutoRole: 'AutoRole',
    ReactionRole: 'ReactionRole',
    VerificationConfig: 'VerificationConfig',
    TicketConfig: 'TicketConfig',
    TicketCategory: 'TicketCategory',
    Ticket: 'Ticket',
    TicketMessage: 'TicketMessage',
    TicketRating: 'TicketRating',
    LevelConfig: 'LevelConfig',
    UserLevel: 'UserLevel',
    LevelReward: 'LevelReward',
    StatsChannelConfig: 'StatsChannelConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "autoRole" | "reactionRole" | "verificationConfig" | "ticketConfig" | "ticketCategory" | "ticket" | "ticketMessage" | "ticketRating" | "levelConfig" | "userLevel" | "levelReward" | "statsChannelConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AutoRole: {
        payload: Prisma.$AutoRolePayload<ExtArgs>
        fields: Prisma.AutoRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutoRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutoRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRolePayload>
          }
          findFirst: {
            args: Prisma.AutoRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutoRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRolePayload>
          }
          findMany: {
            args: Prisma.AutoRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRolePayload>[]
          }
          create: {
            args: Prisma.AutoRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRolePayload>
          }
          createMany: {
            args: Prisma.AutoRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutoRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRolePayload>[]
          }
          delete: {
            args: Prisma.AutoRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRolePayload>
          }
          update: {
            args: Prisma.AutoRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRolePayload>
          }
          deleteMany: {
            args: Prisma.AutoRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutoRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutoRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRolePayload>[]
          }
          upsert: {
            args: Prisma.AutoRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoRolePayload>
          }
          aggregate: {
            args: Prisma.AutoRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutoRole>
          }
          groupBy: {
            args: Prisma.AutoRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutoRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutoRoleCountArgs<ExtArgs>
            result: $Utils.Optional<AutoRoleCountAggregateOutputType> | number
          }
        }
      }
      ReactionRole: {
        payload: Prisma.$ReactionRolePayload<ExtArgs>
        fields: Prisma.ReactionRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>
          }
          findFirst: {
            args: Prisma.ReactionRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>
          }
          findMany: {
            args: Prisma.ReactionRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>[]
          }
          create: {
            args: Prisma.ReactionRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>
          }
          createMany: {
            args: Prisma.ReactionRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReactionRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>[]
          }
          delete: {
            args: Prisma.ReactionRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>
          }
          update: {
            args: Prisma.ReactionRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>
          }
          deleteMany: {
            args: Prisma.ReactionRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReactionRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>[]
          }
          upsert: {
            args: Prisma.ReactionRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>
          }
          aggregate: {
            args: Prisma.ReactionRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReactionRole>
          }
          groupBy: {
            args: Prisma.ReactionRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionRoleCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionRoleCountAggregateOutputType> | number
          }
        }
      }
      VerificationConfig: {
        payload: Prisma.$VerificationConfigPayload<ExtArgs>
        fields: Prisma.VerificationConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationConfigPayload>
          }
          findFirst: {
            args: Prisma.VerificationConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationConfigPayload>
          }
          findMany: {
            args: Prisma.VerificationConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationConfigPayload>[]
          }
          create: {
            args: Prisma.VerificationConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationConfigPayload>
          }
          createMany: {
            args: Prisma.VerificationConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationConfigPayload>[]
          }
          delete: {
            args: Prisma.VerificationConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationConfigPayload>
          }
          update: {
            args: Prisma.VerificationConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationConfigPayload>
          }
          deleteMany: {
            args: Prisma.VerificationConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationConfigPayload>[]
          }
          upsert: {
            args: Prisma.VerificationConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationConfigPayload>
          }
          aggregate: {
            args: Prisma.VerificationConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationConfig>
          }
          groupBy: {
            args: Prisma.VerificationConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationConfigCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationConfigCountAggregateOutputType> | number
          }
        }
      }
      TicketConfig: {
        payload: Prisma.$TicketConfigPayload<ExtArgs>
        fields: Prisma.TicketConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketConfigPayload>
          }
          findFirst: {
            args: Prisma.TicketConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketConfigPayload>
          }
          findMany: {
            args: Prisma.TicketConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketConfigPayload>[]
          }
          create: {
            args: Prisma.TicketConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketConfigPayload>
          }
          createMany: {
            args: Prisma.TicketConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketConfigPayload>[]
          }
          delete: {
            args: Prisma.TicketConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketConfigPayload>
          }
          update: {
            args: Prisma.TicketConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketConfigPayload>
          }
          deleteMany: {
            args: Prisma.TicketConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketConfigPayload>[]
          }
          upsert: {
            args: Prisma.TicketConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketConfigPayload>
          }
          aggregate: {
            args: Prisma.TicketConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketConfig>
          }
          groupBy: {
            args: Prisma.TicketConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketConfigCountArgs<ExtArgs>
            result: $Utils.Optional<TicketConfigCountAggregateOutputType> | number
          }
        }
      }
      TicketCategory: {
        payload: Prisma.$TicketCategoryPayload<ExtArgs>
        fields: Prisma.TicketCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          findFirst: {
            args: Prisma.TicketCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          findMany: {
            args: Prisma.TicketCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>[]
          }
          create: {
            args: Prisma.TicketCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          createMany: {
            args: Prisma.TicketCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>[]
          }
          delete: {
            args: Prisma.TicketCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          update: {
            args: Prisma.TicketCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          deleteMany: {
            args: Prisma.TicketCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>[]
          }
          upsert: {
            args: Prisma.TicketCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          aggregate: {
            args: Prisma.TicketCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketCategory>
          }
          groupBy: {
            args: Prisma.TicketCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCategoryCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      TicketMessage: {
        payload: Prisma.$TicketMessagePayload<ExtArgs>
        fields: Prisma.TicketMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          findFirst: {
            args: Prisma.TicketMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          findMany: {
            args: Prisma.TicketMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          create: {
            args: Prisma.TicketMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          createMany: {
            args: Prisma.TicketMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          delete: {
            args: Prisma.TicketMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          update: {
            args: Prisma.TicketMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          deleteMany: {
            args: Prisma.TicketMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          upsert: {
            args: Prisma.TicketMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          aggregate: {
            args: Prisma.TicketMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketMessage>
          }
          groupBy: {
            args: Prisma.TicketMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketMessageCountArgs<ExtArgs>
            result: $Utils.Optional<TicketMessageCountAggregateOutputType> | number
          }
        }
      }
      TicketRating: {
        payload: Prisma.$TicketRatingPayload<ExtArgs>
        fields: Prisma.TicketRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRatingPayload>
          }
          findFirst: {
            args: Prisma.TicketRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRatingPayload>
          }
          findMany: {
            args: Prisma.TicketRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRatingPayload>[]
          }
          create: {
            args: Prisma.TicketRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRatingPayload>
          }
          createMany: {
            args: Prisma.TicketRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRatingPayload>[]
          }
          delete: {
            args: Prisma.TicketRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRatingPayload>
          }
          update: {
            args: Prisma.TicketRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRatingPayload>
          }
          deleteMany: {
            args: Prisma.TicketRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRatingPayload>[]
          }
          upsert: {
            args: Prisma.TicketRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRatingPayload>
          }
          aggregate: {
            args: Prisma.TicketRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketRating>
          }
          groupBy: {
            args: Prisma.TicketRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketRatingCountArgs<ExtArgs>
            result: $Utils.Optional<TicketRatingCountAggregateOutputType> | number
          }
        }
      }
      LevelConfig: {
        payload: Prisma.$LevelConfigPayload<ExtArgs>
        fields: Prisma.LevelConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>
          }
          findFirst: {
            args: Prisma.LevelConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>
          }
          findMany: {
            args: Prisma.LevelConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>[]
          }
          create: {
            args: Prisma.LevelConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>
          }
          createMany: {
            args: Prisma.LevelConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>[]
          }
          delete: {
            args: Prisma.LevelConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>
          }
          update: {
            args: Prisma.LevelConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>
          }
          deleteMany: {
            args: Prisma.LevelConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>[]
          }
          upsert: {
            args: Prisma.LevelConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>
          }
          aggregate: {
            args: Prisma.LevelConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevelConfig>
          }
          groupBy: {
            args: Prisma.LevelConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelConfigCountArgs<ExtArgs>
            result: $Utils.Optional<LevelConfigCountAggregateOutputType> | number
          }
        }
      }
      UserLevel: {
        payload: Prisma.$UserLevelPayload<ExtArgs>
        fields: Prisma.UserLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLevelPayload>
          }
          findFirst: {
            args: Prisma.UserLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLevelPayload>
          }
          findMany: {
            args: Prisma.UserLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLevelPayload>[]
          }
          create: {
            args: Prisma.UserLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLevelPayload>
          }
          createMany: {
            args: Prisma.UserLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLevelPayload>[]
          }
          delete: {
            args: Prisma.UserLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLevelPayload>
          }
          update: {
            args: Prisma.UserLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLevelPayload>
          }
          deleteMany: {
            args: Prisma.UserLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLevelPayload>[]
          }
          upsert: {
            args: Prisma.UserLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLevelPayload>
          }
          aggregate: {
            args: Prisma.UserLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLevel>
          }
          groupBy: {
            args: Prisma.UserLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLevelCountArgs<ExtArgs>
            result: $Utils.Optional<UserLevelCountAggregateOutputType> | number
          }
        }
      }
      LevelReward: {
        payload: Prisma.$LevelRewardPayload<ExtArgs>
        fields: Prisma.LevelRewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelRewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelRewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRewardPayload>
          }
          findFirst: {
            args: Prisma.LevelRewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelRewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRewardPayload>
          }
          findMany: {
            args: Prisma.LevelRewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRewardPayload>[]
          }
          create: {
            args: Prisma.LevelRewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRewardPayload>
          }
          createMany: {
            args: Prisma.LevelRewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelRewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRewardPayload>[]
          }
          delete: {
            args: Prisma.LevelRewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRewardPayload>
          }
          update: {
            args: Prisma.LevelRewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRewardPayload>
          }
          deleteMany: {
            args: Prisma.LevelRewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelRewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelRewardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRewardPayload>[]
          }
          upsert: {
            args: Prisma.LevelRewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelRewardPayload>
          }
          aggregate: {
            args: Prisma.LevelRewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevelReward>
          }
          groupBy: {
            args: Prisma.LevelRewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelRewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelRewardCountArgs<ExtArgs>
            result: $Utils.Optional<LevelRewardCountAggregateOutputType> | number
          }
        }
      }
      StatsChannelConfig: {
        payload: Prisma.$StatsChannelConfigPayload<ExtArgs>
        fields: Prisma.StatsChannelConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatsChannelConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsChannelConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatsChannelConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsChannelConfigPayload>
          }
          findFirst: {
            args: Prisma.StatsChannelConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsChannelConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatsChannelConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsChannelConfigPayload>
          }
          findMany: {
            args: Prisma.StatsChannelConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsChannelConfigPayload>[]
          }
          create: {
            args: Prisma.StatsChannelConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsChannelConfigPayload>
          }
          createMany: {
            args: Prisma.StatsChannelConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatsChannelConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsChannelConfigPayload>[]
          }
          delete: {
            args: Prisma.StatsChannelConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsChannelConfigPayload>
          }
          update: {
            args: Prisma.StatsChannelConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsChannelConfigPayload>
          }
          deleteMany: {
            args: Prisma.StatsChannelConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatsChannelConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatsChannelConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsChannelConfigPayload>[]
          }
          upsert: {
            args: Prisma.StatsChannelConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsChannelConfigPayload>
          }
          aggregate: {
            args: Prisma.StatsChannelConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatsChannelConfig>
          }
          groupBy: {
            args: Prisma.StatsChannelConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatsChannelConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatsChannelConfigCountArgs<ExtArgs>
            result: $Utils.Optional<StatsChannelConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    autoRole?: AutoRoleOmit
    reactionRole?: ReactionRoleOmit
    verificationConfig?: VerificationConfigOmit
    ticketConfig?: TicketConfigOmit
    ticketCategory?: TicketCategoryOmit
    ticket?: TicketOmit
    ticketMessage?: TicketMessageOmit
    ticketRating?: TicketRatingOmit
    levelConfig?: LevelConfigOmit
    userLevel?: UserLevelOmit
    levelReward?: LevelRewardOmit
    statsChannelConfig?: StatsChannelConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TicketConfigCountOutputType
   */

  export type TicketConfigCountOutputType = {
    categories: number
    tickets: number
  }

  export type TicketConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | TicketConfigCountOutputTypeCountCategoriesArgs
    tickets?: boolean | TicketConfigCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * TicketConfigCountOutputType without action
   */
  export type TicketConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfigCountOutputType
     */
    select?: TicketConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketConfigCountOutputType without action
   */
  export type TicketConfigCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCategoryWhereInput
  }

  /**
   * TicketConfigCountOutputType without action
   */
  export type TicketConfigCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type TicketCategoryCountOutputType
   */

  export type TicketCategoryCountOutputType = {
    tickets: number
  }

  export type TicketCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | TicketCategoryCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * TicketCategoryCountOutputType without action
   */
  export type TicketCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategoryCountOutputType
     */
    select?: TicketCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCategoryCountOutputType without action
   */
  export type TicketCategoryCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    messages: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | TicketCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketMessageWhereInput
  }


  /**
   * Count Type LevelConfigCountOutputType
   */

  export type LevelConfigCountOutputType = {
    rewards: number
  }

  export type LevelConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rewards?: boolean | LevelConfigCountOutputTypeCountRewardsArgs
  }

  // Custom InputTypes
  /**
   * LevelConfigCountOutputType without action
   */
  export type LevelConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfigCountOutputType
     */
    select?: LevelConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LevelConfigCountOutputType without action
   */
  export type LevelConfigCountOutputTypeCountRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelRewardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AutoRole
   */

  export type AggregateAutoRole = {
    _count: AutoRoleCountAggregateOutputType | null
    _min: AutoRoleMinAggregateOutputType | null
    _max: AutoRoleMaxAggregateOutputType | null
  }

  export type AutoRoleMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutoRoleMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutoRoleCountAggregateOutputType = {
    id: number
    guildId: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AutoRoleMinAggregateInputType = {
    id?: true
    guildId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutoRoleMaxAggregateInputType = {
    id?: true
    guildId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutoRoleCountAggregateInputType = {
    id?: true
    guildId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AutoRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutoRole to aggregate.
     */
    where?: AutoRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoRoles to fetch.
     */
    orderBy?: AutoRoleOrderByWithRelationInput | AutoRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutoRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutoRoles
    **/
    _count?: true | AutoRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutoRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutoRoleMaxAggregateInputType
  }

  export type GetAutoRoleAggregateType<T extends AutoRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateAutoRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutoRole[P]>
      : GetScalarType<T[P], AggregateAutoRole[P]>
  }




  export type AutoRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutoRoleWhereInput
    orderBy?: AutoRoleOrderByWithAggregationInput | AutoRoleOrderByWithAggregationInput[]
    by: AutoRoleScalarFieldEnum[] | AutoRoleScalarFieldEnum
    having?: AutoRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutoRoleCountAggregateInputType | true
    _min?: AutoRoleMinAggregateInputType
    _max?: AutoRoleMaxAggregateInputType
  }

  export type AutoRoleGroupByOutputType = {
    id: string
    guildId: string
    roleId: string
    createdAt: Date
    updatedAt: Date
    _count: AutoRoleCountAggregateOutputType | null
    _min: AutoRoleMinAggregateOutputType | null
    _max: AutoRoleMaxAggregateOutputType | null
  }

  type GetAutoRoleGroupByPayload<T extends AutoRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutoRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutoRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutoRoleGroupByOutputType[P]>
            : GetScalarType<T[P], AutoRoleGroupByOutputType[P]>
        }
      >
    >


  export type AutoRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["autoRole"]>

  export type AutoRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["autoRole"]>

  export type AutoRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["autoRole"]>

  export type AutoRoleSelectScalar = {
    id?: boolean
    guildId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AutoRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["autoRole"]>

  export type $AutoRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutoRole"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      roleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["autoRole"]>
    composites: {}
  }

  type AutoRoleGetPayload<S extends boolean | null | undefined | AutoRoleDefaultArgs> = $Result.GetResult<Prisma.$AutoRolePayload, S>

  type AutoRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutoRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutoRoleCountAggregateInputType | true
    }

  export interface AutoRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutoRole'], meta: { name: 'AutoRole' } }
    /**
     * Find zero or one AutoRole that matches the filter.
     * @param {AutoRoleFindUniqueArgs} args - Arguments to find a AutoRole
     * @example
     * // Get one AutoRole
     * const autoRole = await prisma.autoRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutoRoleFindUniqueArgs>(args: SelectSubset<T, AutoRoleFindUniqueArgs<ExtArgs>>): Prisma__AutoRoleClient<$Result.GetResult<Prisma.$AutoRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AutoRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutoRoleFindUniqueOrThrowArgs} args - Arguments to find a AutoRole
     * @example
     * // Get one AutoRole
     * const autoRole = await prisma.autoRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutoRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, AutoRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutoRoleClient<$Result.GetResult<Prisma.$AutoRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutoRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRoleFindFirstArgs} args - Arguments to find a AutoRole
     * @example
     * // Get one AutoRole
     * const autoRole = await prisma.autoRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutoRoleFindFirstArgs>(args?: SelectSubset<T, AutoRoleFindFirstArgs<ExtArgs>>): Prisma__AutoRoleClient<$Result.GetResult<Prisma.$AutoRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutoRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRoleFindFirstOrThrowArgs} args - Arguments to find a AutoRole
     * @example
     * // Get one AutoRole
     * const autoRole = await prisma.autoRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutoRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, AutoRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutoRoleClient<$Result.GetResult<Prisma.$AutoRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AutoRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutoRoles
     * const autoRoles = await prisma.autoRole.findMany()
     * 
     * // Get first 10 AutoRoles
     * const autoRoles = await prisma.autoRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autoRoleWithIdOnly = await prisma.autoRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutoRoleFindManyArgs>(args?: SelectSubset<T, AutoRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AutoRole.
     * @param {AutoRoleCreateArgs} args - Arguments to create a AutoRole.
     * @example
     * // Create one AutoRole
     * const AutoRole = await prisma.autoRole.create({
     *   data: {
     *     // ... data to create a AutoRole
     *   }
     * })
     * 
     */
    create<T extends AutoRoleCreateArgs>(args: SelectSubset<T, AutoRoleCreateArgs<ExtArgs>>): Prisma__AutoRoleClient<$Result.GetResult<Prisma.$AutoRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AutoRoles.
     * @param {AutoRoleCreateManyArgs} args - Arguments to create many AutoRoles.
     * @example
     * // Create many AutoRoles
     * const autoRole = await prisma.autoRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutoRoleCreateManyArgs>(args?: SelectSubset<T, AutoRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AutoRoles and returns the data saved in the database.
     * @param {AutoRoleCreateManyAndReturnArgs} args - Arguments to create many AutoRoles.
     * @example
     * // Create many AutoRoles
     * const autoRole = await prisma.autoRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AutoRoles and only return the `id`
     * const autoRoleWithIdOnly = await prisma.autoRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutoRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, AutoRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AutoRole.
     * @param {AutoRoleDeleteArgs} args - Arguments to delete one AutoRole.
     * @example
     * // Delete one AutoRole
     * const AutoRole = await prisma.autoRole.delete({
     *   where: {
     *     // ... filter to delete one AutoRole
     *   }
     * })
     * 
     */
    delete<T extends AutoRoleDeleteArgs>(args: SelectSubset<T, AutoRoleDeleteArgs<ExtArgs>>): Prisma__AutoRoleClient<$Result.GetResult<Prisma.$AutoRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AutoRole.
     * @param {AutoRoleUpdateArgs} args - Arguments to update one AutoRole.
     * @example
     * // Update one AutoRole
     * const autoRole = await prisma.autoRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutoRoleUpdateArgs>(args: SelectSubset<T, AutoRoleUpdateArgs<ExtArgs>>): Prisma__AutoRoleClient<$Result.GetResult<Prisma.$AutoRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AutoRoles.
     * @param {AutoRoleDeleteManyArgs} args - Arguments to filter AutoRoles to delete.
     * @example
     * // Delete a few AutoRoles
     * const { count } = await prisma.autoRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutoRoleDeleteManyArgs>(args?: SelectSubset<T, AutoRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutoRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutoRoles
     * const autoRole = await prisma.autoRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutoRoleUpdateManyArgs>(args: SelectSubset<T, AutoRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutoRoles and returns the data updated in the database.
     * @param {AutoRoleUpdateManyAndReturnArgs} args - Arguments to update many AutoRoles.
     * @example
     * // Update many AutoRoles
     * const autoRole = await prisma.autoRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AutoRoles and only return the `id`
     * const autoRoleWithIdOnly = await prisma.autoRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutoRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, AutoRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AutoRole.
     * @param {AutoRoleUpsertArgs} args - Arguments to update or create a AutoRole.
     * @example
     * // Update or create a AutoRole
     * const autoRole = await prisma.autoRole.upsert({
     *   create: {
     *     // ... data to create a AutoRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutoRole we want to update
     *   }
     * })
     */
    upsert<T extends AutoRoleUpsertArgs>(args: SelectSubset<T, AutoRoleUpsertArgs<ExtArgs>>): Prisma__AutoRoleClient<$Result.GetResult<Prisma.$AutoRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AutoRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRoleCountArgs} args - Arguments to filter AutoRoles to count.
     * @example
     * // Count the number of AutoRoles
     * const count = await prisma.autoRole.count({
     *   where: {
     *     // ... the filter for the AutoRoles we want to count
     *   }
     * })
    **/
    count<T extends AutoRoleCountArgs>(
      args?: Subset<T, AutoRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutoRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutoRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutoRoleAggregateArgs>(args: Subset<T, AutoRoleAggregateArgs>): Prisma.PrismaPromise<GetAutoRoleAggregateType<T>>

    /**
     * Group by AutoRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutoRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutoRoleGroupByArgs['orderBy'] }
        : { orderBy?: AutoRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutoRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutoRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutoRole model
   */
  readonly fields: AutoRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutoRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutoRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AutoRole model
   */
  interface AutoRoleFieldRefs {
    readonly id: FieldRef<"AutoRole", 'String'>
    readonly guildId: FieldRef<"AutoRole", 'String'>
    readonly roleId: FieldRef<"AutoRole", 'String'>
    readonly createdAt: FieldRef<"AutoRole", 'DateTime'>
    readonly updatedAt: FieldRef<"AutoRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AutoRole findUnique
   */
  export type AutoRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRole
     */
    select?: AutoRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRole
     */
    omit?: AutoRoleOmit<ExtArgs> | null
    /**
     * Filter, which AutoRole to fetch.
     */
    where: AutoRoleWhereUniqueInput
  }

  /**
   * AutoRole findUniqueOrThrow
   */
  export type AutoRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRole
     */
    select?: AutoRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRole
     */
    omit?: AutoRoleOmit<ExtArgs> | null
    /**
     * Filter, which AutoRole to fetch.
     */
    where: AutoRoleWhereUniqueInput
  }

  /**
   * AutoRole findFirst
   */
  export type AutoRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRole
     */
    select?: AutoRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRole
     */
    omit?: AutoRoleOmit<ExtArgs> | null
    /**
     * Filter, which AutoRole to fetch.
     */
    where?: AutoRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoRoles to fetch.
     */
    orderBy?: AutoRoleOrderByWithRelationInput | AutoRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutoRoles.
     */
    cursor?: AutoRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutoRoles.
     */
    distinct?: AutoRoleScalarFieldEnum | AutoRoleScalarFieldEnum[]
  }

  /**
   * AutoRole findFirstOrThrow
   */
  export type AutoRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRole
     */
    select?: AutoRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRole
     */
    omit?: AutoRoleOmit<ExtArgs> | null
    /**
     * Filter, which AutoRole to fetch.
     */
    where?: AutoRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoRoles to fetch.
     */
    orderBy?: AutoRoleOrderByWithRelationInput | AutoRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutoRoles.
     */
    cursor?: AutoRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutoRoles.
     */
    distinct?: AutoRoleScalarFieldEnum | AutoRoleScalarFieldEnum[]
  }

  /**
   * AutoRole findMany
   */
  export type AutoRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRole
     */
    select?: AutoRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRole
     */
    omit?: AutoRoleOmit<ExtArgs> | null
    /**
     * Filter, which AutoRoles to fetch.
     */
    where?: AutoRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoRoles to fetch.
     */
    orderBy?: AutoRoleOrderByWithRelationInput | AutoRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutoRoles.
     */
    cursor?: AutoRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoRoles.
     */
    skip?: number
    distinct?: AutoRoleScalarFieldEnum | AutoRoleScalarFieldEnum[]
  }

  /**
   * AutoRole create
   */
  export type AutoRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRole
     */
    select?: AutoRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRole
     */
    omit?: AutoRoleOmit<ExtArgs> | null
    /**
     * The data needed to create a AutoRole.
     */
    data: XOR<AutoRoleCreateInput, AutoRoleUncheckedCreateInput>
  }

  /**
   * AutoRole createMany
   */
  export type AutoRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutoRoles.
     */
    data: AutoRoleCreateManyInput | AutoRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutoRole createManyAndReturn
   */
  export type AutoRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRole
     */
    select?: AutoRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRole
     */
    omit?: AutoRoleOmit<ExtArgs> | null
    /**
     * The data used to create many AutoRoles.
     */
    data: AutoRoleCreateManyInput | AutoRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutoRole update
   */
  export type AutoRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRole
     */
    select?: AutoRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRole
     */
    omit?: AutoRoleOmit<ExtArgs> | null
    /**
     * The data needed to update a AutoRole.
     */
    data: XOR<AutoRoleUpdateInput, AutoRoleUncheckedUpdateInput>
    /**
     * Choose, which AutoRole to update.
     */
    where: AutoRoleWhereUniqueInput
  }

  /**
   * AutoRole updateMany
   */
  export type AutoRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutoRoles.
     */
    data: XOR<AutoRoleUpdateManyMutationInput, AutoRoleUncheckedUpdateManyInput>
    /**
     * Filter which AutoRoles to update
     */
    where?: AutoRoleWhereInput
    /**
     * Limit how many AutoRoles to update.
     */
    limit?: number
  }

  /**
   * AutoRole updateManyAndReturn
   */
  export type AutoRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRole
     */
    select?: AutoRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRole
     */
    omit?: AutoRoleOmit<ExtArgs> | null
    /**
     * The data used to update AutoRoles.
     */
    data: XOR<AutoRoleUpdateManyMutationInput, AutoRoleUncheckedUpdateManyInput>
    /**
     * Filter which AutoRoles to update
     */
    where?: AutoRoleWhereInput
    /**
     * Limit how many AutoRoles to update.
     */
    limit?: number
  }

  /**
   * AutoRole upsert
   */
  export type AutoRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRole
     */
    select?: AutoRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRole
     */
    omit?: AutoRoleOmit<ExtArgs> | null
    /**
     * The filter to search for the AutoRole to update in case it exists.
     */
    where: AutoRoleWhereUniqueInput
    /**
     * In case the AutoRole found by the `where` argument doesn't exist, create a new AutoRole with this data.
     */
    create: XOR<AutoRoleCreateInput, AutoRoleUncheckedCreateInput>
    /**
     * In case the AutoRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutoRoleUpdateInput, AutoRoleUncheckedUpdateInput>
  }

  /**
   * AutoRole delete
   */
  export type AutoRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRole
     */
    select?: AutoRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRole
     */
    omit?: AutoRoleOmit<ExtArgs> | null
    /**
     * Filter which AutoRole to delete.
     */
    where: AutoRoleWhereUniqueInput
  }

  /**
   * AutoRole deleteMany
   */
  export type AutoRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutoRoles to delete
     */
    where?: AutoRoleWhereInput
    /**
     * Limit how many AutoRoles to delete.
     */
    limit?: number
  }

  /**
   * AutoRole without action
   */
  export type AutoRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoRole
     */
    select?: AutoRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoRole
     */
    omit?: AutoRoleOmit<ExtArgs> | null
  }


  /**
   * Model ReactionRole
   */

  export type AggregateReactionRole = {
    _count: ReactionRoleCountAggregateOutputType | null
    _min: ReactionRoleMinAggregateOutputType | null
    _max: ReactionRoleMaxAggregateOutputType | null
  }

  export type ReactionRoleMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    channelId: string | null
    messageId: string | null
    emoji: string | null
    roleId: string | null
    mode: $Enums.RoleMode | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReactionRoleMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    channelId: string | null
    messageId: string | null
    emoji: string | null
    roleId: string | null
    mode: $Enums.RoleMode | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReactionRoleCountAggregateOutputType = {
    id: number
    guildId: number
    channelId: number
    messageId: number
    emoji: number
    roleId: number
    mode: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReactionRoleMinAggregateInputType = {
    id?: true
    guildId?: true
    channelId?: true
    messageId?: true
    emoji?: true
    roleId?: true
    mode?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReactionRoleMaxAggregateInputType = {
    id?: true
    guildId?: true
    channelId?: true
    messageId?: true
    emoji?: true
    roleId?: true
    mode?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReactionRoleCountAggregateInputType = {
    id?: true
    guildId?: true
    channelId?: true
    messageId?: true
    emoji?: true
    roleId?: true
    mode?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReactionRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReactionRole to aggregate.
     */
    where?: ReactionRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReactionRoles to fetch.
     */
    orderBy?: ReactionRoleOrderByWithRelationInput | ReactionRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReactionRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReactionRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReactionRoles
    **/
    _count?: true | ReactionRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionRoleMaxAggregateInputType
  }

  export type GetReactionRoleAggregateType<T extends ReactionRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateReactionRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReactionRole[P]>
      : GetScalarType<T[P], AggregateReactionRole[P]>
  }




  export type ReactionRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionRoleWhereInput
    orderBy?: ReactionRoleOrderByWithAggregationInput | ReactionRoleOrderByWithAggregationInput[]
    by: ReactionRoleScalarFieldEnum[] | ReactionRoleScalarFieldEnum
    having?: ReactionRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionRoleCountAggregateInputType | true
    _min?: ReactionRoleMinAggregateInputType
    _max?: ReactionRoleMaxAggregateInputType
  }

  export type ReactionRoleGroupByOutputType = {
    id: string
    guildId: string
    channelId: string
    messageId: string
    emoji: string
    roleId: string
    mode: $Enums.RoleMode
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReactionRoleCountAggregateOutputType | null
    _min: ReactionRoleMinAggregateOutputType | null
    _max: ReactionRoleMaxAggregateOutputType | null
  }

  type GetReactionRoleGroupByPayload<T extends ReactionRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionRoleGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionRoleGroupByOutputType[P]>
        }
      >
    >


  export type ReactionRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    channelId?: boolean
    messageId?: boolean
    emoji?: boolean
    roleId?: boolean
    mode?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reactionRole"]>

  export type ReactionRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    channelId?: boolean
    messageId?: boolean
    emoji?: boolean
    roleId?: boolean
    mode?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reactionRole"]>

  export type ReactionRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    channelId?: boolean
    messageId?: boolean
    emoji?: boolean
    roleId?: boolean
    mode?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reactionRole"]>

  export type ReactionRoleSelectScalar = {
    id?: boolean
    guildId?: boolean
    channelId?: boolean
    messageId?: boolean
    emoji?: boolean
    roleId?: boolean
    mode?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReactionRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "channelId" | "messageId" | "emoji" | "roleId" | "mode" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["reactionRole"]>

  export type $ReactionRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReactionRole"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      channelId: string
      messageId: string
      emoji: string
      roleId: string
      mode: $Enums.RoleMode
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reactionRole"]>
    composites: {}
  }

  type ReactionRoleGetPayload<S extends boolean | null | undefined | ReactionRoleDefaultArgs> = $Result.GetResult<Prisma.$ReactionRolePayload, S>

  type ReactionRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReactionRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReactionRoleCountAggregateInputType | true
    }

  export interface ReactionRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReactionRole'], meta: { name: 'ReactionRole' } }
    /**
     * Find zero or one ReactionRole that matches the filter.
     * @param {ReactionRoleFindUniqueArgs} args - Arguments to find a ReactionRole
     * @example
     * // Get one ReactionRole
     * const reactionRole = await prisma.reactionRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionRoleFindUniqueArgs>(args: SelectSubset<T, ReactionRoleFindUniqueArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReactionRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionRoleFindUniqueOrThrowArgs} args - Arguments to find a ReactionRole
     * @example
     * // Get one ReactionRole
     * const reactionRole = await prisma.reactionRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReactionRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleFindFirstArgs} args - Arguments to find a ReactionRole
     * @example
     * // Get one ReactionRole
     * const reactionRole = await prisma.reactionRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionRoleFindFirstArgs>(args?: SelectSubset<T, ReactionRoleFindFirstArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReactionRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleFindFirstOrThrowArgs} args - Arguments to find a ReactionRole
     * @example
     * // Get one ReactionRole
     * const reactionRole = await prisma.reactionRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReactionRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReactionRoles
     * const reactionRoles = await prisma.reactionRole.findMany()
     * 
     * // Get first 10 ReactionRoles
     * const reactionRoles = await prisma.reactionRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionRoleWithIdOnly = await prisma.reactionRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReactionRoleFindManyArgs>(args?: SelectSubset<T, ReactionRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReactionRole.
     * @param {ReactionRoleCreateArgs} args - Arguments to create a ReactionRole.
     * @example
     * // Create one ReactionRole
     * const ReactionRole = await prisma.reactionRole.create({
     *   data: {
     *     // ... data to create a ReactionRole
     *   }
     * })
     * 
     */
    create<T extends ReactionRoleCreateArgs>(args: SelectSubset<T, ReactionRoleCreateArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReactionRoles.
     * @param {ReactionRoleCreateManyArgs} args - Arguments to create many ReactionRoles.
     * @example
     * // Create many ReactionRoles
     * const reactionRole = await prisma.reactionRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionRoleCreateManyArgs>(args?: SelectSubset<T, ReactionRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReactionRoles and returns the data saved in the database.
     * @param {ReactionRoleCreateManyAndReturnArgs} args - Arguments to create many ReactionRoles.
     * @example
     * // Create many ReactionRoles
     * const reactionRole = await prisma.reactionRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReactionRoles and only return the `id`
     * const reactionRoleWithIdOnly = await prisma.reactionRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReactionRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, ReactionRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReactionRole.
     * @param {ReactionRoleDeleteArgs} args - Arguments to delete one ReactionRole.
     * @example
     * // Delete one ReactionRole
     * const ReactionRole = await prisma.reactionRole.delete({
     *   where: {
     *     // ... filter to delete one ReactionRole
     *   }
     * })
     * 
     */
    delete<T extends ReactionRoleDeleteArgs>(args: SelectSubset<T, ReactionRoleDeleteArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReactionRole.
     * @param {ReactionRoleUpdateArgs} args - Arguments to update one ReactionRole.
     * @example
     * // Update one ReactionRole
     * const reactionRole = await prisma.reactionRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionRoleUpdateArgs>(args: SelectSubset<T, ReactionRoleUpdateArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReactionRoles.
     * @param {ReactionRoleDeleteManyArgs} args - Arguments to filter ReactionRoles to delete.
     * @example
     * // Delete a few ReactionRoles
     * const { count } = await prisma.reactionRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionRoleDeleteManyArgs>(args?: SelectSubset<T, ReactionRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReactionRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReactionRoles
     * const reactionRole = await prisma.reactionRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionRoleUpdateManyArgs>(args: SelectSubset<T, ReactionRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReactionRoles and returns the data updated in the database.
     * @param {ReactionRoleUpdateManyAndReturnArgs} args - Arguments to update many ReactionRoles.
     * @example
     * // Update many ReactionRoles
     * const reactionRole = await prisma.reactionRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReactionRoles and only return the `id`
     * const reactionRoleWithIdOnly = await prisma.reactionRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReactionRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, ReactionRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReactionRole.
     * @param {ReactionRoleUpsertArgs} args - Arguments to update or create a ReactionRole.
     * @example
     * // Update or create a ReactionRole
     * const reactionRole = await prisma.reactionRole.upsert({
     *   create: {
     *     // ... data to create a ReactionRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReactionRole we want to update
     *   }
     * })
     */
    upsert<T extends ReactionRoleUpsertArgs>(args: SelectSubset<T, ReactionRoleUpsertArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReactionRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleCountArgs} args - Arguments to filter ReactionRoles to count.
     * @example
     * // Count the number of ReactionRoles
     * const count = await prisma.reactionRole.count({
     *   where: {
     *     // ... the filter for the ReactionRoles we want to count
     *   }
     * })
    **/
    count<T extends ReactionRoleCountArgs>(
      args?: Subset<T, ReactionRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReactionRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReactionRoleAggregateArgs>(args: Subset<T, ReactionRoleAggregateArgs>): Prisma.PrismaPromise<GetReactionRoleAggregateType<T>>

    /**
     * Group by ReactionRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReactionRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionRoleGroupByArgs['orderBy'] }
        : { orderBy?: ReactionRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReactionRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReactionRole model
   */
  readonly fields: ReactionRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReactionRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReactionRole model
   */
  interface ReactionRoleFieldRefs {
    readonly id: FieldRef<"ReactionRole", 'String'>
    readonly guildId: FieldRef<"ReactionRole", 'String'>
    readonly channelId: FieldRef<"ReactionRole", 'String'>
    readonly messageId: FieldRef<"ReactionRole", 'String'>
    readonly emoji: FieldRef<"ReactionRole", 'String'>
    readonly roleId: FieldRef<"ReactionRole", 'String'>
    readonly mode: FieldRef<"ReactionRole", 'RoleMode'>
    readonly description: FieldRef<"ReactionRole", 'String'>
    readonly createdAt: FieldRef<"ReactionRole", 'DateTime'>
    readonly updatedAt: FieldRef<"ReactionRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReactionRole findUnique
   */
  export type ReactionRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * Filter, which ReactionRole to fetch.
     */
    where: ReactionRoleWhereUniqueInput
  }

  /**
   * ReactionRole findUniqueOrThrow
   */
  export type ReactionRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * Filter, which ReactionRole to fetch.
     */
    where: ReactionRoleWhereUniqueInput
  }

  /**
   * ReactionRole findFirst
   */
  export type ReactionRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * Filter, which ReactionRole to fetch.
     */
    where?: ReactionRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReactionRoles to fetch.
     */
    orderBy?: ReactionRoleOrderByWithRelationInput | ReactionRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReactionRoles.
     */
    cursor?: ReactionRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReactionRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReactionRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReactionRoles.
     */
    distinct?: ReactionRoleScalarFieldEnum | ReactionRoleScalarFieldEnum[]
  }

  /**
   * ReactionRole findFirstOrThrow
   */
  export type ReactionRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * Filter, which ReactionRole to fetch.
     */
    where?: ReactionRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReactionRoles to fetch.
     */
    orderBy?: ReactionRoleOrderByWithRelationInput | ReactionRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReactionRoles.
     */
    cursor?: ReactionRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReactionRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReactionRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReactionRoles.
     */
    distinct?: ReactionRoleScalarFieldEnum | ReactionRoleScalarFieldEnum[]
  }

  /**
   * ReactionRole findMany
   */
  export type ReactionRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * Filter, which ReactionRoles to fetch.
     */
    where?: ReactionRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReactionRoles to fetch.
     */
    orderBy?: ReactionRoleOrderByWithRelationInput | ReactionRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReactionRoles.
     */
    cursor?: ReactionRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReactionRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReactionRoles.
     */
    skip?: number
    distinct?: ReactionRoleScalarFieldEnum | ReactionRoleScalarFieldEnum[]
  }

  /**
   * ReactionRole create
   */
  export type ReactionRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * The data needed to create a ReactionRole.
     */
    data: XOR<ReactionRoleCreateInput, ReactionRoleUncheckedCreateInput>
  }

  /**
   * ReactionRole createMany
   */
  export type ReactionRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReactionRoles.
     */
    data: ReactionRoleCreateManyInput | ReactionRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReactionRole createManyAndReturn
   */
  export type ReactionRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * The data used to create many ReactionRoles.
     */
    data: ReactionRoleCreateManyInput | ReactionRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReactionRole update
   */
  export type ReactionRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * The data needed to update a ReactionRole.
     */
    data: XOR<ReactionRoleUpdateInput, ReactionRoleUncheckedUpdateInput>
    /**
     * Choose, which ReactionRole to update.
     */
    where: ReactionRoleWhereUniqueInput
  }

  /**
   * ReactionRole updateMany
   */
  export type ReactionRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReactionRoles.
     */
    data: XOR<ReactionRoleUpdateManyMutationInput, ReactionRoleUncheckedUpdateManyInput>
    /**
     * Filter which ReactionRoles to update
     */
    where?: ReactionRoleWhereInput
    /**
     * Limit how many ReactionRoles to update.
     */
    limit?: number
  }

  /**
   * ReactionRole updateManyAndReturn
   */
  export type ReactionRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * The data used to update ReactionRoles.
     */
    data: XOR<ReactionRoleUpdateManyMutationInput, ReactionRoleUncheckedUpdateManyInput>
    /**
     * Filter which ReactionRoles to update
     */
    where?: ReactionRoleWhereInput
    /**
     * Limit how many ReactionRoles to update.
     */
    limit?: number
  }

  /**
   * ReactionRole upsert
   */
  export type ReactionRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * The filter to search for the ReactionRole to update in case it exists.
     */
    where: ReactionRoleWhereUniqueInput
    /**
     * In case the ReactionRole found by the `where` argument doesn't exist, create a new ReactionRole with this data.
     */
    create: XOR<ReactionRoleCreateInput, ReactionRoleUncheckedCreateInput>
    /**
     * In case the ReactionRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionRoleUpdateInput, ReactionRoleUncheckedUpdateInput>
  }

  /**
   * ReactionRole delete
   */
  export type ReactionRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * Filter which ReactionRole to delete.
     */
    where: ReactionRoleWhereUniqueInput
  }

  /**
   * ReactionRole deleteMany
   */
  export type ReactionRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReactionRoles to delete
     */
    where?: ReactionRoleWhereInput
    /**
     * Limit how many ReactionRoles to delete.
     */
    limit?: number
  }

  /**
   * ReactionRole without action
   */
  export type ReactionRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
  }


  /**
   * Model VerificationConfig
   */

  export type AggregateVerificationConfig = {
    _count: VerificationConfigCountAggregateOutputType | null
    _min: VerificationConfigMinAggregateOutputType | null
    _max: VerificationConfigMaxAggregateOutputType | null
  }

  export type VerificationConfigMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    roleId: string | null
    difficulty: string | null
    question: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationConfigMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    roleId: string | null
    difficulty: string | null
    question: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationConfigCountAggregateOutputType = {
    id: number
    guildId: number
    roleId: number
    difficulty: number
    question: number
    answers: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationConfigMinAggregateInputType = {
    id?: true
    guildId?: true
    roleId?: true
    difficulty?: true
    question?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationConfigMaxAggregateInputType = {
    id?: true
    guildId?: true
    roleId?: true
    difficulty?: true
    question?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationConfigCountAggregateInputType = {
    id?: true
    guildId?: true
    roleId?: true
    difficulty?: true
    question?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationConfig to aggregate.
     */
    where?: VerificationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationConfigs to fetch.
     */
    orderBy?: VerificationConfigOrderByWithRelationInput | VerificationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationConfigs
    **/
    _count?: true | VerificationConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationConfigMaxAggregateInputType
  }

  export type GetVerificationConfigAggregateType<T extends VerificationConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationConfig[P]>
      : GetScalarType<T[P], AggregateVerificationConfig[P]>
  }




  export type VerificationConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationConfigWhereInput
    orderBy?: VerificationConfigOrderByWithAggregationInput | VerificationConfigOrderByWithAggregationInput[]
    by: VerificationConfigScalarFieldEnum[] | VerificationConfigScalarFieldEnum
    having?: VerificationConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationConfigCountAggregateInputType | true
    _min?: VerificationConfigMinAggregateInputType
    _max?: VerificationConfigMaxAggregateInputType
  }

  export type VerificationConfigGroupByOutputType = {
    id: string
    guildId: string
    roleId: string | null
    difficulty: string
    question: string
    answers: string[]
    createdAt: Date
    updatedAt: Date
    _count: VerificationConfigCountAggregateOutputType | null
    _min: VerificationConfigMinAggregateOutputType | null
    _max: VerificationConfigMaxAggregateOutputType | null
  }

  type GetVerificationConfigGroupByPayload<T extends VerificationConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationConfigGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationConfigGroupByOutputType[P]>
        }
      >
    >


  export type VerificationConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    roleId?: boolean
    difficulty?: boolean
    question?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationConfig"]>

  export type VerificationConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    roleId?: boolean
    difficulty?: boolean
    question?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationConfig"]>

  export type VerificationConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    roleId?: boolean
    difficulty?: boolean
    question?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationConfig"]>

  export type VerificationConfigSelectScalar = {
    id?: boolean
    guildId?: boolean
    roleId?: boolean
    difficulty?: boolean
    question?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "roleId" | "difficulty" | "question" | "answers" | "createdAt" | "updatedAt", ExtArgs["result"]["verificationConfig"]>

  export type $VerificationConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      roleId: string | null
      difficulty: string
      question: string
      answers: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verificationConfig"]>
    composites: {}
  }

  type VerificationConfigGetPayload<S extends boolean | null | undefined | VerificationConfigDefaultArgs> = $Result.GetResult<Prisma.$VerificationConfigPayload, S>

  type VerificationConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationConfigCountAggregateInputType | true
    }

  export interface VerificationConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationConfig'], meta: { name: 'VerificationConfig' } }
    /**
     * Find zero or one VerificationConfig that matches the filter.
     * @param {VerificationConfigFindUniqueArgs} args - Arguments to find a VerificationConfig
     * @example
     * // Get one VerificationConfig
     * const verificationConfig = await prisma.verificationConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationConfigFindUniqueArgs>(args: SelectSubset<T, VerificationConfigFindUniqueArgs<ExtArgs>>): Prisma__VerificationConfigClient<$Result.GetResult<Prisma.$VerificationConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationConfigFindUniqueOrThrowArgs} args - Arguments to find a VerificationConfig
     * @example
     * // Get one VerificationConfig
     * const verificationConfig = await prisma.verificationConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationConfigClient<$Result.GetResult<Prisma.$VerificationConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationConfigFindFirstArgs} args - Arguments to find a VerificationConfig
     * @example
     * // Get one VerificationConfig
     * const verificationConfig = await prisma.verificationConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationConfigFindFirstArgs>(args?: SelectSubset<T, VerificationConfigFindFirstArgs<ExtArgs>>): Prisma__VerificationConfigClient<$Result.GetResult<Prisma.$VerificationConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationConfigFindFirstOrThrowArgs} args - Arguments to find a VerificationConfig
     * @example
     * // Get one VerificationConfig
     * const verificationConfig = await prisma.verificationConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationConfigClient<$Result.GetResult<Prisma.$VerificationConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationConfigs
     * const verificationConfigs = await prisma.verificationConfig.findMany()
     * 
     * // Get first 10 VerificationConfigs
     * const verificationConfigs = await prisma.verificationConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationConfigWithIdOnly = await prisma.verificationConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationConfigFindManyArgs>(args?: SelectSubset<T, VerificationConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationConfig.
     * @param {VerificationConfigCreateArgs} args - Arguments to create a VerificationConfig.
     * @example
     * // Create one VerificationConfig
     * const VerificationConfig = await prisma.verificationConfig.create({
     *   data: {
     *     // ... data to create a VerificationConfig
     *   }
     * })
     * 
     */
    create<T extends VerificationConfigCreateArgs>(args: SelectSubset<T, VerificationConfigCreateArgs<ExtArgs>>): Prisma__VerificationConfigClient<$Result.GetResult<Prisma.$VerificationConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationConfigs.
     * @param {VerificationConfigCreateManyArgs} args - Arguments to create many VerificationConfigs.
     * @example
     * // Create many VerificationConfigs
     * const verificationConfig = await prisma.verificationConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationConfigCreateManyArgs>(args?: SelectSubset<T, VerificationConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationConfigs and returns the data saved in the database.
     * @param {VerificationConfigCreateManyAndReturnArgs} args - Arguments to create many VerificationConfigs.
     * @example
     * // Create many VerificationConfigs
     * const verificationConfig = await prisma.verificationConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationConfigs and only return the `id`
     * const verificationConfigWithIdOnly = await prisma.verificationConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationConfig.
     * @param {VerificationConfigDeleteArgs} args - Arguments to delete one VerificationConfig.
     * @example
     * // Delete one VerificationConfig
     * const VerificationConfig = await prisma.verificationConfig.delete({
     *   where: {
     *     // ... filter to delete one VerificationConfig
     *   }
     * })
     * 
     */
    delete<T extends VerificationConfigDeleteArgs>(args: SelectSubset<T, VerificationConfigDeleteArgs<ExtArgs>>): Prisma__VerificationConfigClient<$Result.GetResult<Prisma.$VerificationConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationConfig.
     * @param {VerificationConfigUpdateArgs} args - Arguments to update one VerificationConfig.
     * @example
     * // Update one VerificationConfig
     * const verificationConfig = await prisma.verificationConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationConfigUpdateArgs>(args: SelectSubset<T, VerificationConfigUpdateArgs<ExtArgs>>): Prisma__VerificationConfigClient<$Result.GetResult<Prisma.$VerificationConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationConfigs.
     * @param {VerificationConfigDeleteManyArgs} args - Arguments to filter VerificationConfigs to delete.
     * @example
     * // Delete a few VerificationConfigs
     * const { count } = await prisma.verificationConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationConfigDeleteManyArgs>(args?: SelectSubset<T, VerificationConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationConfigs
     * const verificationConfig = await prisma.verificationConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationConfigUpdateManyArgs>(args: SelectSubset<T, VerificationConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationConfigs and returns the data updated in the database.
     * @param {VerificationConfigUpdateManyAndReturnArgs} args - Arguments to update many VerificationConfigs.
     * @example
     * // Update many VerificationConfigs
     * const verificationConfig = await prisma.verificationConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationConfigs and only return the `id`
     * const verificationConfigWithIdOnly = await prisma.verificationConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationConfig.
     * @param {VerificationConfigUpsertArgs} args - Arguments to update or create a VerificationConfig.
     * @example
     * // Update or create a VerificationConfig
     * const verificationConfig = await prisma.verificationConfig.upsert({
     *   create: {
     *     // ... data to create a VerificationConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationConfig we want to update
     *   }
     * })
     */
    upsert<T extends VerificationConfigUpsertArgs>(args: SelectSubset<T, VerificationConfigUpsertArgs<ExtArgs>>): Prisma__VerificationConfigClient<$Result.GetResult<Prisma.$VerificationConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationConfigCountArgs} args - Arguments to filter VerificationConfigs to count.
     * @example
     * // Count the number of VerificationConfigs
     * const count = await prisma.verificationConfig.count({
     *   where: {
     *     // ... the filter for the VerificationConfigs we want to count
     *   }
     * })
    **/
    count<T extends VerificationConfigCountArgs>(
      args?: Subset<T, VerificationConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationConfigAggregateArgs>(args: Subset<T, VerificationConfigAggregateArgs>): Prisma.PrismaPromise<GetVerificationConfigAggregateType<T>>

    /**
     * Group by VerificationConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationConfigGroupByArgs['orderBy'] }
        : { orderBy?: VerificationConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationConfig model
   */
  readonly fields: VerificationConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationConfig model
   */
  interface VerificationConfigFieldRefs {
    readonly id: FieldRef<"VerificationConfig", 'String'>
    readonly guildId: FieldRef<"VerificationConfig", 'String'>
    readonly roleId: FieldRef<"VerificationConfig", 'String'>
    readonly difficulty: FieldRef<"VerificationConfig", 'String'>
    readonly question: FieldRef<"VerificationConfig", 'String'>
    readonly answers: FieldRef<"VerificationConfig", 'String[]'>
    readonly createdAt: FieldRef<"VerificationConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"VerificationConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationConfig findUnique
   */
  export type VerificationConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationConfig
     */
    select?: VerificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationConfig
     */
    omit?: VerificationConfigOmit<ExtArgs> | null
    /**
     * Filter, which VerificationConfig to fetch.
     */
    where: VerificationConfigWhereUniqueInput
  }

  /**
   * VerificationConfig findUniqueOrThrow
   */
  export type VerificationConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationConfig
     */
    select?: VerificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationConfig
     */
    omit?: VerificationConfigOmit<ExtArgs> | null
    /**
     * Filter, which VerificationConfig to fetch.
     */
    where: VerificationConfigWhereUniqueInput
  }

  /**
   * VerificationConfig findFirst
   */
  export type VerificationConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationConfig
     */
    select?: VerificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationConfig
     */
    omit?: VerificationConfigOmit<ExtArgs> | null
    /**
     * Filter, which VerificationConfig to fetch.
     */
    where?: VerificationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationConfigs to fetch.
     */
    orderBy?: VerificationConfigOrderByWithRelationInput | VerificationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationConfigs.
     */
    cursor?: VerificationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationConfigs.
     */
    distinct?: VerificationConfigScalarFieldEnum | VerificationConfigScalarFieldEnum[]
  }

  /**
   * VerificationConfig findFirstOrThrow
   */
  export type VerificationConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationConfig
     */
    select?: VerificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationConfig
     */
    omit?: VerificationConfigOmit<ExtArgs> | null
    /**
     * Filter, which VerificationConfig to fetch.
     */
    where?: VerificationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationConfigs to fetch.
     */
    orderBy?: VerificationConfigOrderByWithRelationInput | VerificationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationConfigs.
     */
    cursor?: VerificationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationConfigs.
     */
    distinct?: VerificationConfigScalarFieldEnum | VerificationConfigScalarFieldEnum[]
  }

  /**
   * VerificationConfig findMany
   */
  export type VerificationConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationConfig
     */
    select?: VerificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationConfig
     */
    omit?: VerificationConfigOmit<ExtArgs> | null
    /**
     * Filter, which VerificationConfigs to fetch.
     */
    where?: VerificationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationConfigs to fetch.
     */
    orderBy?: VerificationConfigOrderByWithRelationInput | VerificationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationConfigs.
     */
    cursor?: VerificationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationConfigs.
     */
    skip?: number
    distinct?: VerificationConfigScalarFieldEnum | VerificationConfigScalarFieldEnum[]
  }

  /**
   * VerificationConfig create
   */
  export type VerificationConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationConfig
     */
    select?: VerificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationConfig
     */
    omit?: VerificationConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationConfig.
     */
    data: XOR<VerificationConfigCreateInput, VerificationConfigUncheckedCreateInput>
  }

  /**
   * VerificationConfig createMany
   */
  export type VerificationConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationConfigs.
     */
    data: VerificationConfigCreateManyInput | VerificationConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationConfig createManyAndReturn
   */
  export type VerificationConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationConfig
     */
    select?: VerificationConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationConfig
     */
    omit?: VerificationConfigOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationConfigs.
     */
    data: VerificationConfigCreateManyInput | VerificationConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationConfig update
   */
  export type VerificationConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationConfig
     */
    select?: VerificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationConfig
     */
    omit?: VerificationConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationConfig.
     */
    data: XOR<VerificationConfigUpdateInput, VerificationConfigUncheckedUpdateInput>
    /**
     * Choose, which VerificationConfig to update.
     */
    where: VerificationConfigWhereUniqueInput
  }

  /**
   * VerificationConfig updateMany
   */
  export type VerificationConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationConfigs.
     */
    data: XOR<VerificationConfigUpdateManyMutationInput, VerificationConfigUncheckedUpdateManyInput>
    /**
     * Filter which VerificationConfigs to update
     */
    where?: VerificationConfigWhereInput
    /**
     * Limit how many VerificationConfigs to update.
     */
    limit?: number
  }

  /**
   * VerificationConfig updateManyAndReturn
   */
  export type VerificationConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationConfig
     */
    select?: VerificationConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationConfig
     */
    omit?: VerificationConfigOmit<ExtArgs> | null
    /**
     * The data used to update VerificationConfigs.
     */
    data: XOR<VerificationConfigUpdateManyMutationInput, VerificationConfigUncheckedUpdateManyInput>
    /**
     * Filter which VerificationConfigs to update
     */
    where?: VerificationConfigWhereInput
    /**
     * Limit how many VerificationConfigs to update.
     */
    limit?: number
  }

  /**
   * VerificationConfig upsert
   */
  export type VerificationConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationConfig
     */
    select?: VerificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationConfig
     */
    omit?: VerificationConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationConfig to update in case it exists.
     */
    where: VerificationConfigWhereUniqueInput
    /**
     * In case the VerificationConfig found by the `where` argument doesn't exist, create a new VerificationConfig with this data.
     */
    create: XOR<VerificationConfigCreateInput, VerificationConfigUncheckedCreateInput>
    /**
     * In case the VerificationConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationConfigUpdateInput, VerificationConfigUncheckedUpdateInput>
  }

  /**
   * VerificationConfig delete
   */
  export type VerificationConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationConfig
     */
    select?: VerificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationConfig
     */
    omit?: VerificationConfigOmit<ExtArgs> | null
    /**
     * Filter which VerificationConfig to delete.
     */
    where: VerificationConfigWhereUniqueInput
  }

  /**
   * VerificationConfig deleteMany
   */
  export type VerificationConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationConfigs to delete
     */
    where?: VerificationConfigWhereInput
    /**
     * Limit how many VerificationConfigs to delete.
     */
    limit?: number
  }

  /**
   * VerificationConfig without action
   */
  export type VerificationConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationConfig
     */
    select?: VerificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationConfig
     */
    omit?: VerificationConfigOmit<ExtArgs> | null
  }


  /**
   * Model TicketConfig
   */

  export type AggregateTicketConfig = {
    _count: TicketConfigCountAggregateOutputType | null
    _avg: TicketConfigAvgAggregateOutputType | null
    _sum: TicketConfigSumAggregateOutputType | null
    _min: TicketConfigMinAggregateOutputType | null
    _max: TicketConfigMaxAggregateOutputType | null
  }

  export type TicketConfigAvgAggregateOutputType = {
    maxOpenTickets: number | null
    autoCloseTime: number | null
  }

  export type TicketConfigSumAggregateOutputType = {
    maxOpenTickets: number | null
    autoCloseTime: number | null
  }

  export type TicketConfigMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    categoryChannelId: string | null
    transcriptsChannelId: string | null
    maxOpenTickets: number | null
    autoCloseTime: number | null
    welcomeMessage: string | null
    closeMessage: string | null
    enableRatings: boolean | null
    enableTranscripts: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketConfigMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    categoryChannelId: string | null
    transcriptsChannelId: string | null
    maxOpenTickets: number | null
    autoCloseTime: number | null
    welcomeMessage: string | null
    closeMessage: string | null
    enableRatings: boolean | null
    enableTranscripts: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketConfigCountAggregateOutputType = {
    id: number
    guildId: number
    categoryChannelId: number
    transcriptsChannelId: number
    supportRoleIds: number
    maxOpenTickets: number
    autoCloseTime: number
    welcomeMessage: number
    closeMessage: number
    enableRatings: number
    enableTranscripts: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketConfigAvgAggregateInputType = {
    maxOpenTickets?: true
    autoCloseTime?: true
  }

  export type TicketConfigSumAggregateInputType = {
    maxOpenTickets?: true
    autoCloseTime?: true
  }

  export type TicketConfigMinAggregateInputType = {
    id?: true
    guildId?: true
    categoryChannelId?: true
    transcriptsChannelId?: true
    maxOpenTickets?: true
    autoCloseTime?: true
    welcomeMessage?: true
    closeMessage?: true
    enableRatings?: true
    enableTranscripts?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketConfigMaxAggregateInputType = {
    id?: true
    guildId?: true
    categoryChannelId?: true
    transcriptsChannelId?: true
    maxOpenTickets?: true
    autoCloseTime?: true
    welcomeMessage?: true
    closeMessage?: true
    enableRatings?: true
    enableTranscripts?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketConfigCountAggregateInputType = {
    id?: true
    guildId?: true
    categoryChannelId?: true
    transcriptsChannelId?: true
    supportRoleIds?: true
    maxOpenTickets?: true
    autoCloseTime?: true
    welcomeMessage?: true
    closeMessage?: true
    enableRatings?: true
    enableTranscripts?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketConfig to aggregate.
     */
    where?: TicketConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketConfigs to fetch.
     */
    orderBy?: TicketConfigOrderByWithRelationInput | TicketConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketConfigs
    **/
    _count?: true | TicketConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketConfigMaxAggregateInputType
  }

  export type GetTicketConfigAggregateType<T extends TicketConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketConfig[P]>
      : GetScalarType<T[P], AggregateTicketConfig[P]>
  }




  export type TicketConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketConfigWhereInput
    orderBy?: TicketConfigOrderByWithAggregationInput | TicketConfigOrderByWithAggregationInput[]
    by: TicketConfigScalarFieldEnum[] | TicketConfigScalarFieldEnum
    having?: TicketConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketConfigCountAggregateInputType | true
    _avg?: TicketConfigAvgAggregateInputType
    _sum?: TicketConfigSumAggregateInputType
    _min?: TicketConfigMinAggregateInputType
    _max?: TicketConfigMaxAggregateInputType
  }

  export type TicketConfigGroupByOutputType = {
    id: string
    guildId: string
    categoryChannelId: string | null
    transcriptsChannelId: string | null
    supportRoleIds: string[]
    maxOpenTickets: number
    autoCloseTime: number | null
    welcomeMessage: string | null
    closeMessage: string | null
    enableRatings: boolean
    enableTranscripts: boolean
    createdAt: Date
    updatedAt: Date
    _count: TicketConfigCountAggregateOutputType | null
    _avg: TicketConfigAvgAggregateOutputType | null
    _sum: TicketConfigSumAggregateOutputType | null
    _min: TicketConfigMinAggregateOutputType | null
    _max: TicketConfigMaxAggregateOutputType | null
  }

  type GetTicketConfigGroupByPayload<T extends TicketConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketConfigGroupByOutputType[P]>
            : GetScalarType<T[P], TicketConfigGroupByOutputType[P]>
        }
      >
    >


  export type TicketConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    categoryChannelId?: boolean
    transcriptsChannelId?: boolean
    supportRoleIds?: boolean
    maxOpenTickets?: boolean
    autoCloseTime?: boolean
    welcomeMessage?: boolean
    closeMessage?: boolean
    enableRatings?: boolean
    enableTranscripts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | TicketConfig$categoriesArgs<ExtArgs>
    tickets?: boolean | TicketConfig$ticketsArgs<ExtArgs>
    _count?: boolean | TicketConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketConfig"]>

  export type TicketConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    categoryChannelId?: boolean
    transcriptsChannelId?: boolean
    supportRoleIds?: boolean
    maxOpenTickets?: boolean
    autoCloseTime?: boolean
    welcomeMessage?: boolean
    closeMessage?: boolean
    enableRatings?: boolean
    enableTranscripts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ticketConfig"]>

  export type TicketConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    categoryChannelId?: boolean
    transcriptsChannelId?: boolean
    supportRoleIds?: boolean
    maxOpenTickets?: boolean
    autoCloseTime?: boolean
    welcomeMessage?: boolean
    closeMessage?: boolean
    enableRatings?: boolean
    enableTranscripts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ticketConfig"]>

  export type TicketConfigSelectScalar = {
    id?: boolean
    guildId?: boolean
    categoryChannelId?: boolean
    transcriptsChannelId?: boolean
    supportRoleIds?: boolean
    maxOpenTickets?: boolean
    autoCloseTime?: boolean
    welcomeMessage?: boolean
    closeMessage?: boolean
    enableRatings?: boolean
    enableTranscripts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "categoryChannelId" | "transcriptsChannelId" | "supportRoleIds" | "maxOpenTickets" | "autoCloseTime" | "welcomeMessage" | "closeMessage" | "enableRatings" | "enableTranscripts" | "createdAt" | "updatedAt", ExtArgs["result"]["ticketConfig"]>
  export type TicketConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | TicketConfig$categoriesArgs<ExtArgs>
    tickets?: boolean | TicketConfig$ticketsArgs<ExtArgs>
    _count?: boolean | TicketConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TicketConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TicketConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketConfig"
    objects: {
      categories: Prisma.$TicketCategoryPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      categoryChannelId: string | null
      transcriptsChannelId: string | null
      supportRoleIds: string[]
      maxOpenTickets: number
      autoCloseTime: number | null
      welcomeMessage: string | null
      closeMessage: string | null
      enableRatings: boolean
      enableTranscripts: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticketConfig"]>
    composites: {}
  }

  type TicketConfigGetPayload<S extends boolean | null | undefined | TicketConfigDefaultArgs> = $Result.GetResult<Prisma.$TicketConfigPayload, S>

  type TicketConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketConfigCountAggregateInputType | true
    }

  export interface TicketConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketConfig'], meta: { name: 'TicketConfig' } }
    /**
     * Find zero or one TicketConfig that matches the filter.
     * @param {TicketConfigFindUniqueArgs} args - Arguments to find a TicketConfig
     * @example
     * // Get one TicketConfig
     * const ticketConfig = await prisma.ticketConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketConfigFindUniqueArgs>(args: SelectSubset<T, TicketConfigFindUniqueArgs<ExtArgs>>): Prisma__TicketConfigClient<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketConfigFindUniqueOrThrowArgs} args - Arguments to find a TicketConfig
     * @example
     * // Get one TicketConfig
     * const ticketConfig = await prisma.ticketConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketConfigClient<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketConfigFindFirstArgs} args - Arguments to find a TicketConfig
     * @example
     * // Get one TicketConfig
     * const ticketConfig = await prisma.ticketConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketConfigFindFirstArgs>(args?: SelectSubset<T, TicketConfigFindFirstArgs<ExtArgs>>): Prisma__TicketConfigClient<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketConfigFindFirstOrThrowArgs} args - Arguments to find a TicketConfig
     * @example
     * // Get one TicketConfig
     * const ticketConfig = await prisma.ticketConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketConfigClient<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketConfigs
     * const ticketConfigs = await prisma.ticketConfig.findMany()
     * 
     * // Get first 10 TicketConfigs
     * const ticketConfigs = await prisma.ticketConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketConfigWithIdOnly = await prisma.ticketConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketConfigFindManyArgs>(args?: SelectSubset<T, TicketConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketConfig.
     * @param {TicketConfigCreateArgs} args - Arguments to create a TicketConfig.
     * @example
     * // Create one TicketConfig
     * const TicketConfig = await prisma.ticketConfig.create({
     *   data: {
     *     // ... data to create a TicketConfig
     *   }
     * })
     * 
     */
    create<T extends TicketConfigCreateArgs>(args: SelectSubset<T, TicketConfigCreateArgs<ExtArgs>>): Prisma__TicketConfigClient<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketConfigs.
     * @param {TicketConfigCreateManyArgs} args - Arguments to create many TicketConfigs.
     * @example
     * // Create many TicketConfigs
     * const ticketConfig = await prisma.ticketConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketConfigCreateManyArgs>(args?: SelectSubset<T, TicketConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketConfigs and returns the data saved in the database.
     * @param {TicketConfigCreateManyAndReturnArgs} args - Arguments to create many TicketConfigs.
     * @example
     * // Create many TicketConfigs
     * const ticketConfig = await prisma.ticketConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketConfigs and only return the `id`
     * const ticketConfigWithIdOnly = await prisma.ticketConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketConfig.
     * @param {TicketConfigDeleteArgs} args - Arguments to delete one TicketConfig.
     * @example
     * // Delete one TicketConfig
     * const TicketConfig = await prisma.ticketConfig.delete({
     *   where: {
     *     // ... filter to delete one TicketConfig
     *   }
     * })
     * 
     */
    delete<T extends TicketConfigDeleteArgs>(args: SelectSubset<T, TicketConfigDeleteArgs<ExtArgs>>): Prisma__TicketConfigClient<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketConfig.
     * @param {TicketConfigUpdateArgs} args - Arguments to update one TicketConfig.
     * @example
     * // Update one TicketConfig
     * const ticketConfig = await prisma.ticketConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketConfigUpdateArgs>(args: SelectSubset<T, TicketConfigUpdateArgs<ExtArgs>>): Prisma__TicketConfigClient<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketConfigs.
     * @param {TicketConfigDeleteManyArgs} args - Arguments to filter TicketConfigs to delete.
     * @example
     * // Delete a few TicketConfigs
     * const { count } = await prisma.ticketConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketConfigDeleteManyArgs>(args?: SelectSubset<T, TicketConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketConfigs
     * const ticketConfig = await prisma.ticketConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketConfigUpdateManyArgs>(args: SelectSubset<T, TicketConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketConfigs and returns the data updated in the database.
     * @param {TicketConfigUpdateManyAndReturnArgs} args - Arguments to update many TicketConfigs.
     * @example
     * // Update many TicketConfigs
     * const ticketConfig = await prisma.ticketConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketConfigs and only return the `id`
     * const ticketConfigWithIdOnly = await prisma.ticketConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketConfig.
     * @param {TicketConfigUpsertArgs} args - Arguments to update or create a TicketConfig.
     * @example
     * // Update or create a TicketConfig
     * const ticketConfig = await prisma.ticketConfig.upsert({
     *   create: {
     *     // ... data to create a TicketConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketConfig we want to update
     *   }
     * })
     */
    upsert<T extends TicketConfigUpsertArgs>(args: SelectSubset<T, TicketConfigUpsertArgs<ExtArgs>>): Prisma__TicketConfigClient<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketConfigCountArgs} args - Arguments to filter TicketConfigs to count.
     * @example
     * // Count the number of TicketConfigs
     * const count = await prisma.ticketConfig.count({
     *   where: {
     *     // ... the filter for the TicketConfigs we want to count
     *   }
     * })
    **/
    count<T extends TicketConfigCountArgs>(
      args?: Subset<T, TicketConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketConfigAggregateArgs>(args: Subset<T, TicketConfigAggregateArgs>): Prisma.PrismaPromise<GetTicketConfigAggregateType<T>>

    /**
     * Group by TicketConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketConfigGroupByArgs['orderBy'] }
        : { orderBy?: TicketConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketConfig model
   */
  readonly fields: TicketConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends TicketConfig$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, TicketConfig$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends TicketConfig$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, TicketConfig$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketConfig model
   */
  interface TicketConfigFieldRefs {
    readonly id: FieldRef<"TicketConfig", 'String'>
    readonly guildId: FieldRef<"TicketConfig", 'String'>
    readonly categoryChannelId: FieldRef<"TicketConfig", 'String'>
    readonly transcriptsChannelId: FieldRef<"TicketConfig", 'String'>
    readonly supportRoleIds: FieldRef<"TicketConfig", 'String[]'>
    readonly maxOpenTickets: FieldRef<"TicketConfig", 'Int'>
    readonly autoCloseTime: FieldRef<"TicketConfig", 'Int'>
    readonly welcomeMessage: FieldRef<"TicketConfig", 'String'>
    readonly closeMessage: FieldRef<"TicketConfig", 'String'>
    readonly enableRatings: FieldRef<"TicketConfig", 'Boolean'>
    readonly enableTranscripts: FieldRef<"TicketConfig", 'Boolean'>
    readonly createdAt: FieldRef<"TicketConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketConfig findUnique
   */
  export type TicketConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfig
     */
    select?: TicketConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketConfig
     */
    omit?: TicketConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketConfigInclude<ExtArgs> | null
    /**
     * Filter, which TicketConfig to fetch.
     */
    where: TicketConfigWhereUniqueInput
  }

  /**
   * TicketConfig findUniqueOrThrow
   */
  export type TicketConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfig
     */
    select?: TicketConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketConfig
     */
    omit?: TicketConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketConfigInclude<ExtArgs> | null
    /**
     * Filter, which TicketConfig to fetch.
     */
    where: TicketConfigWhereUniqueInput
  }

  /**
   * TicketConfig findFirst
   */
  export type TicketConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfig
     */
    select?: TicketConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketConfig
     */
    omit?: TicketConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketConfigInclude<ExtArgs> | null
    /**
     * Filter, which TicketConfig to fetch.
     */
    where?: TicketConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketConfigs to fetch.
     */
    orderBy?: TicketConfigOrderByWithRelationInput | TicketConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketConfigs.
     */
    cursor?: TicketConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketConfigs.
     */
    distinct?: TicketConfigScalarFieldEnum | TicketConfigScalarFieldEnum[]
  }

  /**
   * TicketConfig findFirstOrThrow
   */
  export type TicketConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfig
     */
    select?: TicketConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketConfig
     */
    omit?: TicketConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketConfigInclude<ExtArgs> | null
    /**
     * Filter, which TicketConfig to fetch.
     */
    where?: TicketConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketConfigs to fetch.
     */
    orderBy?: TicketConfigOrderByWithRelationInput | TicketConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketConfigs.
     */
    cursor?: TicketConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketConfigs.
     */
    distinct?: TicketConfigScalarFieldEnum | TicketConfigScalarFieldEnum[]
  }

  /**
   * TicketConfig findMany
   */
  export type TicketConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfig
     */
    select?: TicketConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketConfig
     */
    omit?: TicketConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketConfigInclude<ExtArgs> | null
    /**
     * Filter, which TicketConfigs to fetch.
     */
    where?: TicketConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketConfigs to fetch.
     */
    orderBy?: TicketConfigOrderByWithRelationInput | TicketConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketConfigs.
     */
    cursor?: TicketConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketConfigs.
     */
    skip?: number
    distinct?: TicketConfigScalarFieldEnum | TicketConfigScalarFieldEnum[]
  }

  /**
   * TicketConfig create
   */
  export type TicketConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfig
     */
    select?: TicketConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketConfig
     */
    omit?: TicketConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketConfig.
     */
    data: XOR<TicketConfigCreateInput, TicketConfigUncheckedCreateInput>
  }

  /**
   * TicketConfig createMany
   */
  export type TicketConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketConfigs.
     */
    data: TicketConfigCreateManyInput | TicketConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketConfig createManyAndReturn
   */
  export type TicketConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfig
     */
    select?: TicketConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketConfig
     */
    omit?: TicketConfigOmit<ExtArgs> | null
    /**
     * The data used to create many TicketConfigs.
     */
    data: TicketConfigCreateManyInput | TicketConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketConfig update
   */
  export type TicketConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfig
     */
    select?: TicketConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketConfig
     */
    omit?: TicketConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketConfig.
     */
    data: XOR<TicketConfigUpdateInput, TicketConfigUncheckedUpdateInput>
    /**
     * Choose, which TicketConfig to update.
     */
    where: TicketConfigWhereUniqueInput
  }

  /**
   * TicketConfig updateMany
   */
  export type TicketConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketConfigs.
     */
    data: XOR<TicketConfigUpdateManyMutationInput, TicketConfigUncheckedUpdateManyInput>
    /**
     * Filter which TicketConfigs to update
     */
    where?: TicketConfigWhereInput
    /**
     * Limit how many TicketConfigs to update.
     */
    limit?: number
  }

  /**
   * TicketConfig updateManyAndReturn
   */
  export type TicketConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfig
     */
    select?: TicketConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketConfig
     */
    omit?: TicketConfigOmit<ExtArgs> | null
    /**
     * The data used to update TicketConfigs.
     */
    data: XOR<TicketConfigUpdateManyMutationInput, TicketConfigUncheckedUpdateManyInput>
    /**
     * Filter which TicketConfigs to update
     */
    where?: TicketConfigWhereInput
    /**
     * Limit how many TicketConfigs to update.
     */
    limit?: number
  }

  /**
   * TicketConfig upsert
   */
  export type TicketConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfig
     */
    select?: TicketConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketConfig
     */
    omit?: TicketConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketConfig to update in case it exists.
     */
    where: TicketConfigWhereUniqueInput
    /**
     * In case the TicketConfig found by the `where` argument doesn't exist, create a new TicketConfig with this data.
     */
    create: XOR<TicketConfigCreateInput, TicketConfigUncheckedCreateInput>
    /**
     * In case the TicketConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketConfigUpdateInput, TicketConfigUncheckedUpdateInput>
  }

  /**
   * TicketConfig delete
   */
  export type TicketConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfig
     */
    select?: TicketConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketConfig
     */
    omit?: TicketConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketConfigInclude<ExtArgs> | null
    /**
     * Filter which TicketConfig to delete.
     */
    where: TicketConfigWhereUniqueInput
  }

  /**
   * TicketConfig deleteMany
   */
  export type TicketConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketConfigs to delete
     */
    where?: TicketConfigWhereInput
    /**
     * Limit how many TicketConfigs to delete.
     */
    limit?: number
  }

  /**
   * TicketConfig.categories
   */
  export type TicketConfig$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    where?: TicketCategoryWhereInput
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    cursor?: TicketCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketConfig.tickets
   */
  export type TicketConfig$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * TicketConfig without action
   */
  export type TicketConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketConfig
     */
    select?: TicketConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketConfig
     */
    omit?: TicketConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketConfigInclude<ExtArgs> | null
  }


  /**
   * Model TicketCategory
   */

  export type AggregateTicketCategory = {
    _count: TicketCategoryCountAggregateOutputType | null
    _min: TicketCategoryMinAggregateOutputType | null
    _max: TicketCategoryMaxAggregateOutputType | null
  }

  export type TicketCategoryMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    name: string | null
    emoji: string | null
    description: string | null
    color: string | null
    configId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCategoryMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    name: string | null
    emoji: string | null
    description: string | null
    color: string | null
    configId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCategoryCountAggregateOutputType = {
    id: number
    guildId: number
    name: number
    emoji: number
    description: number
    color: number
    configId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketCategoryMinAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    emoji?: true
    description?: true
    color?: true
    configId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCategoryMaxAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    emoji?: true
    description?: true
    color?: true
    configId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCategoryCountAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    emoji?: true
    description?: true
    color?: true
    configId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketCategory to aggregate.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketCategories
    **/
    _count?: true | TicketCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketCategoryMaxAggregateInputType
  }

  export type GetTicketCategoryAggregateType<T extends TicketCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketCategory[P]>
      : GetScalarType<T[P], AggregateTicketCategory[P]>
  }




  export type TicketCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCategoryWhereInput
    orderBy?: TicketCategoryOrderByWithAggregationInput | TicketCategoryOrderByWithAggregationInput[]
    by: TicketCategoryScalarFieldEnum[] | TicketCategoryScalarFieldEnum
    having?: TicketCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCategoryCountAggregateInputType | true
    _min?: TicketCategoryMinAggregateInputType
    _max?: TicketCategoryMaxAggregateInputType
  }

  export type TicketCategoryGroupByOutputType = {
    id: string
    guildId: string
    name: string
    emoji: string | null
    description: string | null
    color: string
    configId: string
    createdAt: Date
    updatedAt: Date
    _count: TicketCategoryCountAggregateOutputType | null
    _min: TicketCategoryMinAggregateOutputType | null
    _max: TicketCategoryMaxAggregateOutputType | null
  }

  type GetTicketCategoryGroupByPayload<T extends TicketCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TicketCategoryGroupByOutputType[P]>
        }
      >
    >


  export type TicketCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    emoji?: boolean
    description?: boolean
    color?: boolean
    configId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    config?: boolean | TicketConfigDefaultArgs<ExtArgs>
    tickets?: boolean | TicketCategory$ticketsArgs<ExtArgs>
    _count?: boolean | TicketCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketCategory"]>

  export type TicketCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    emoji?: boolean
    description?: boolean
    color?: boolean
    configId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    config?: boolean | TicketConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketCategory"]>

  export type TicketCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    emoji?: boolean
    description?: boolean
    color?: boolean
    configId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    config?: boolean | TicketConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketCategory"]>

  export type TicketCategorySelectScalar = {
    id?: boolean
    guildId?: boolean
    name?: boolean
    emoji?: boolean
    description?: boolean
    color?: boolean
    configId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "name" | "emoji" | "description" | "color" | "configId" | "createdAt" | "updatedAt", ExtArgs["result"]["ticketCategory"]>
  export type TicketCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | TicketConfigDefaultArgs<ExtArgs>
    tickets?: boolean | TicketCategory$ticketsArgs<ExtArgs>
    _count?: boolean | TicketCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | TicketConfigDefaultArgs<ExtArgs>
  }
  export type TicketCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | TicketConfigDefaultArgs<ExtArgs>
  }

  export type $TicketCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketCategory"
    objects: {
      config: Prisma.$TicketConfigPayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      name: string
      emoji: string | null
      description: string | null
      color: string
      configId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticketCategory"]>
    composites: {}
  }

  type TicketCategoryGetPayload<S extends boolean | null | undefined | TicketCategoryDefaultArgs> = $Result.GetResult<Prisma.$TicketCategoryPayload, S>

  type TicketCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCategoryCountAggregateInputType | true
    }

  export interface TicketCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketCategory'], meta: { name: 'TicketCategory' } }
    /**
     * Find zero or one TicketCategory that matches the filter.
     * @param {TicketCategoryFindUniqueArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketCategoryFindUniqueArgs>(args: SelectSubset<T, TicketCategoryFindUniqueArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketCategoryFindUniqueOrThrowArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryFindFirstArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketCategoryFindFirstArgs>(args?: SelectSubset<T, TicketCategoryFindFirstArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryFindFirstOrThrowArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketCategories
     * const ticketCategories = await prisma.ticketCategory.findMany()
     * 
     * // Get first 10 TicketCategories
     * const ticketCategories = await prisma.ticketCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketCategoryWithIdOnly = await prisma.ticketCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketCategoryFindManyArgs>(args?: SelectSubset<T, TicketCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketCategory.
     * @param {TicketCategoryCreateArgs} args - Arguments to create a TicketCategory.
     * @example
     * // Create one TicketCategory
     * const TicketCategory = await prisma.ticketCategory.create({
     *   data: {
     *     // ... data to create a TicketCategory
     *   }
     * })
     * 
     */
    create<T extends TicketCategoryCreateArgs>(args: SelectSubset<T, TicketCategoryCreateArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketCategories.
     * @param {TicketCategoryCreateManyArgs} args - Arguments to create many TicketCategories.
     * @example
     * // Create many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCategoryCreateManyArgs>(args?: SelectSubset<T, TicketCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketCategories and returns the data saved in the database.
     * @param {TicketCategoryCreateManyAndReturnArgs} args - Arguments to create many TicketCategories.
     * @example
     * // Create many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketCategories and only return the `id`
     * const ticketCategoryWithIdOnly = await prisma.ticketCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketCategory.
     * @param {TicketCategoryDeleteArgs} args - Arguments to delete one TicketCategory.
     * @example
     * // Delete one TicketCategory
     * const TicketCategory = await prisma.ticketCategory.delete({
     *   where: {
     *     // ... filter to delete one TicketCategory
     *   }
     * })
     * 
     */
    delete<T extends TicketCategoryDeleteArgs>(args: SelectSubset<T, TicketCategoryDeleteArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketCategory.
     * @param {TicketCategoryUpdateArgs} args - Arguments to update one TicketCategory.
     * @example
     * // Update one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketCategoryUpdateArgs>(args: SelectSubset<T, TicketCategoryUpdateArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketCategories.
     * @param {TicketCategoryDeleteManyArgs} args - Arguments to filter TicketCategories to delete.
     * @example
     * // Delete a few TicketCategories
     * const { count } = await prisma.ticketCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketCategoryDeleteManyArgs>(args?: SelectSubset<T, TicketCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketCategoryUpdateManyArgs>(args: SelectSubset<T, TicketCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketCategories and returns the data updated in the database.
     * @param {TicketCategoryUpdateManyAndReturnArgs} args - Arguments to update many TicketCategories.
     * @example
     * // Update many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketCategories and only return the `id`
     * const ticketCategoryWithIdOnly = await prisma.ticketCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketCategory.
     * @param {TicketCategoryUpsertArgs} args - Arguments to update or create a TicketCategory.
     * @example
     * // Update or create a TicketCategory
     * const ticketCategory = await prisma.ticketCategory.upsert({
     *   create: {
     *     // ... data to create a TicketCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketCategory we want to update
     *   }
     * })
     */
    upsert<T extends TicketCategoryUpsertArgs>(args: SelectSubset<T, TicketCategoryUpsertArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryCountArgs} args - Arguments to filter TicketCategories to count.
     * @example
     * // Count the number of TicketCategories
     * const count = await prisma.ticketCategory.count({
     *   where: {
     *     // ... the filter for the TicketCategories we want to count
     *   }
     * })
    **/
    count<T extends TicketCategoryCountArgs>(
      args?: Subset<T, TicketCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketCategoryAggregateArgs>(args: Subset<T, TicketCategoryAggregateArgs>): Prisma.PrismaPromise<GetTicketCategoryAggregateType<T>>

    /**
     * Group by TicketCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TicketCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketCategory model
   */
  readonly fields: TicketCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    config<T extends TicketConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketConfigDefaultArgs<ExtArgs>>): Prisma__TicketConfigClient<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends TicketCategory$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, TicketCategory$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketCategory model
   */
  interface TicketCategoryFieldRefs {
    readonly id: FieldRef<"TicketCategory", 'String'>
    readonly guildId: FieldRef<"TicketCategory", 'String'>
    readonly name: FieldRef<"TicketCategory", 'String'>
    readonly emoji: FieldRef<"TicketCategory", 'String'>
    readonly description: FieldRef<"TicketCategory", 'String'>
    readonly color: FieldRef<"TicketCategory", 'String'>
    readonly configId: FieldRef<"TicketCategory", 'String'>
    readonly createdAt: FieldRef<"TicketCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketCategory findUnique
   */
  export type TicketCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory findUniqueOrThrow
   */
  export type TicketCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory findFirst
   */
  export type TicketCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketCategories.
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketCategories.
     */
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketCategory findFirstOrThrow
   */
  export type TicketCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketCategories.
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketCategories.
     */
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketCategory findMany
   */
  export type TicketCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategories to fetch.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketCategories.
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketCategory create
   */
  export type TicketCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketCategory.
     */
    data: XOR<TicketCategoryCreateInput, TicketCategoryUncheckedCreateInput>
  }

  /**
   * TicketCategory createMany
   */
  export type TicketCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketCategories.
     */
    data: TicketCategoryCreateManyInput | TicketCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketCategory createManyAndReturn
   */
  export type TicketCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many TicketCategories.
     */
    data: TicketCategoryCreateManyInput | TicketCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketCategory update
   */
  export type TicketCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketCategory.
     */
    data: XOR<TicketCategoryUpdateInput, TicketCategoryUncheckedUpdateInput>
    /**
     * Choose, which TicketCategory to update.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory updateMany
   */
  export type TicketCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketCategories.
     */
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketCategories to update
     */
    where?: TicketCategoryWhereInput
    /**
     * Limit how many TicketCategories to update.
     */
    limit?: number
  }

  /**
   * TicketCategory updateManyAndReturn
   */
  export type TicketCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * The data used to update TicketCategories.
     */
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketCategories to update
     */
    where?: TicketCategoryWhereInput
    /**
     * Limit how many TicketCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketCategory upsert
   */
  export type TicketCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketCategory to update in case it exists.
     */
    where: TicketCategoryWhereUniqueInput
    /**
     * In case the TicketCategory found by the `where` argument doesn't exist, create a new TicketCategory with this data.
     */
    create: XOR<TicketCategoryCreateInput, TicketCategoryUncheckedCreateInput>
    /**
     * In case the TicketCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketCategoryUpdateInput, TicketCategoryUncheckedUpdateInput>
  }

  /**
   * TicketCategory delete
   */
  export type TicketCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter which TicketCategory to delete.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory deleteMany
   */
  export type TicketCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketCategories to delete
     */
    where?: TicketCategoryWhereInput
    /**
     * Limit how many TicketCategories to delete.
     */
    limit?: number
  }

  /**
   * TicketCategory.tickets
   */
  export type TicketCategory$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * TicketCategory without action
   */
  export type TicketCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    channelId: string | null
    userId: string | null
    username: string | null
    claimedBy: string | null
    status: $Enums.TicketStatus | null
    subject: string | null
    categoryId: string | null
    configId: string | null
    closedAt: Date | null
    closedBy: string | null
    closedReason: string | null
    transcriptUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    channelId: string | null
    userId: string | null
    username: string | null
    claimedBy: string | null
    status: $Enums.TicketStatus | null
    subject: string | null
    categoryId: string | null
    configId: string | null
    closedAt: Date | null
    closedBy: string | null
    closedReason: string | null
    transcriptUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    guildId: number
    channelId: number
    userId: number
    username: number
    claimedBy: number
    status: number
    subject: number
    categoryId: number
    configId: number
    closedAt: number
    closedBy: number
    closedReason: number
    transcriptUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    guildId?: true
    channelId?: true
    userId?: true
    username?: true
    claimedBy?: true
    status?: true
    subject?: true
    categoryId?: true
    configId?: true
    closedAt?: true
    closedBy?: true
    closedReason?: true
    transcriptUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    guildId?: true
    channelId?: true
    userId?: true
    username?: true
    claimedBy?: true
    status?: true
    subject?: true
    categoryId?: true
    configId?: true
    closedAt?: true
    closedBy?: true
    closedReason?: true
    transcriptUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    guildId?: true
    channelId?: true
    userId?: true
    username?: true
    claimedBy?: true
    status?: true
    subject?: true
    categoryId?: true
    configId?: true
    closedAt?: true
    closedBy?: true
    closedReason?: true
    transcriptUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy: string | null
    status: $Enums.TicketStatus
    subject: string | null
    categoryId: string | null
    configId: string
    closedAt: Date | null
    closedBy: string | null
    closedReason: string | null
    transcriptUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    channelId?: boolean
    userId?: boolean
    username?: boolean
    claimedBy?: boolean
    status?: boolean
    subject?: boolean
    categoryId?: boolean
    configId?: boolean
    closedAt?: boolean
    closedBy?: boolean
    closedReason?: boolean
    transcriptUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Ticket$categoryArgs<ExtArgs>
    config?: boolean | TicketConfigDefaultArgs<ExtArgs>
    messages?: boolean | Ticket$messagesArgs<ExtArgs>
    rating?: boolean | Ticket$ratingArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    channelId?: boolean
    userId?: boolean
    username?: boolean
    claimedBy?: boolean
    status?: boolean
    subject?: boolean
    categoryId?: boolean
    configId?: boolean
    closedAt?: boolean
    closedBy?: boolean
    closedReason?: boolean
    transcriptUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Ticket$categoryArgs<ExtArgs>
    config?: boolean | TicketConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    channelId?: boolean
    userId?: boolean
    username?: boolean
    claimedBy?: boolean
    status?: boolean
    subject?: boolean
    categoryId?: boolean
    configId?: boolean
    closedAt?: boolean
    closedBy?: boolean
    closedReason?: boolean
    transcriptUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Ticket$categoryArgs<ExtArgs>
    config?: boolean | TicketConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    guildId?: boolean
    channelId?: boolean
    userId?: boolean
    username?: boolean
    claimedBy?: boolean
    status?: boolean
    subject?: boolean
    categoryId?: boolean
    configId?: boolean
    closedAt?: boolean
    closedBy?: boolean
    closedReason?: boolean
    transcriptUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "channelId" | "userId" | "username" | "claimedBy" | "status" | "subject" | "categoryId" | "configId" | "closedAt" | "closedBy" | "closedReason" | "transcriptUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Ticket$categoryArgs<ExtArgs>
    config?: boolean | TicketConfigDefaultArgs<ExtArgs>
    messages?: boolean | Ticket$messagesArgs<ExtArgs>
    rating?: boolean | Ticket$ratingArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Ticket$categoryArgs<ExtArgs>
    config?: boolean | TicketConfigDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Ticket$categoryArgs<ExtArgs>
    config?: boolean | TicketConfigDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      category: Prisma.$TicketCategoryPayload<ExtArgs> | null
      config: Prisma.$TicketConfigPayload<ExtArgs>
      messages: Prisma.$TicketMessagePayload<ExtArgs>[]
      rating: Prisma.$TicketRatingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      channelId: string
      userId: string
      username: string
      claimedBy: string | null
      status: $Enums.TicketStatus
      subject: string | null
      categoryId: string | null
      configId: string
      closedAt: Date | null
      closedBy: string | null
      closedReason: string | null
      transcriptUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Ticket$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$categoryArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    config<T extends TicketConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketConfigDefaultArgs<ExtArgs>>): Prisma__TicketConfigClient<$Result.GetResult<Prisma.$TicketConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Ticket$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rating<T extends Ticket$ratingArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$ratingArgs<ExtArgs>>): Prisma__TicketRatingClient<$Result.GetResult<Prisma.$TicketRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly guildId: FieldRef<"Ticket", 'String'>
    readonly channelId: FieldRef<"Ticket", 'String'>
    readonly userId: FieldRef<"Ticket", 'String'>
    readonly username: FieldRef<"Ticket", 'String'>
    readonly claimedBy: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly subject: FieldRef<"Ticket", 'String'>
    readonly categoryId: FieldRef<"Ticket", 'String'>
    readonly configId: FieldRef<"Ticket", 'String'>
    readonly closedAt: FieldRef<"Ticket", 'DateTime'>
    readonly closedBy: FieldRef<"Ticket", 'String'>
    readonly closedReason: FieldRef<"Ticket", 'String'>
    readonly transcriptUrl: FieldRef<"Ticket", 'String'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.category
   */
  export type Ticket$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    where?: TicketCategoryWhereInput
  }

  /**
   * Ticket.messages
   */
  export type Ticket$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    where?: TicketMessageWhereInput
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    cursor?: TicketMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * Ticket.rating
   */
  export type Ticket$ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingInclude<ExtArgs> | null
    where?: TicketRatingWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketMessage
   */

  export type AggregateTicketMessage = {
    _count: TicketMessageCountAggregateOutputType | null
    _min: TicketMessageMinAggregateOutputType | null
    _max: TicketMessageMaxAggregateOutputType | null
  }

  export type TicketMessageMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    userId: string | null
    username: string | null
    content: string | null
    isStaff: boolean | null
    createdAt: Date | null
  }

  export type TicketMessageMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    userId: string | null
    username: string | null
    content: string | null
    isStaff: boolean | null
    createdAt: Date | null
  }

  export type TicketMessageCountAggregateOutputType = {
    id: number
    ticketId: number
    userId: number
    username: number
    content: number
    attachments: number
    isStaff: number
    createdAt: number
    _all: number
  }


  export type TicketMessageMinAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    username?: true
    content?: true
    isStaff?: true
    createdAt?: true
  }

  export type TicketMessageMaxAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    username?: true
    content?: true
    isStaff?: true
    createdAt?: true
  }

  export type TicketMessageCountAggregateInputType = {
    id?: true
    ticketId?: true
    userId?: true
    username?: true
    content?: true
    attachments?: true
    isStaff?: true
    createdAt?: true
    _all?: true
  }

  export type TicketMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketMessage to aggregate.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketMessages
    **/
    _count?: true | TicketMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMessageMaxAggregateInputType
  }

  export type GetTicketMessageAggregateType<T extends TicketMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketMessage[P]>
      : GetScalarType<T[P], AggregateTicketMessage[P]>
  }




  export type TicketMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketMessageWhereInput
    orderBy?: TicketMessageOrderByWithAggregationInput | TicketMessageOrderByWithAggregationInput[]
    by: TicketMessageScalarFieldEnum[] | TicketMessageScalarFieldEnum
    having?: TicketMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketMessageCountAggregateInputType | true
    _min?: TicketMessageMinAggregateInputType
    _max?: TicketMessageMaxAggregateInputType
  }

  export type TicketMessageGroupByOutputType = {
    id: string
    ticketId: string
    userId: string
    username: string
    content: string
    attachments: string[]
    isStaff: boolean
    createdAt: Date
    _count: TicketMessageCountAggregateOutputType | null
    _min: TicketMessageMinAggregateOutputType | null
    _max: TicketMessageMaxAggregateOutputType | null
  }

  type GetTicketMessageGroupByPayload<T extends TicketMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketMessageGroupByOutputType[P]>
            : GetScalarType<T[P], TicketMessageGroupByOutputType[P]>
        }
      >
    >


  export type TicketMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    username?: boolean
    content?: boolean
    attachments?: boolean
    isStaff?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>

  export type TicketMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    username?: boolean
    content?: boolean
    attachments?: boolean
    isStaff?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>

  export type TicketMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    username?: boolean
    content?: boolean
    attachments?: boolean
    isStaff?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>

  export type TicketMessageSelectScalar = {
    id?: boolean
    ticketId?: boolean
    userId?: boolean
    username?: boolean
    content?: boolean
    attachments?: boolean
    isStaff?: boolean
    createdAt?: boolean
  }

  export type TicketMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "userId" | "username" | "content" | "attachments" | "isStaff" | "createdAt", ExtArgs["result"]["ticketMessage"]>
  export type TicketMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketMessage"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      userId: string
      username: string
      content: string
      attachments: string[]
      isStaff: boolean
      createdAt: Date
    }, ExtArgs["result"]["ticketMessage"]>
    composites: {}
  }

  type TicketMessageGetPayload<S extends boolean | null | undefined | TicketMessageDefaultArgs> = $Result.GetResult<Prisma.$TicketMessagePayload, S>

  type TicketMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketMessageCountAggregateInputType | true
    }

  export interface TicketMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketMessage'], meta: { name: 'TicketMessage' } }
    /**
     * Find zero or one TicketMessage that matches the filter.
     * @param {TicketMessageFindUniqueArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketMessageFindUniqueArgs>(args: SelectSubset<T, TicketMessageFindUniqueArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketMessageFindUniqueOrThrowArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindFirstArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketMessageFindFirstArgs>(args?: SelectSubset<T, TicketMessageFindFirstArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindFirstOrThrowArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketMessages
     * const ticketMessages = await prisma.ticketMessage.findMany()
     * 
     * // Get first 10 TicketMessages
     * const ticketMessages = await prisma.ticketMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketMessageFindManyArgs>(args?: SelectSubset<T, TicketMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketMessage.
     * @param {TicketMessageCreateArgs} args - Arguments to create a TicketMessage.
     * @example
     * // Create one TicketMessage
     * const TicketMessage = await prisma.ticketMessage.create({
     *   data: {
     *     // ... data to create a TicketMessage
     *   }
     * })
     * 
     */
    create<T extends TicketMessageCreateArgs>(args: SelectSubset<T, TicketMessageCreateArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketMessages.
     * @param {TicketMessageCreateManyArgs} args - Arguments to create many TicketMessages.
     * @example
     * // Create many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketMessageCreateManyArgs>(args?: SelectSubset<T, TicketMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketMessages and returns the data saved in the database.
     * @param {TicketMessageCreateManyAndReturnArgs} args - Arguments to create many TicketMessages.
     * @example
     * // Create many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketMessages and only return the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketMessage.
     * @param {TicketMessageDeleteArgs} args - Arguments to delete one TicketMessage.
     * @example
     * // Delete one TicketMessage
     * const TicketMessage = await prisma.ticketMessage.delete({
     *   where: {
     *     // ... filter to delete one TicketMessage
     *   }
     * })
     * 
     */
    delete<T extends TicketMessageDeleteArgs>(args: SelectSubset<T, TicketMessageDeleteArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketMessage.
     * @param {TicketMessageUpdateArgs} args - Arguments to update one TicketMessage.
     * @example
     * // Update one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketMessageUpdateArgs>(args: SelectSubset<T, TicketMessageUpdateArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketMessages.
     * @param {TicketMessageDeleteManyArgs} args - Arguments to filter TicketMessages to delete.
     * @example
     * // Delete a few TicketMessages
     * const { count } = await prisma.ticketMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketMessageDeleteManyArgs>(args?: SelectSubset<T, TicketMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketMessageUpdateManyArgs>(args: SelectSubset<T, TicketMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketMessages and returns the data updated in the database.
     * @param {TicketMessageUpdateManyAndReturnArgs} args - Arguments to update many TicketMessages.
     * @example
     * // Update many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketMessages and only return the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketMessage.
     * @param {TicketMessageUpsertArgs} args - Arguments to update or create a TicketMessage.
     * @example
     * // Update or create a TicketMessage
     * const ticketMessage = await prisma.ticketMessage.upsert({
     *   create: {
     *     // ... data to create a TicketMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketMessage we want to update
     *   }
     * })
     */
    upsert<T extends TicketMessageUpsertArgs>(args: SelectSubset<T, TicketMessageUpsertArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageCountArgs} args - Arguments to filter TicketMessages to count.
     * @example
     * // Count the number of TicketMessages
     * const count = await prisma.ticketMessage.count({
     *   where: {
     *     // ... the filter for the TicketMessages we want to count
     *   }
     * })
    **/
    count<T extends TicketMessageCountArgs>(
      args?: Subset<T, TicketMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketMessageAggregateArgs>(args: Subset<T, TicketMessageAggregateArgs>): Prisma.PrismaPromise<GetTicketMessageAggregateType<T>>

    /**
     * Group by TicketMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketMessageGroupByArgs['orderBy'] }
        : { orderBy?: TicketMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketMessage model
   */
  readonly fields: TicketMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketMessage model
   */
  interface TicketMessageFieldRefs {
    readonly id: FieldRef<"TicketMessage", 'String'>
    readonly ticketId: FieldRef<"TicketMessage", 'String'>
    readonly userId: FieldRef<"TicketMessage", 'String'>
    readonly username: FieldRef<"TicketMessage", 'String'>
    readonly content: FieldRef<"TicketMessage", 'String'>
    readonly attachments: FieldRef<"TicketMessage", 'String[]'>
    readonly isStaff: FieldRef<"TicketMessage", 'Boolean'>
    readonly createdAt: FieldRef<"TicketMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketMessage findUnique
   */
  export type TicketMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage findUniqueOrThrow
   */
  export type TicketMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage findFirst
   */
  export type TicketMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketMessages.
     */
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage findFirstOrThrow
   */
  export type TicketMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketMessages.
     */
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage findMany
   */
  export type TicketMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessages to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage create
   */
  export type TicketMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketMessage.
     */
    data: XOR<TicketMessageCreateInput, TicketMessageUncheckedCreateInput>
  }

  /**
   * TicketMessage createMany
   */
  export type TicketMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketMessages.
     */
    data: TicketMessageCreateManyInput | TicketMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketMessage createManyAndReturn
   */
  export type TicketMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * The data used to create many TicketMessages.
     */
    data: TicketMessageCreateManyInput | TicketMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketMessage update
   */
  export type TicketMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketMessage.
     */
    data: XOR<TicketMessageUpdateInput, TicketMessageUncheckedUpdateInput>
    /**
     * Choose, which TicketMessage to update.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage updateMany
   */
  export type TicketMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketMessages.
     */
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyInput>
    /**
     * Filter which TicketMessages to update
     */
    where?: TicketMessageWhereInput
    /**
     * Limit how many TicketMessages to update.
     */
    limit?: number
  }

  /**
   * TicketMessage updateManyAndReturn
   */
  export type TicketMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * The data used to update TicketMessages.
     */
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyInput>
    /**
     * Filter which TicketMessages to update
     */
    where?: TicketMessageWhereInput
    /**
     * Limit how many TicketMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketMessage upsert
   */
  export type TicketMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketMessage to update in case it exists.
     */
    where: TicketMessageWhereUniqueInput
    /**
     * In case the TicketMessage found by the `where` argument doesn't exist, create a new TicketMessage with this data.
     */
    create: XOR<TicketMessageCreateInput, TicketMessageUncheckedCreateInput>
    /**
     * In case the TicketMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketMessageUpdateInput, TicketMessageUncheckedUpdateInput>
  }

  /**
   * TicketMessage delete
   */
  export type TicketMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter which TicketMessage to delete.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage deleteMany
   */
  export type TicketMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketMessages to delete
     */
    where?: TicketMessageWhereInput
    /**
     * Limit how many TicketMessages to delete.
     */
    limit?: number
  }

  /**
   * TicketMessage without action
   */
  export type TicketMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
  }


  /**
   * Model TicketRating
   */

  export type AggregateTicketRating = {
    _count: TicketRatingCountAggregateOutputType | null
    _avg: TicketRatingAvgAggregateOutputType | null
    _sum: TicketRatingSumAggregateOutputType | null
    _min: TicketRatingMinAggregateOutputType | null
    _max: TicketRatingMaxAggregateOutputType | null
  }

  export type TicketRatingAvgAggregateOutputType = {
    rating: number | null
  }

  export type TicketRatingSumAggregateOutputType = {
    rating: number | null
  }

  export type TicketRatingMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    rating: number | null
    feedback: string | null
    createdAt: Date | null
  }

  export type TicketRatingMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    rating: number | null
    feedback: string | null
    createdAt: Date | null
  }

  export type TicketRatingCountAggregateOutputType = {
    id: number
    ticketId: number
    rating: number
    feedback: number
    createdAt: number
    _all: number
  }


  export type TicketRatingAvgAggregateInputType = {
    rating?: true
  }

  export type TicketRatingSumAggregateInputType = {
    rating?: true
  }

  export type TicketRatingMinAggregateInputType = {
    id?: true
    ticketId?: true
    rating?: true
    feedback?: true
    createdAt?: true
  }

  export type TicketRatingMaxAggregateInputType = {
    id?: true
    ticketId?: true
    rating?: true
    feedback?: true
    createdAt?: true
  }

  export type TicketRatingCountAggregateInputType = {
    id?: true
    ticketId?: true
    rating?: true
    feedback?: true
    createdAt?: true
    _all?: true
  }

  export type TicketRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketRating to aggregate.
     */
    where?: TicketRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketRatings to fetch.
     */
    orderBy?: TicketRatingOrderByWithRelationInput | TicketRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketRatings
    **/
    _count?: true | TicketRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketRatingMaxAggregateInputType
  }

  export type GetTicketRatingAggregateType<T extends TicketRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketRating[P]>
      : GetScalarType<T[P], AggregateTicketRating[P]>
  }




  export type TicketRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketRatingWhereInput
    orderBy?: TicketRatingOrderByWithAggregationInput | TicketRatingOrderByWithAggregationInput[]
    by: TicketRatingScalarFieldEnum[] | TicketRatingScalarFieldEnum
    having?: TicketRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketRatingCountAggregateInputType | true
    _avg?: TicketRatingAvgAggregateInputType
    _sum?: TicketRatingSumAggregateInputType
    _min?: TicketRatingMinAggregateInputType
    _max?: TicketRatingMaxAggregateInputType
  }

  export type TicketRatingGroupByOutputType = {
    id: string
    ticketId: string
    rating: number
    feedback: string | null
    createdAt: Date
    _count: TicketRatingCountAggregateOutputType | null
    _avg: TicketRatingAvgAggregateOutputType | null
    _sum: TicketRatingSumAggregateOutputType | null
    _min: TicketRatingMinAggregateOutputType | null
    _max: TicketRatingMaxAggregateOutputType | null
  }

  type GetTicketRatingGroupByPayload<T extends TicketRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketRatingGroupByOutputType[P]>
            : GetScalarType<T[P], TicketRatingGroupByOutputType[P]>
        }
      >
    >


  export type TicketRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    rating?: boolean
    feedback?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketRating"]>

  export type TicketRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    rating?: boolean
    feedback?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketRating"]>

  export type TicketRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    rating?: boolean
    feedback?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketRating"]>

  export type TicketRatingSelectScalar = {
    id?: boolean
    ticketId?: boolean
    rating?: boolean
    feedback?: boolean
    createdAt?: boolean
  }

  export type TicketRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "rating" | "feedback" | "createdAt", ExtArgs["result"]["ticketRating"]>
  export type TicketRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketRating"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      rating: number
      feedback: string | null
      createdAt: Date
    }, ExtArgs["result"]["ticketRating"]>
    composites: {}
  }

  type TicketRatingGetPayload<S extends boolean | null | undefined | TicketRatingDefaultArgs> = $Result.GetResult<Prisma.$TicketRatingPayload, S>

  type TicketRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketRatingCountAggregateInputType | true
    }

  export interface TicketRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketRating'], meta: { name: 'TicketRating' } }
    /**
     * Find zero or one TicketRating that matches the filter.
     * @param {TicketRatingFindUniqueArgs} args - Arguments to find a TicketRating
     * @example
     * // Get one TicketRating
     * const ticketRating = await prisma.ticketRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketRatingFindUniqueArgs>(args: SelectSubset<T, TicketRatingFindUniqueArgs<ExtArgs>>): Prisma__TicketRatingClient<$Result.GetResult<Prisma.$TicketRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketRatingFindUniqueOrThrowArgs} args - Arguments to find a TicketRating
     * @example
     * // Get one TicketRating
     * const ticketRating = await prisma.ticketRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketRatingClient<$Result.GetResult<Prisma.$TicketRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRatingFindFirstArgs} args - Arguments to find a TicketRating
     * @example
     * // Get one TicketRating
     * const ticketRating = await prisma.ticketRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketRatingFindFirstArgs>(args?: SelectSubset<T, TicketRatingFindFirstArgs<ExtArgs>>): Prisma__TicketRatingClient<$Result.GetResult<Prisma.$TicketRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRatingFindFirstOrThrowArgs} args - Arguments to find a TicketRating
     * @example
     * // Get one TicketRating
     * const ticketRating = await prisma.ticketRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketRatingClient<$Result.GetResult<Prisma.$TicketRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketRatings
     * const ticketRatings = await prisma.ticketRating.findMany()
     * 
     * // Get first 10 TicketRatings
     * const ticketRatings = await prisma.ticketRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketRatingWithIdOnly = await prisma.ticketRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketRatingFindManyArgs>(args?: SelectSubset<T, TicketRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketRating.
     * @param {TicketRatingCreateArgs} args - Arguments to create a TicketRating.
     * @example
     * // Create one TicketRating
     * const TicketRating = await prisma.ticketRating.create({
     *   data: {
     *     // ... data to create a TicketRating
     *   }
     * })
     * 
     */
    create<T extends TicketRatingCreateArgs>(args: SelectSubset<T, TicketRatingCreateArgs<ExtArgs>>): Prisma__TicketRatingClient<$Result.GetResult<Prisma.$TicketRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketRatings.
     * @param {TicketRatingCreateManyArgs} args - Arguments to create many TicketRatings.
     * @example
     * // Create many TicketRatings
     * const ticketRating = await prisma.ticketRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketRatingCreateManyArgs>(args?: SelectSubset<T, TicketRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketRatings and returns the data saved in the database.
     * @param {TicketRatingCreateManyAndReturnArgs} args - Arguments to create many TicketRatings.
     * @example
     * // Create many TicketRatings
     * const ticketRating = await prisma.ticketRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketRatings and only return the `id`
     * const ticketRatingWithIdOnly = await prisma.ticketRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketRating.
     * @param {TicketRatingDeleteArgs} args - Arguments to delete one TicketRating.
     * @example
     * // Delete one TicketRating
     * const TicketRating = await prisma.ticketRating.delete({
     *   where: {
     *     // ... filter to delete one TicketRating
     *   }
     * })
     * 
     */
    delete<T extends TicketRatingDeleteArgs>(args: SelectSubset<T, TicketRatingDeleteArgs<ExtArgs>>): Prisma__TicketRatingClient<$Result.GetResult<Prisma.$TicketRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketRating.
     * @param {TicketRatingUpdateArgs} args - Arguments to update one TicketRating.
     * @example
     * // Update one TicketRating
     * const ticketRating = await prisma.ticketRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketRatingUpdateArgs>(args: SelectSubset<T, TicketRatingUpdateArgs<ExtArgs>>): Prisma__TicketRatingClient<$Result.GetResult<Prisma.$TicketRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketRatings.
     * @param {TicketRatingDeleteManyArgs} args - Arguments to filter TicketRatings to delete.
     * @example
     * // Delete a few TicketRatings
     * const { count } = await prisma.ticketRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketRatingDeleteManyArgs>(args?: SelectSubset<T, TicketRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketRatings
     * const ticketRating = await prisma.ticketRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketRatingUpdateManyArgs>(args: SelectSubset<T, TicketRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketRatings and returns the data updated in the database.
     * @param {TicketRatingUpdateManyAndReturnArgs} args - Arguments to update many TicketRatings.
     * @example
     * // Update many TicketRatings
     * const ticketRating = await prisma.ticketRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketRatings and only return the `id`
     * const ticketRatingWithIdOnly = await prisma.ticketRating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketRating.
     * @param {TicketRatingUpsertArgs} args - Arguments to update or create a TicketRating.
     * @example
     * // Update or create a TicketRating
     * const ticketRating = await prisma.ticketRating.upsert({
     *   create: {
     *     // ... data to create a TicketRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketRating we want to update
     *   }
     * })
     */
    upsert<T extends TicketRatingUpsertArgs>(args: SelectSubset<T, TicketRatingUpsertArgs<ExtArgs>>): Prisma__TicketRatingClient<$Result.GetResult<Prisma.$TicketRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRatingCountArgs} args - Arguments to filter TicketRatings to count.
     * @example
     * // Count the number of TicketRatings
     * const count = await prisma.ticketRating.count({
     *   where: {
     *     // ... the filter for the TicketRatings we want to count
     *   }
     * })
    **/
    count<T extends TicketRatingCountArgs>(
      args?: Subset<T, TicketRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketRatingAggregateArgs>(args: Subset<T, TicketRatingAggregateArgs>): Prisma.PrismaPromise<GetTicketRatingAggregateType<T>>

    /**
     * Group by TicketRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketRatingGroupByArgs['orderBy'] }
        : { orderBy?: TicketRatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketRating model
   */
  readonly fields: TicketRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketRating model
   */
  interface TicketRatingFieldRefs {
    readonly id: FieldRef<"TicketRating", 'String'>
    readonly ticketId: FieldRef<"TicketRating", 'String'>
    readonly rating: FieldRef<"TicketRating", 'Int'>
    readonly feedback: FieldRef<"TicketRating", 'String'>
    readonly createdAt: FieldRef<"TicketRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketRating findUnique
   */
  export type TicketRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingInclude<ExtArgs> | null
    /**
     * Filter, which TicketRating to fetch.
     */
    where: TicketRatingWhereUniqueInput
  }

  /**
   * TicketRating findUniqueOrThrow
   */
  export type TicketRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingInclude<ExtArgs> | null
    /**
     * Filter, which TicketRating to fetch.
     */
    where: TicketRatingWhereUniqueInput
  }

  /**
   * TicketRating findFirst
   */
  export type TicketRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingInclude<ExtArgs> | null
    /**
     * Filter, which TicketRating to fetch.
     */
    where?: TicketRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketRatings to fetch.
     */
    orderBy?: TicketRatingOrderByWithRelationInput | TicketRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketRatings.
     */
    cursor?: TicketRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketRatings.
     */
    distinct?: TicketRatingScalarFieldEnum | TicketRatingScalarFieldEnum[]
  }

  /**
   * TicketRating findFirstOrThrow
   */
  export type TicketRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingInclude<ExtArgs> | null
    /**
     * Filter, which TicketRating to fetch.
     */
    where?: TicketRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketRatings to fetch.
     */
    orderBy?: TicketRatingOrderByWithRelationInput | TicketRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketRatings.
     */
    cursor?: TicketRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketRatings.
     */
    distinct?: TicketRatingScalarFieldEnum | TicketRatingScalarFieldEnum[]
  }

  /**
   * TicketRating findMany
   */
  export type TicketRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingInclude<ExtArgs> | null
    /**
     * Filter, which TicketRatings to fetch.
     */
    where?: TicketRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketRatings to fetch.
     */
    orderBy?: TicketRatingOrderByWithRelationInput | TicketRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketRatings.
     */
    cursor?: TicketRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketRatings.
     */
    skip?: number
    distinct?: TicketRatingScalarFieldEnum | TicketRatingScalarFieldEnum[]
  }

  /**
   * TicketRating create
   */
  export type TicketRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketRating.
     */
    data: XOR<TicketRatingCreateInput, TicketRatingUncheckedCreateInput>
  }

  /**
   * TicketRating createMany
   */
  export type TicketRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketRatings.
     */
    data: TicketRatingCreateManyInput | TicketRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketRating createManyAndReturn
   */
  export type TicketRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * The data used to create many TicketRatings.
     */
    data: TicketRatingCreateManyInput | TicketRatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketRating update
   */
  export type TicketRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketRating.
     */
    data: XOR<TicketRatingUpdateInput, TicketRatingUncheckedUpdateInput>
    /**
     * Choose, which TicketRating to update.
     */
    where: TicketRatingWhereUniqueInput
  }

  /**
   * TicketRating updateMany
   */
  export type TicketRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketRatings.
     */
    data: XOR<TicketRatingUpdateManyMutationInput, TicketRatingUncheckedUpdateManyInput>
    /**
     * Filter which TicketRatings to update
     */
    where?: TicketRatingWhereInput
    /**
     * Limit how many TicketRatings to update.
     */
    limit?: number
  }

  /**
   * TicketRating updateManyAndReturn
   */
  export type TicketRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * The data used to update TicketRatings.
     */
    data: XOR<TicketRatingUpdateManyMutationInput, TicketRatingUncheckedUpdateManyInput>
    /**
     * Filter which TicketRatings to update
     */
    where?: TicketRatingWhereInput
    /**
     * Limit how many TicketRatings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketRating upsert
   */
  export type TicketRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketRating to update in case it exists.
     */
    where: TicketRatingWhereUniqueInput
    /**
     * In case the TicketRating found by the `where` argument doesn't exist, create a new TicketRating with this data.
     */
    create: XOR<TicketRatingCreateInput, TicketRatingUncheckedCreateInput>
    /**
     * In case the TicketRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketRatingUpdateInput, TicketRatingUncheckedUpdateInput>
  }

  /**
   * TicketRating delete
   */
  export type TicketRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingInclude<ExtArgs> | null
    /**
     * Filter which TicketRating to delete.
     */
    where: TicketRatingWhereUniqueInput
  }

  /**
   * TicketRating deleteMany
   */
  export type TicketRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketRatings to delete
     */
    where?: TicketRatingWhereInput
    /**
     * Limit how many TicketRatings to delete.
     */
    limit?: number
  }

  /**
   * TicketRating without action
   */
  export type TicketRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRating
     */
    select?: TicketRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRating
     */
    omit?: TicketRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRatingInclude<ExtArgs> | null
  }


  /**
   * Model LevelConfig
   */

  export type AggregateLevelConfig = {
    _count: LevelConfigCountAggregateOutputType | null
    _avg: LevelConfigAvgAggregateOutputType | null
    _sum: LevelConfigSumAggregateOutputType | null
    _min: LevelConfigMinAggregateOutputType | null
    _max: LevelConfigMaxAggregateOutputType | null
  }

  export type LevelConfigAvgAggregateOutputType = {
    xpMin: number | null
    xpMax: number | null
    xpCooldown: number | null
  }

  export type LevelConfigSumAggregateOutputType = {
    xpMin: number | null
    xpMax: number | null
    xpCooldown: number | null
  }

  export type LevelConfigMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    enabled: boolean | null
    xpMin: number | null
    xpMax: number | null
    xpCooldown: number | null
    levelUpChannelId: string | null
    levelUpMessage: string | null
    stackRoles: boolean | null
    announceInDm: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LevelConfigMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    enabled: boolean | null
    xpMin: number | null
    xpMax: number | null
    xpCooldown: number | null
    levelUpChannelId: string | null
    levelUpMessage: string | null
    stackRoles: boolean | null
    announceInDm: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LevelConfigCountAggregateOutputType = {
    id: number
    guildId: number
    enabled: number
    xpMin: number
    xpMax: number
    xpCooldown: number
    levelUpChannelId: number
    levelUpMessage: number
    ignoredChannelIds: number
    ignoredRoleIds: number
    stackRoles: number
    announceInDm: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LevelConfigAvgAggregateInputType = {
    xpMin?: true
    xpMax?: true
    xpCooldown?: true
  }

  export type LevelConfigSumAggregateInputType = {
    xpMin?: true
    xpMax?: true
    xpCooldown?: true
  }

  export type LevelConfigMinAggregateInputType = {
    id?: true
    guildId?: true
    enabled?: true
    xpMin?: true
    xpMax?: true
    xpCooldown?: true
    levelUpChannelId?: true
    levelUpMessage?: true
    stackRoles?: true
    announceInDm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LevelConfigMaxAggregateInputType = {
    id?: true
    guildId?: true
    enabled?: true
    xpMin?: true
    xpMax?: true
    xpCooldown?: true
    levelUpChannelId?: true
    levelUpMessage?: true
    stackRoles?: true
    announceInDm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LevelConfigCountAggregateInputType = {
    id?: true
    guildId?: true
    enabled?: true
    xpMin?: true
    xpMax?: true
    xpCooldown?: true
    levelUpChannelId?: true
    levelUpMessage?: true
    ignoredChannelIds?: true
    ignoredRoleIds?: true
    stackRoles?: true
    announceInDm?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LevelConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelConfig to aggregate.
     */
    where?: LevelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelConfigs to fetch.
     */
    orderBy?: LevelConfigOrderByWithRelationInput | LevelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LevelConfigs
    **/
    _count?: true | LevelConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelConfigMaxAggregateInputType
  }

  export type GetLevelConfigAggregateType<T extends LevelConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateLevelConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevelConfig[P]>
      : GetScalarType<T[P], AggregateLevelConfig[P]>
  }




  export type LevelConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelConfigWhereInput
    orderBy?: LevelConfigOrderByWithAggregationInput | LevelConfigOrderByWithAggregationInput[]
    by: LevelConfigScalarFieldEnum[] | LevelConfigScalarFieldEnum
    having?: LevelConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelConfigCountAggregateInputType | true
    _avg?: LevelConfigAvgAggregateInputType
    _sum?: LevelConfigSumAggregateInputType
    _min?: LevelConfigMinAggregateInputType
    _max?: LevelConfigMaxAggregateInputType
  }

  export type LevelConfigGroupByOutputType = {
    id: string
    guildId: string
    enabled: boolean
    xpMin: number
    xpMax: number
    xpCooldown: number
    levelUpChannelId: string | null
    levelUpMessage: string
    ignoredChannelIds: string[]
    ignoredRoleIds: string[]
    stackRoles: boolean
    announceInDm: boolean
    createdAt: Date
    updatedAt: Date
    _count: LevelConfigCountAggregateOutputType | null
    _avg: LevelConfigAvgAggregateOutputType | null
    _sum: LevelConfigSumAggregateOutputType | null
    _min: LevelConfigMinAggregateOutputType | null
    _max: LevelConfigMaxAggregateOutputType | null
  }

  type GetLevelConfigGroupByPayload<T extends LevelConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelConfigGroupByOutputType[P]>
            : GetScalarType<T[P], LevelConfigGroupByOutputType[P]>
        }
      >
    >


  export type LevelConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    enabled?: boolean
    xpMin?: boolean
    xpMax?: boolean
    xpCooldown?: boolean
    levelUpChannelId?: boolean
    levelUpMessage?: boolean
    ignoredChannelIds?: boolean
    ignoredRoleIds?: boolean
    stackRoles?: boolean
    announceInDm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rewards?: boolean | LevelConfig$rewardsArgs<ExtArgs>
    _count?: boolean | LevelConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelConfig"]>

  export type LevelConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    enabled?: boolean
    xpMin?: boolean
    xpMax?: boolean
    xpCooldown?: boolean
    levelUpChannelId?: boolean
    levelUpMessage?: boolean
    ignoredChannelIds?: boolean
    ignoredRoleIds?: boolean
    stackRoles?: boolean
    announceInDm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["levelConfig"]>

  export type LevelConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    enabled?: boolean
    xpMin?: boolean
    xpMax?: boolean
    xpCooldown?: boolean
    levelUpChannelId?: boolean
    levelUpMessage?: boolean
    ignoredChannelIds?: boolean
    ignoredRoleIds?: boolean
    stackRoles?: boolean
    announceInDm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["levelConfig"]>

  export type LevelConfigSelectScalar = {
    id?: boolean
    guildId?: boolean
    enabled?: boolean
    xpMin?: boolean
    xpMax?: boolean
    xpCooldown?: boolean
    levelUpChannelId?: boolean
    levelUpMessage?: boolean
    ignoredChannelIds?: boolean
    ignoredRoleIds?: boolean
    stackRoles?: boolean
    announceInDm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LevelConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "enabled" | "xpMin" | "xpMax" | "xpCooldown" | "levelUpChannelId" | "levelUpMessage" | "ignoredChannelIds" | "ignoredRoleIds" | "stackRoles" | "announceInDm" | "createdAt" | "updatedAt", ExtArgs["result"]["levelConfig"]>
  export type LevelConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rewards?: boolean | LevelConfig$rewardsArgs<ExtArgs>
    _count?: boolean | LevelConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LevelConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LevelConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LevelConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LevelConfig"
    objects: {
      rewards: Prisma.$LevelRewardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      enabled: boolean
      xpMin: number
      xpMax: number
      xpCooldown: number
      levelUpChannelId: string | null
      levelUpMessage: string
      ignoredChannelIds: string[]
      ignoredRoleIds: string[]
      stackRoles: boolean
      announceInDm: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["levelConfig"]>
    composites: {}
  }

  type LevelConfigGetPayload<S extends boolean | null | undefined | LevelConfigDefaultArgs> = $Result.GetResult<Prisma.$LevelConfigPayload, S>

  type LevelConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelConfigCountAggregateInputType | true
    }

  export interface LevelConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LevelConfig'], meta: { name: 'LevelConfig' } }
    /**
     * Find zero or one LevelConfig that matches the filter.
     * @param {LevelConfigFindUniqueArgs} args - Arguments to find a LevelConfig
     * @example
     * // Get one LevelConfig
     * const levelConfig = await prisma.levelConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelConfigFindUniqueArgs>(args: SelectSubset<T, LevelConfigFindUniqueArgs<ExtArgs>>): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LevelConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelConfigFindUniqueOrThrowArgs} args - Arguments to find a LevelConfig
     * @example
     * // Get one LevelConfig
     * const levelConfig = await prisma.levelConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LevelConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigFindFirstArgs} args - Arguments to find a LevelConfig
     * @example
     * // Get one LevelConfig
     * const levelConfig = await prisma.levelConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelConfigFindFirstArgs>(args?: SelectSubset<T, LevelConfigFindFirstArgs<ExtArgs>>): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LevelConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigFindFirstOrThrowArgs} args - Arguments to find a LevelConfig
     * @example
     * // Get one LevelConfig
     * const levelConfig = await prisma.levelConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LevelConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LevelConfigs
     * const levelConfigs = await prisma.levelConfig.findMany()
     * 
     * // Get first 10 LevelConfigs
     * const levelConfigs = await prisma.levelConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelConfigWithIdOnly = await prisma.levelConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelConfigFindManyArgs>(args?: SelectSubset<T, LevelConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LevelConfig.
     * @param {LevelConfigCreateArgs} args - Arguments to create a LevelConfig.
     * @example
     * // Create one LevelConfig
     * const LevelConfig = await prisma.levelConfig.create({
     *   data: {
     *     // ... data to create a LevelConfig
     *   }
     * })
     * 
     */
    create<T extends LevelConfigCreateArgs>(args: SelectSubset<T, LevelConfigCreateArgs<ExtArgs>>): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LevelConfigs.
     * @param {LevelConfigCreateManyArgs} args - Arguments to create many LevelConfigs.
     * @example
     * // Create many LevelConfigs
     * const levelConfig = await prisma.levelConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelConfigCreateManyArgs>(args?: SelectSubset<T, LevelConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LevelConfigs and returns the data saved in the database.
     * @param {LevelConfigCreateManyAndReturnArgs} args - Arguments to create many LevelConfigs.
     * @example
     * // Create many LevelConfigs
     * const levelConfig = await prisma.levelConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LevelConfigs and only return the `id`
     * const levelConfigWithIdOnly = await prisma.levelConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LevelConfig.
     * @param {LevelConfigDeleteArgs} args - Arguments to delete one LevelConfig.
     * @example
     * // Delete one LevelConfig
     * const LevelConfig = await prisma.levelConfig.delete({
     *   where: {
     *     // ... filter to delete one LevelConfig
     *   }
     * })
     * 
     */
    delete<T extends LevelConfigDeleteArgs>(args: SelectSubset<T, LevelConfigDeleteArgs<ExtArgs>>): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LevelConfig.
     * @param {LevelConfigUpdateArgs} args - Arguments to update one LevelConfig.
     * @example
     * // Update one LevelConfig
     * const levelConfig = await prisma.levelConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelConfigUpdateArgs>(args: SelectSubset<T, LevelConfigUpdateArgs<ExtArgs>>): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LevelConfigs.
     * @param {LevelConfigDeleteManyArgs} args - Arguments to filter LevelConfigs to delete.
     * @example
     * // Delete a few LevelConfigs
     * const { count } = await prisma.levelConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelConfigDeleteManyArgs>(args?: SelectSubset<T, LevelConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LevelConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LevelConfigs
     * const levelConfig = await prisma.levelConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelConfigUpdateManyArgs>(args: SelectSubset<T, LevelConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LevelConfigs and returns the data updated in the database.
     * @param {LevelConfigUpdateManyAndReturnArgs} args - Arguments to update many LevelConfigs.
     * @example
     * // Update many LevelConfigs
     * const levelConfig = await prisma.levelConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LevelConfigs and only return the `id`
     * const levelConfigWithIdOnly = await prisma.levelConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LevelConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LevelConfig.
     * @param {LevelConfigUpsertArgs} args - Arguments to update or create a LevelConfig.
     * @example
     * // Update or create a LevelConfig
     * const levelConfig = await prisma.levelConfig.upsert({
     *   create: {
     *     // ... data to create a LevelConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LevelConfig we want to update
     *   }
     * })
     */
    upsert<T extends LevelConfigUpsertArgs>(args: SelectSubset<T, LevelConfigUpsertArgs<ExtArgs>>): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LevelConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigCountArgs} args - Arguments to filter LevelConfigs to count.
     * @example
     * // Count the number of LevelConfigs
     * const count = await prisma.levelConfig.count({
     *   where: {
     *     // ... the filter for the LevelConfigs we want to count
     *   }
     * })
    **/
    count<T extends LevelConfigCountArgs>(
      args?: Subset<T, LevelConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LevelConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LevelConfigAggregateArgs>(args: Subset<T, LevelConfigAggregateArgs>): Prisma.PrismaPromise<GetLevelConfigAggregateType<T>>

    /**
     * Group by LevelConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LevelConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelConfigGroupByArgs['orderBy'] }
        : { orderBy?: LevelConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LevelConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LevelConfig model
   */
  readonly fields: LevelConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LevelConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rewards<T extends LevelConfig$rewardsArgs<ExtArgs> = {}>(args?: Subset<T, LevelConfig$rewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LevelConfig model
   */
  interface LevelConfigFieldRefs {
    readonly id: FieldRef<"LevelConfig", 'String'>
    readonly guildId: FieldRef<"LevelConfig", 'String'>
    readonly enabled: FieldRef<"LevelConfig", 'Boolean'>
    readonly xpMin: FieldRef<"LevelConfig", 'Int'>
    readonly xpMax: FieldRef<"LevelConfig", 'Int'>
    readonly xpCooldown: FieldRef<"LevelConfig", 'Int'>
    readonly levelUpChannelId: FieldRef<"LevelConfig", 'String'>
    readonly levelUpMessage: FieldRef<"LevelConfig", 'String'>
    readonly ignoredChannelIds: FieldRef<"LevelConfig", 'String[]'>
    readonly ignoredRoleIds: FieldRef<"LevelConfig", 'String[]'>
    readonly stackRoles: FieldRef<"LevelConfig", 'Boolean'>
    readonly announceInDm: FieldRef<"LevelConfig", 'Boolean'>
    readonly createdAt: FieldRef<"LevelConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"LevelConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LevelConfig findUnique
   */
  export type LevelConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelConfig
     */
    omit?: LevelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * Filter, which LevelConfig to fetch.
     */
    where: LevelConfigWhereUniqueInput
  }

  /**
   * LevelConfig findUniqueOrThrow
   */
  export type LevelConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelConfig
     */
    omit?: LevelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * Filter, which LevelConfig to fetch.
     */
    where: LevelConfigWhereUniqueInput
  }

  /**
   * LevelConfig findFirst
   */
  export type LevelConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelConfig
     */
    omit?: LevelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * Filter, which LevelConfig to fetch.
     */
    where?: LevelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelConfigs to fetch.
     */
    orderBy?: LevelConfigOrderByWithRelationInput | LevelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelConfigs.
     */
    cursor?: LevelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelConfigs.
     */
    distinct?: LevelConfigScalarFieldEnum | LevelConfigScalarFieldEnum[]
  }

  /**
   * LevelConfig findFirstOrThrow
   */
  export type LevelConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelConfig
     */
    omit?: LevelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * Filter, which LevelConfig to fetch.
     */
    where?: LevelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelConfigs to fetch.
     */
    orderBy?: LevelConfigOrderByWithRelationInput | LevelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelConfigs.
     */
    cursor?: LevelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelConfigs.
     */
    distinct?: LevelConfigScalarFieldEnum | LevelConfigScalarFieldEnum[]
  }

  /**
   * LevelConfig findMany
   */
  export type LevelConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelConfig
     */
    omit?: LevelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * Filter, which LevelConfigs to fetch.
     */
    where?: LevelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelConfigs to fetch.
     */
    orderBy?: LevelConfigOrderByWithRelationInput | LevelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LevelConfigs.
     */
    cursor?: LevelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelConfigs.
     */
    skip?: number
    distinct?: LevelConfigScalarFieldEnum | LevelConfigScalarFieldEnum[]
  }

  /**
   * LevelConfig create
   */
  export type LevelConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelConfig
     */
    omit?: LevelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a LevelConfig.
     */
    data: XOR<LevelConfigCreateInput, LevelConfigUncheckedCreateInput>
  }

  /**
   * LevelConfig createMany
   */
  export type LevelConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LevelConfigs.
     */
    data: LevelConfigCreateManyInput | LevelConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LevelConfig createManyAndReturn
   */
  export type LevelConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LevelConfig
     */
    omit?: LevelConfigOmit<ExtArgs> | null
    /**
     * The data used to create many LevelConfigs.
     */
    data: LevelConfigCreateManyInput | LevelConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LevelConfig update
   */
  export type LevelConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelConfig
     */
    omit?: LevelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a LevelConfig.
     */
    data: XOR<LevelConfigUpdateInput, LevelConfigUncheckedUpdateInput>
    /**
     * Choose, which LevelConfig to update.
     */
    where: LevelConfigWhereUniqueInput
  }

  /**
   * LevelConfig updateMany
   */
  export type LevelConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LevelConfigs.
     */
    data: XOR<LevelConfigUpdateManyMutationInput, LevelConfigUncheckedUpdateManyInput>
    /**
     * Filter which LevelConfigs to update
     */
    where?: LevelConfigWhereInput
    /**
     * Limit how many LevelConfigs to update.
     */
    limit?: number
  }

  /**
   * LevelConfig updateManyAndReturn
   */
  export type LevelConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LevelConfig
     */
    omit?: LevelConfigOmit<ExtArgs> | null
    /**
     * The data used to update LevelConfigs.
     */
    data: XOR<LevelConfigUpdateManyMutationInput, LevelConfigUncheckedUpdateManyInput>
    /**
     * Filter which LevelConfigs to update
     */
    where?: LevelConfigWhereInput
    /**
     * Limit how many LevelConfigs to update.
     */
    limit?: number
  }

  /**
   * LevelConfig upsert
   */
  export type LevelConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelConfig
     */
    omit?: LevelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the LevelConfig to update in case it exists.
     */
    where: LevelConfigWhereUniqueInput
    /**
     * In case the LevelConfig found by the `where` argument doesn't exist, create a new LevelConfig with this data.
     */
    create: XOR<LevelConfigCreateInput, LevelConfigUncheckedCreateInput>
    /**
     * In case the LevelConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelConfigUpdateInput, LevelConfigUncheckedUpdateInput>
  }

  /**
   * LevelConfig delete
   */
  export type LevelConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelConfig
     */
    omit?: LevelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * Filter which LevelConfig to delete.
     */
    where: LevelConfigWhereUniqueInput
  }

  /**
   * LevelConfig deleteMany
   */
  export type LevelConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelConfigs to delete
     */
    where?: LevelConfigWhereInput
    /**
     * Limit how many LevelConfigs to delete.
     */
    limit?: number
  }

  /**
   * LevelConfig.rewards
   */
  export type LevelConfig$rewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardInclude<ExtArgs> | null
    where?: LevelRewardWhereInput
    orderBy?: LevelRewardOrderByWithRelationInput | LevelRewardOrderByWithRelationInput[]
    cursor?: LevelRewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LevelRewardScalarFieldEnum | LevelRewardScalarFieldEnum[]
  }

  /**
   * LevelConfig without action
   */
  export type LevelConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelConfig
     */
    omit?: LevelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
  }


  /**
   * Model UserLevel
   */

  export type AggregateUserLevel = {
    _count: UserLevelCountAggregateOutputType | null
    _avg: UserLevelAvgAggregateOutputType | null
    _sum: UserLevelSumAggregateOutputType | null
    _min: UserLevelMinAggregateOutputType | null
    _max: UserLevelMaxAggregateOutputType | null
  }

  export type UserLevelAvgAggregateOutputType = {
    xp: number | null
    level: number | null
    totalMessages: number | null
  }

  export type UserLevelSumAggregateOutputType = {
    xp: number | null
    level: number | null
    totalMessages: number | null
  }

  export type UserLevelMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    userId: string | null
    xp: number | null
    level: number | null
    totalMessages: number | null
    lastMessageAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLevelMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    userId: string | null
    xp: number | null
    level: number | null
    totalMessages: number | null
    lastMessageAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLevelCountAggregateOutputType = {
    id: number
    guildId: number
    userId: number
    xp: number
    level: number
    totalMessages: number
    lastMessageAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserLevelAvgAggregateInputType = {
    xp?: true
    level?: true
    totalMessages?: true
  }

  export type UserLevelSumAggregateInputType = {
    xp?: true
    level?: true
    totalMessages?: true
  }

  export type UserLevelMinAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    xp?: true
    level?: true
    totalMessages?: true
    lastMessageAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLevelMaxAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    xp?: true
    level?: true
    totalMessages?: true
    lastMessageAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLevelCountAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    xp?: true
    level?: true
    totalMessages?: true
    lastMessageAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLevel to aggregate.
     */
    where?: UserLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLevels to fetch.
     */
    orderBy?: UserLevelOrderByWithRelationInput | UserLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLevels
    **/
    _count?: true | UserLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLevelMaxAggregateInputType
  }

  export type GetUserLevelAggregateType<T extends UserLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLevel[P]>
      : GetScalarType<T[P], AggregateUserLevel[P]>
  }




  export type UserLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLevelWhereInput
    orderBy?: UserLevelOrderByWithAggregationInput | UserLevelOrderByWithAggregationInput[]
    by: UserLevelScalarFieldEnum[] | UserLevelScalarFieldEnum
    having?: UserLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLevelCountAggregateInputType | true
    _avg?: UserLevelAvgAggregateInputType
    _sum?: UserLevelSumAggregateInputType
    _min?: UserLevelMinAggregateInputType
    _max?: UserLevelMaxAggregateInputType
  }

  export type UserLevelGroupByOutputType = {
    id: string
    guildId: string
    userId: string
    xp: number
    level: number
    totalMessages: number
    lastMessageAt: Date
    createdAt: Date
    updatedAt: Date
    _count: UserLevelCountAggregateOutputType | null
    _avg: UserLevelAvgAggregateOutputType | null
    _sum: UserLevelSumAggregateOutputType | null
    _min: UserLevelMinAggregateOutputType | null
    _max: UserLevelMaxAggregateOutputType | null
  }

  type GetUserLevelGroupByPayload<T extends UserLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLevelGroupByOutputType[P]>
            : GetScalarType<T[P], UserLevelGroupByOutputType[P]>
        }
      >
    >


  export type UserLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    xp?: boolean
    level?: boolean
    totalMessages?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userLevel"]>

  export type UserLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    xp?: boolean
    level?: boolean
    totalMessages?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userLevel"]>

  export type UserLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    xp?: boolean
    level?: boolean
    totalMessages?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userLevel"]>

  export type UserLevelSelectScalar = {
    id?: boolean
    guildId?: boolean
    userId?: boolean
    xp?: boolean
    level?: boolean
    totalMessages?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "userId" | "xp" | "level" | "totalMessages" | "lastMessageAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userLevel"]>

  export type $UserLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLevel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      userId: string
      xp: number
      level: number
      totalMessages: number
      lastMessageAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userLevel"]>
    composites: {}
  }

  type UserLevelGetPayload<S extends boolean | null | undefined | UserLevelDefaultArgs> = $Result.GetResult<Prisma.$UserLevelPayload, S>

  type UserLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLevelCountAggregateInputType | true
    }

  export interface UserLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLevel'], meta: { name: 'UserLevel' } }
    /**
     * Find zero or one UserLevel that matches the filter.
     * @param {UserLevelFindUniqueArgs} args - Arguments to find a UserLevel
     * @example
     * // Get one UserLevel
     * const userLevel = await prisma.userLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLevelFindUniqueArgs>(args: SelectSubset<T, UserLevelFindUniqueArgs<ExtArgs>>): Prisma__UserLevelClient<$Result.GetResult<Prisma.$UserLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLevelFindUniqueOrThrowArgs} args - Arguments to find a UserLevel
     * @example
     * // Get one UserLevel
     * const userLevel = await prisma.userLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLevelClient<$Result.GetResult<Prisma.$UserLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelFindFirstArgs} args - Arguments to find a UserLevel
     * @example
     * // Get one UserLevel
     * const userLevel = await prisma.userLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLevelFindFirstArgs>(args?: SelectSubset<T, UserLevelFindFirstArgs<ExtArgs>>): Prisma__UserLevelClient<$Result.GetResult<Prisma.$UserLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelFindFirstOrThrowArgs} args - Arguments to find a UserLevel
     * @example
     * // Get one UserLevel
     * const userLevel = await prisma.userLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLevelClient<$Result.GetResult<Prisma.$UserLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLevels
     * const userLevels = await prisma.userLevel.findMany()
     * 
     * // Get first 10 UserLevels
     * const userLevels = await prisma.userLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLevelWithIdOnly = await prisma.userLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLevelFindManyArgs>(args?: SelectSubset<T, UserLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLevel.
     * @param {UserLevelCreateArgs} args - Arguments to create a UserLevel.
     * @example
     * // Create one UserLevel
     * const UserLevel = await prisma.userLevel.create({
     *   data: {
     *     // ... data to create a UserLevel
     *   }
     * })
     * 
     */
    create<T extends UserLevelCreateArgs>(args: SelectSubset<T, UserLevelCreateArgs<ExtArgs>>): Prisma__UserLevelClient<$Result.GetResult<Prisma.$UserLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLevels.
     * @param {UserLevelCreateManyArgs} args - Arguments to create many UserLevels.
     * @example
     * // Create many UserLevels
     * const userLevel = await prisma.userLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLevelCreateManyArgs>(args?: SelectSubset<T, UserLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLevels and returns the data saved in the database.
     * @param {UserLevelCreateManyAndReturnArgs} args - Arguments to create many UserLevels.
     * @example
     * // Create many UserLevels
     * const userLevel = await prisma.userLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLevels and only return the `id`
     * const userLevelWithIdOnly = await prisma.userLevel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLevel.
     * @param {UserLevelDeleteArgs} args - Arguments to delete one UserLevel.
     * @example
     * // Delete one UserLevel
     * const UserLevel = await prisma.userLevel.delete({
     *   where: {
     *     // ... filter to delete one UserLevel
     *   }
     * })
     * 
     */
    delete<T extends UserLevelDeleteArgs>(args: SelectSubset<T, UserLevelDeleteArgs<ExtArgs>>): Prisma__UserLevelClient<$Result.GetResult<Prisma.$UserLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLevel.
     * @param {UserLevelUpdateArgs} args - Arguments to update one UserLevel.
     * @example
     * // Update one UserLevel
     * const userLevel = await prisma.userLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLevelUpdateArgs>(args: SelectSubset<T, UserLevelUpdateArgs<ExtArgs>>): Prisma__UserLevelClient<$Result.GetResult<Prisma.$UserLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLevels.
     * @param {UserLevelDeleteManyArgs} args - Arguments to filter UserLevels to delete.
     * @example
     * // Delete a few UserLevels
     * const { count } = await prisma.userLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLevelDeleteManyArgs>(args?: SelectSubset<T, UserLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLevels
     * const userLevel = await prisma.userLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLevelUpdateManyArgs>(args: SelectSubset<T, UserLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLevels and returns the data updated in the database.
     * @param {UserLevelUpdateManyAndReturnArgs} args - Arguments to update many UserLevels.
     * @example
     * // Update many UserLevels
     * const userLevel = await prisma.userLevel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLevels and only return the `id`
     * const userLevelWithIdOnly = await prisma.userLevel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLevel.
     * @param {UserLevelUpsertArgs} args - Arguments to update or create a UserLevel.
     * @example
     * // Update or create a UserLevel
     * const userLevel = await prisma.userLevel.upsert({
     *   create: {
     *     // ... data to create a UserLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLevel we want to update
     *   }
     * })
     */
    upsert<T extends UserLevelUpsertArgs>(args: SelectSubset<T, UserLevelUpsertArgs<ExtArgs>>): Prisma__UserLevelClient<$Result.GetResult<Prisma.$UserLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelCountArgs} args - Arguments to filter UserLevels to count.
     * @example
     * // Count the number of UserLevels
     * const count = await prisma.userLevel.count({
     *   where: {
     *     // ... the filter for the UserLevels we want to count
     *   }
     * })
    **/
    count<T extends UserLevelCountArgs>(
      args?: Subset<T, UserLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLevelAggregateArgs>(args: Subset<T, UserLevelAggregateArgs>): Prisma.PrismaPromise<GetUserLevelAggregateType<T>>

    /**
     * Group by UserLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLevelGroupByArgs['orderBy'] }
        : { orderBy?: UserLevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLevel model
   */
  readonly fields: UserLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserLevel model
   */
  interface UserLevelFieldRefs {
    readonly id: FieldRef<"UserLevel", 'String'>
    readonly guildId: FieldRef<"UserLevel", 'String'>
    readonly userId: FieldRef<"UserLevel", 'String'>
    readonly xp: FieldRef<"UserLevel", 'Int'>
    readonly level: FieldRef<"UserLevel", 'Int'>
    readonly totalMessages: FieldRef<"UserLevel", 'Int'>
    readonly lastMessageAt: FieldRef<"UserLevel", 'DateTime'>
    readonly createdAt: FieldRef<"UserLevel", 'DateTime'>
    readonly updatedAt: FieldRef<"UserLevel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLevel findUnique
   */
  export type UserLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLevel
     */
    select?: UserLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLevel
     */
    omit?: UserLevelOmit<ExtArgs> | null
    /**
     * Filter, which UserLevel to fetch.
     */
    where: UserLevelWhereUniqueInput
  }

  /**
   * UserLevel findUniqueOrThrow
   */
  export type UserLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLevel
     */
    select?: UserLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLevel
     */
    omit?: UserLevelOmit<ExtArgs> | null
    /**
     * Filter, which UserLevel to fetch.
     */
    where: UserLevelWhereUniqueInput
  }

  /**
   * UserLevel findFirst
   */
  export type UserLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLevel
     */
    select?: UserLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLevel
     */
    omit?: UserLevelOmit<ExtArgs> | null
    /**
     * Filter, which UserLevel to fetch.
     */
    where?: UserLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLevels to fetch.
     */
    orderBy?: UserLevelOrderByWithRelationInput | UserLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLevels.
     */
    cursor?: UserLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLevels.
     */
    distinct?: UserLevelScalarFieldEnum | UserLevelScalarFieldEnum[]
  }

  /**
   * UserLevel findFirstOrThrow
   */
  export type UserLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLevel
     */
    select?: UserLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLevel
     */
    omit?: UserLevelOmit<ExtArgs> | null
    /**
     * Filter, which UserLevel to fetch.
     */
    where?: UserLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLevels to fetch.
     */
    orderBy?: UserLevelOrderByWithRelationInput | UserLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLevels.
     */
    cursor?: UserLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLevels.
     */
    distinct?: UserLevelScalarFieldEnum | UserLevelScalarFieldEnum[]
  }

  /**
   * UserLevel findMany
   */
  export type UserLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLevel
     */
    select?: UserLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLevel
     */
    omit?: UserLevelOmit<ExtArgs> | null
    /**
     * Filter, which UserLevels to fetch.
     */
    where?: UserLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLevels to fetch.
     */
    orderBy?: UserLevelOrderByWithRelationInput | UserLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLevels.
     */
    cursor?: UserLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLevels.
     */
    skip?: number
    distinct?: UserLevelScalarFieldEnum | UserLevelScalarFieldEnum[]
  }

  /**
   * UserLevel create
   */
  export type UserLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLevel
     */
    select?: UserLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLevel
     */
    omit?: UserLevelOmit<ExtArgs> | null
    /**
     * The data needed to create a UserLevel.
     */
    data: XOR<UserLevelCreateInput, UserLevelUncheckedCreateInput>
  }

  /**
   * UserLevel createMany
   */
  export type UserLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLevels.
     */
    data: UserLevelCreateManyInput | UserLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLevel createManyAndReturn
   */
  export type UserLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLevel
     */
    select?: UserLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLevel
     */
    omit?: UserLevelOmit<ExtArgs> | null
    /**
     * The data used to create many UserLevels.
     */
    data: UserLevelCreateManyInput | UserLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLevel update
   */
  export type UserLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLevel
     */
    select?: UserLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLevel
     */
    omit?: UserLevelOmit<ExtArgs> | null
    /**
     * The data needed to update a UserLevel.
     */
    data: XOR<UserLevelUpdateInput, UserLevelUncheckedUpdateInput>
    /**
     * Choose, which UserLevel to update.
     */
    where: UserLevelWhereUniqueInput
  }

  /**
   * UserLevel updateMany
   */
  export type UserLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLevels.
     */
    data: XOR<UserLevelUpdateManyMutationInput, UserLevelUncheckedUpdateManyInput>
    /**
     * Filter which UserLevels to update
     */
    where?: UserLevelWhereInput
    /**
     * Limit how many UserLevels to update.
     */
    limit?: number
  }

  /**
   * UserLevel updateManyAndReturn
   */
  export type UserLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLevel
     */
    select?: UserLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLevel
     */
    omit?: UserLevelOmit<ExtArgs> | null
    /**
     * The data used to update UserLevels.
     */
    data: XOR<UserLevelUpdateManyMutationInput, UserLevelUncheckedUpdateManyInput>
    /**
     * Filter which UserLevels to update
     */
    where?: UserLevelWhereInput
    /**
     * Limit how many UserLevels to update.
     */
    limit?: number
  }

  /**
   * UserLevel upsert
   */
  export type UserLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLevel
     */
    select?: UserLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLevel
     */
    omit?: UserLevelOmit<ExtArgs> | null
    /**
     * The filter to search for the UserLevel to update in case it exists.
     */
    where: UserLevelWhereUniqueInput
    /**
     * In case the UserLevel found by the `where` argument doesn't exist, create a new UserLevel with this data.
     */
    create: XOR<UserLevelCreateInput, UserLevelUncheckedCreateInput>
    /**
     * In case the UserLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLevelUpdateInput, UserLevelUncheckedUpdateInput>
  }

  /**
   * UserLevel delete
   */
  export type UserLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLevel
     */
    select?: UserLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLevel
     */
    omit?: UserLevelOmit<ExtArgs> | null
    /**
     * Filter which UserLevel to delete.
     */
    where: UserLevelWhereUniqueInput
  }

  /**
   * UserLevel deleteMany
   */
  export type UserLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLevels to delete
     */
    where?: UserLevelWhereInput
    /**
     * Limit how many UserLevels to delete.
     */
    limit?: number
  }

  /**
   * UserLevel without action
   */
  export type UserLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLevel
     */
    select?: UserLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLevel
     */
    omit?: UserLevelOmit<ExtArgs> | null
  }


  /**
   * Model LevelReward
   */

  export type AggregateLevelReward = {
    _count: LevelRewardCountAggregateOutputType | null
    _avg: LevelRewardAvgAggregateOutputType | null
    _sum: LevelRewardSumAggregateOutputType | null
    _min: LevelRewardMinAggregateOutputType | null
    _max: LevelRewardMaxAggregateOutputType | null
  }

  export type LevelRewardAvgAggregateOutputType = {
    level: number | null
  }

  export type LevelRewardSumAggregateOutputType = {
    level: number | null
  }

  export type LevelRewardMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    level: number | null
    roleId: string | null
    configId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LevelRewardMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    level: number | null
    roleId: string | null
    configId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LevelRewardCountAggregateOutputType = {
    id: number
    guildId: number
    level: number
    roleId: number
    configId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LevelRewardAvgAggregateInputType = {
    level?: true
  }

  export type LevelRewardSumAggregateInputType = {
    level?: true
  }

  export type LevelRewardMinAggregateInputType = {
    id?: true
    guildId?: true
    level?: true
    roleId?: true
    configId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LevelRewardMaxAggregateInputType = {
    id?: true
    guildId?: true
    level?: true
    roleId?: true
    configId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LevelRewardCountAggregateInputType = {
    id?: true
    guildId?: true
    level?: true
    roleId?: true
    configId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LevelRewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelReward to aggregate.
     */
    where?: LevelRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelRewards to fetch.
     */
    orderBy?: LevelRewardOrderByWithRelationInput | LevelRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LevelRewards
    **/
    _count?: true | LevelRewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelRewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelRewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelRewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelRewardMaxAggregateInputType
  }

  export type GetLevelRewardAggregateType<T extends LevelRewardAggregateArgs> = {
        [P in keyof T & keyof AggregateLevelReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevelReward[P]>
      : GetScalarType<T[P], AggregateLevelReward[P]>
  }




  export type LevelRewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelRewardWhereInput
    orderBy?: LevelRewardOrderByWithAggregationInput | LevelRewardOrderByWithAggregationInput[]
    by: LevelRewardScalarFieldEnum[] | LevelRewardScalarFieldEnum
    having?: LevelRewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelRewardCountAggregateInputType | true
    _avg?: LevelRewardAvgAggregateInputType
    _sum?: LevelRewardSumAggregateInputType
    _min?: LevelRewardMinAggregateInputType
    _max?: LevelRewardMaxAggregateInputType
  }

  export type LevelRewardGroupByOutputType = {
    id: string
    guildId: string
    level: number
    roleId: string
    configId: string
    createdAt: Date
    updatedAt: Date
    _count: LevelRewardCountAggregateOutputType | null
    _avg: LevelRewardAvgAggregateOutputType | null
    _sum: LevelRewardSumAggregateOutputType | null
    _min: LevelRewardMinAggregateOutputType | null
    _max: LevelRewardMaxAggregateOutputType | null
  }

  type GetLevelRewardGroupByPayload<T extends LevelRewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelRewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelRewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelRewardGroupByOutputType[P]>
            : GetScalarType<T[P], LevelRewardGroupByOutputType[P]>
        }
      >
    >


  export type LevelRewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    level?: boolean
    roleId?: boolean
    configId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    config?: boolean | LevelConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelReward"]>

  export type LevelRewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    level?: boolean
    roleId?: boolean
    configId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    config?: boolean | LevelConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelReward"]>

  export type LevelRewardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    level?: boolean
    roleId?: boolean
    configId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    config?: boolean | LevelConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelReward"]>

  export type LevelRewardSelectScalar = {
    id?: boolean
    guildId?: boolean
    level?: boolean
    roleId?: boolean
    configId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LevelRewardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "level" | "roleId" | "configId" | "createdAt" | "updatedAt", ExtArgs["result"]["levelReward"]>
  export type LevelRewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | LevelConfigDefaultArgs<ExtArgs>
  }
  export type LevelRewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | LevelConfigDefaultArgs<ExtArgs>
  }
  export type LevelRewardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | LevelConfigDefaultArgs<ExtArgs>
  }

  export type $LevelRewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LevelReward"
    objects: {
      config: Prisma.$LevelConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      level: number
      roleId: string
      configId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["levelReward"]>
    composites: {}
  }

  type LevelRewardGetPayload<S extends boolean | null | undefined | LevelRewardDefaultArgs> = $Result.GetResult<Prisma.$LevelRewardPayload, S>

  type LevelRewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelRewardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelRewardCountAggregateInputType | true
    }

  export interface LevelRewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LevelReward'], meta: { name: 'LevelReward' } }
    /**
     * Find zero or one LevelReward that matches the filter.
     * @param {LevelRewardFindUniqueArgs} args - Arguments to find a LevelReward
     * @example
     * // Get one LevelReward
     * const levelReward = await prisma.levelReward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelRewardFindUniqueArgs>(args: SelectSubset<T, LevelRewardFindUniqueArgs<ExtArgs>>): Prisma__LevelRewardClient<$Result.GetResult<Prisma.$LevelRewardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LevelReward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelRewardFindUniqueOrThrowArgs} args - Arguments to find a LevelReward
     * @example
     * // Get one LevelReward
     * const levelReward = await prisma.levelReward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelRewardFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelRewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelRewardClient<$Result.GetResult<Prisma.$LevelRewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LevelReward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRewardFindFirstArgs} args - Arguments to find a LevelReward
     * @example
     * // Get one LevelReward
     * const levelReward = await prisma.levelReward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelRewardFindFirstArgs>(args?: SelectSubset<T, LevelRewardFindFirstArgs<ExtArgs>>): Prisma__LevelRewardClient<$Result.GetResult<Prisma.$LevelRewardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LevelReward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRewardFindFirstOrThrowArgs} args - Arguments to find a LevelReward
     * @example
     * // Get one LevelReward
     * const levelReward = await prisma.levelReward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelRewardFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelRewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelRewardClient<$Result.GetResult<Prisma.$LevelRewardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LevelRewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LevelRewards
     * const levelRewards = await prisma.levelReward.findMany()
     * 
     * // Get first 10 LevelRewards
     * const levelRewards = await prisma.levelReward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelRewardWithIdOnly = await prisma.levelReward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelRewardFindManyArgs>(args?: SelectSubset<T, LevelRewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LevelReward.
     * @param {LevelRewardCreateArgs} args - Arguments to create a LevelReward.
     * @example
     * // Create one LevelReward
     * const LevelReward = await prisma.levelReward.create({
     *   data: {
     *     // ... data to create a LevelReward
     *   }
     * })
     * 
     */
    create<T extends LevelRewardCreateArgs>(args: SelectSubset<T, LevelRewardCreateArgs<ExtArgs>>): Prisma__LevelRewardClient<$Result.GetResult<Prisma.$LevelRewardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LevelRewards.
     * @param {LevelRewardCreateManyArgs} args - Arguments to create many LevelRewards.
     * @example
     * // Create many LevelRewards
     * const levelReward = await prisma.levelReward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelRewardCreateManyArgs>(args?: SelectSubset<T, LevelRewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LevelRewards and returns the data saved in the database.
     * @param {LevelRewardCreateManyAndReturnArgs} args - Arguments to create many LevelRewards.
     * @example
     * // Create many LevelRewards
     * const levelReward = await prisma.levelReward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LevelRewards and only return the `id`
     * const levelRewardWithIdOnly = await prisma.levelReward.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelRewardCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelRewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelRewardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LevelReward.
     * @param {LevelRewardDeleteArgs} args - Arguments to delete one LevelReward.
     * @example
     * // Delete one LevelReward
     * const LevelReward = await prisma.levelReward.delete({
     *   where: {
     *     // ... filter to delete one LevelReward
     *   }
     * })
     * 
     */
    delete<T extends LevelRewardDeleteArgs>(args: SelectSubset<T, LevelRewardDeleteArgs<ExtArgs>>): Prisma__LevelRewardClient<$Result.GetResult<Prisma.$LevelRewardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LevelReward.
     * @param {LevelRewardUpdateArgs} args - Arguments to update one LevelReward.
     * @example
     * // Update one LevelReward
     * const levelReward = await prisma.levelReward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelRewardUpdateArgs>(args: SelectSubset<T, LevelRewardUpdateArgs<ExtArgs>>): Prisma__LevelRewardClient<$Result.GetResult<Prisma.$LevelRewardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LevelRewards.
     * @param {LevelRewardDeleteManyArgs} args - Arguments to filter LevelRewards to delete.
     * @example
     * // Delete a few LevelRewards
     * const { count } = await prisma.levelReward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelRewardDeleteManyArgs>(args?: SelectSubset<T, LevelRewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LevelRewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LevelRewards
     * const levelReward = await prisma.levelReward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelRewardUpdateManyArgs>(args: SelectSubset<T, LevelRewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LevelRewards and returns the data updated in the database.
     * @param {LevelRewardUpdateManyAndReturnArgs} args - Arguments to update many LevelRewards.
     * @example
     * // Update many LevelRewards
     * const levelReward = await prisma.levelReward.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LevelRewards and only return the `id`
     * const levelRewardWithIdOnly = await prisma.levelReward.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LevelRewardUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelRewardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelRewardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LevelReward.
     * @param {LevelRewardUpsertArgs} args - Arguments to update or create a LevelReward.
     * @example
     * // Update or create a LevelReward
     * const levelReward = await prisma.levelReward.upsert({
     *   create: {
     *     // ... data to create a LevelReward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LevelReward we want to update
     *   }
     * })
     */
    upsert<T extends LevelRewardUpsertArgs>(args: SelectSubset<T, LevelRewardUpsertArgs<ExtArgs>>): Prisma__LevelRewardClient<$Result.GetResult<Prisma.$LevelRewardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LevelRewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRewardCountArgs} args - Arguments to filter LevelRewards to count.
     * @example
     * // Count the number of LevelRewards
     * const count = await prisma.levelReward.count({
     *   where: {
     *     // ... the filter for the LevelRewards we want to count
     *   }
     * })
    **/
    count<T extends LevelRewardCountArgs>(
      args?: Subset<T, LevelRewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelRewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LevelReward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LevelRewardAggregateArgs>(args: Subset<T, LevelRewardAggregateArgs>): Prisma.PrismaPromise<GetLevelRewardAggregateType<T>>

    /**
     * Group by LevelReward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelRewardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LevelRewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelRewardGroupByArgs['orderBy'] }
        : { orderBy?: LevelRewardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LevelRewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LevelReward model
   */
  readonly fields: LevelRewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LevelReward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelRewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    config<T extends LevelConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelConfigDefaultArgs<ExtArgs>>): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LevelReward model
   */
  interface LevelRewardFieldRefs {
    readonly id: FieldRef<"LevelReward", 'String'>
    readonly guildId: FieldRef<"LevelReward", 'String'>
    readonly level: FieldRef<"LevelReward", 'Int'>
    readonly roleId: FieldRef<"LevelReward", 'String'>
    readonly configId: FieldRef<"LevelReward", 'String'>
    readonly createdAt: FieldRef<"LevelReward", 'DateTime'>
    readonly updatedAt: FieldRef<"LevelReward", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LevelReward findUnique
   */
  export type LevelRewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardInclude<ExtArgs> | null
    /**
     * Filter, which LevelReward to fetch.
     */
    where: LevelRewardWhereUniqueInput
  }

  /**
   * LevelReward findUniqueOrThrow
   */
  export type LevelRewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardInclude<ExtArgs> | null
    /**
     * Filter, which LevelReward to fetch.
     */
    where: LevelRewardWhereUniqueInput
  }

  /**
   * LevelReward findFirst
   */
  export type LevelRewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardInclude<ExtArgs> | null
    /**
     * Filter, which LevelReward to fetch.
     */
    where?: LevelRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelRewards to fetch.
     */
    orderBy?: LevelRewardOrderByWithRelationInput | LevelRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelRewards.
     */
    cursor?: LevelRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelRewards.
     */
    distinct?: LevelRewardScalarFieldEnum | LevelRewardScalarFieldEnum[]
  }

  /**
   * LevelReward findFirstOrThrow
   */
  export type LevelRewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardInclude<ExtArgs> | null
    /**
     * Filter, which LevelReward to fetch.
     */
    where?: LevelRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelRewards to fetch.
     */
    orderBy?: LevelRewardOrderByWithRelationInput | LevelRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelRewards.
     */
    cursor?: LevelRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelRewards.
     */
    distinct?: LevelRewardScalarFieldEnum | LevelRewardScalarFieldEnum[]
  }

  /**
   * LevelReward findMany
   */
  export type LevelRewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardInclude<ExtArgs> | null
    /**
     * Filter, which LevelRewards to fetch.
     */
    where?: LevelRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelRewards to fetch.
     */
    orderBy?: LevelRewardOrderByWithRelationInput | LevelRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LevelRewards.
     */
    cursor?: LevelRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelRewards.
     */
    skip?: number
    distinct?: LevelRewardScalarFieldEnum | LevelRewardScalarFieldEnum[]
  }

  /**
   * LevelReward create
   */
  export type LevelRewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardInclude<ExtArgs> | null
    /**
     * The data needed to create a LevelReward.
     */
    data: XOR<LevelRewardCreateInput, LevelRewardUncheckedCreateInput>
  }

  /**
   * LevelReward createMany
   */
  export type LevelRewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LevelRewards.
     */
    data: LevelRewardCreateManyInput | LevelRewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LevelReward createManyAndReturn
   */
  export type LevelRewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * The data used to create many LevelRewards.
     */
    data: LevelRewardCreateManyInput | LevelRewardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LevelReward update
   */
  export type LevelRewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardInclude<ExtArgs> | null
    /**
     * The data needed to update a LevelReward.
     */
    data: XOR<LevelRewardUpdateInput, LevelRewardUncheckedUpdateInput>
    /**
     * Choose, which LevelReward to update.
     */
    where: LevelRewardWhereUniqueInput
  }

  /**
   * LevelReward updateMany
   */
  export type LevelRewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LevelRewards.
     */
    data: XOR<LevelRewardUpdateManyMutationInput, LevelRewardUncheckedUpdateManyInput>
    /**
     * Filter which LevelRewards to update
     */
    where?: LevelRewardWhereInput
    /**
     * Limit how many LevelRewards to update.
     */
    limit?: number
  }

  /**
   * LevelReward updateManyAndReturn
   */
  export type LevelRewardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * The data used to update LevelRewards.
     */
    data: XOR<LevelRewardUpdateManyMutationInput, LevelRewardUncheckedUpdateManyInput>
    /**
     * Filter which LevelRewards to update
     */
    where?: LevelRewardWhereInput
    /**
     * Limit how many LevelRewards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LevelReward upsert
   */
  export type LevelRewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardInclude<ExtArgs> | null
    /**
     * The filter to search for the LevelReward to update in case it exists.
     */
    where: LevelRewardWhereUniqueInput
    /**
     * In case the LevelReward found by the `where` argument doesn't exist, create a new LevelReward with this data.
     */
    create: XOR<LevelRewardCreateInput, LevelRewardUncheckedCreateInput>
    /**
     * In case the LevelReward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelRewardUpdateInput, LevelRewardUncheckedUpdateInput>
  }

  /**
   * LevelReward delete
   */
  export type LevelRewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardInclude<ExtArgs> | null
    /**
     * Filter which LevelReward to delete.
     */
    where: LevelRewardWhereUniqueInput
  }

  /**
   * LevelReward deleteMany
   */
  export type LevelRewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelRewards to delete
     */
    where?: LevelRewardWhereInput
    /**
     * Limit how many LevelRewards to delete.
     */
    limit?: number
  }

  /**
   * LevelReward without action
   */
  export type LevelRewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelReward
     */
    select?: LevelRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelReward
     */
    omit?: LevelRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelRewardInclude<ExtArgs> | null
  }


  /**
   * Model StatsChannelConfig
   */

  export type AggregateStatsChannelConfig = {
    _count: StatsChannelConfigCountAggregateOutputType | null
    _min: StatsChannelConfigMinAggregateOutputType | null
    _max: StatsChannelConfigMaxAggregateOutputType | null
  }

  export type StatsChannelConfigMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    categoryId: string | null
    totalMembersChannelId: string | null
    humanMembersChannelId: string | null
    botMembersChannelId: string | null
    onlineMembersChannelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StatsChannelConfigMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    categoryId: string | null
    totalMembersChannelId: string | null
    humanMembersChannelId: string | null
    botMembersChannelId: string | null
    onlineMembersChannelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StatsChannelConfigCountAggregateOutputType = {
    id: number
    guildId: number
    categoryId: number
    totalMembersChannelId: number
    humanMembersChannelId: number
    botMembersChannelId: number
    onlineMembersChannelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StatsChannelConfigMinAggregateInputType = {
    id?: true
    guildId?: true
    categoryId?: true
    totalMembersChannelId?: true
    humanMembersChannelId?: true
    botMembersChannelId?: true
    onlineMembersChannelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StatsChannelConfigMaxAggregateInputType = {
    id?: true
    guildId?: true
    categoryId?: true
    totalMembersChannelId?: true
    humanMembersChannelId?: true
    botMembersChannelId?: true
    onlineMembersChannelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StatsChannelConfigCountAggregateInputType = {
    id?: true
    guildId?: true
    categoryId?: true
    totalMembersChannelId?: true
    humanMembersChannelId?: true
    botMembersChannelId?: true
    onlineMembersChannelId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StatsChannelConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatsChannelConfig to aggregate.
     */
    where?: StatsChannelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatsChannelConfigs to fetch.
     */
    orderBy?: StatsChannelConfigOrderByWithRelationInput | StatsChannelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatsChannelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatsChannelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatsChannelConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatsChannelConfigs
    **/
    _count?: true | StatsChannelConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatsChannelConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatsChannelConfigMaxAggregateInputType
  }

  export type GetStatsChannelConfigAggregateType<T extends StatsChannelConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateStatsChannelConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatsChannelConfig[P]>
      : GetScalarType<T[P], AggregateStatsChannelConfig[P]>
  }




  export type StatsChannelConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatsChannelConfigWhereInput
    orderBy?: StatsChannelConfigOrderByWithAggregationInput | StatsChannelConfigOrderByWithAggregationInput[]
    by: StatsChannelConfigScalarFieldEnum[] | StatsChannelConfigScalarFieldEnum
    having?: StatsChannelConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatsChannelConfigCountAggregateInputType | true
    _min?: StatsChannelConfigMinAggregateInputType
    _max?: StatsChannelConfigMaxAggregateInputType
  }

  export type StatsChannelConfigGroupByOutputType = {
    id: string
    guildId: string
    categoryId: string | null
    totalMembersChannelId: string | null
    humanMembersChannelId: string | null
    botMembersChannelId: string | null
    onlineMembersChannelId: string | null
    createdAt: Date
    updatedAt: Date
    _count: StatsChannelConfigCountAggregateOutputType | null
    _min: StatsChannelConfigMinAggregateOutputType | null
    _max: StatsChannelConfigMaxAggregateOutputType | null
  }

  type GetStatsChannelConfigGroupByPayload<T extends StatsChannelConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatsChannelConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatsChannelConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatsChannelConfigGroupByOutputType[P]>
            : GetScalarType<T[P], StatsChannelConfigGroupByOutputType[P]>
        }
      >
    >


  export type StatsChannelConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    categoryId?: boolean
    totalMembersChannelId?: boolean
    humanMembersChannelId?: boolean
    botMembersChannelId?: boolean
    onlineMembersChannelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["statsChannelConfig"]>

  export type StatsChannelConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    categoryId?: boolean
    totalMembersChannelId?: boolean
    humanMembersChannelId?: boolean
    botMembersChannelId?: boolean
    onlineMembersChannelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["statsChannelConfig"]>

  export type StatsChannelConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    categoryId?: boolean
    totalMembersChannelId?: boolean
    humanMembersChannelId?: boolean
    botMembersChannelId?: boolean
    onlineMembersChannelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["statsChannelConfig"]>

  export type StatsChannelConfigSelectScalar = {
    id?: boolean
    guildId?: boolean
    categoryId?: boolean
    totalMembersChannelId?: boolean
    humanMembersChannelId?: boolean
    botMembersChannelId?: boolean
    onlineMembersChannelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StatsChannelConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "categoryId" | "totalMembersChannelId" | "humanMembersChannelId" | "botMembersChannelId" | "onlineMembersChannelId" | "createdAt" | "updatedAt", ExtArgs["result"]["statsChannelConfig"]>

  export type $StatsChannelConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatsChannelConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      categoryId: string | null
      totalMembersChannelId: string | null
      humanMembersChannelId: string | null
      botMembersChannelId: string | null
      onlineMembersChannelId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["statsChannelConfig"]>
    composites: {}
  }

  type StatsChannelConfigGetPayload<S extends boolean | null | undefined | StatsChannelConfigDefaultArgs> = $Result.GetResult<Prisma.$StatsChannelConfigPayload, S>

  type StatsChannelConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatsChannelConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatsChannelConfigCountAggregateInputType | true
    }

  export interface StatsChannelConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatsChannelConfig'], meta: { name: 'StatsChannelConfig' } }
    /**
     * Find zero or one StatsChannelConfig that matches the filter.
     * @param {StatsChannelConfigFindUniqueArgs} args - Arguments to find a StatsChannelConfig
     * @example
     * // Get one StatsChannelConfig
     * const statsChannelConfig = await prisma.statsChannelConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatsChannelConfigFindUniqueArgs>(args: SelectSubset<T, StatsChannelConfigFindUniqueArgs<ExtArgs>>): Prisma__StatsChannelConfigClient<$Result.GetResult<Prisma.$StatsChannelConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatsChannelConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatsChannelConfigFindUniqueOrThrowArgs} args - Arguments to find a StatsChannelConfig
     * @example
     * // Get one StatsChannelConfig
     * const statsChannelConfig = await prisma.statsChannelConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatsChannelConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, StatsChannelConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatsChannelConfigClient<$Result.GetResult<Prisma.$StatsChannelConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatsChannelConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsChannelConfigFindFirstArgs} args - Arguments to find a StatsChannelConfig
     * @example
     * // Get one StatsChannelConfig
     * const statsChannelConfig = await prisma.statsChannelConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatsChannelConfigFindFirstArgs>(args?: SelectSubset<T, StatsChannelConfigFindFirstArgs<ExtArgs>>): Prisma__StatsChannelConfigClient<$Result.GetResult<Prisma.$StatsChannelConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatsChannelConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsChannelConfigFindFirstOrThrowArgs} args - Arguments to find a StatsChannelConfig
     * @example
     * // Get one StatsChannelConfig
     * const statsChannelConfig = await prisma.statsChannelConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatsChannelConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, StatsChannelConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatsChannelConfigClient<$Result.GetResult<Prisma.$StatsChannelConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatsChannelConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsChannelConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatsChannelConfigs
     * const statsChannelConfigs = await prisma.statsChannelConfig.findMany()
     * 
     * // Get first 10 StatsChannelConfigs
     * const statsChannelConfigs = await prisma.statsChannelConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statsChannelConfigWithIdOnly = await prisma.statsChannelConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatsChannelConfigFindManyArgs>(args?: SelectSubset<T, StatsChannelConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsChannelConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatsChannelConfig.
     * @param {StatsChannelConfigCreateArgs} args - Arguments to create a StatsChannelConfig.
     * @example
     * // Create one StatsChannelConfig
     * const StatsChannelConfig = await prisma.statsChannelConfig.create({
     *   data: {
     *     // ... data to create a StatsChannelConfig
     *   }
     * })
     * 
     */
    create<T extends StatsChannelConfigCreateArgs>(args: SelectSubset<T, StatsChannelConfigCreateArgs<ExtArgs>>): Prisma__StatsChannelConfigClient<$Result.GetResult<Prisma.$StatsChannelConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatsChannelConfigs.
     * @param {StatsChannelConfigCreateManyArgs} args - Arguments to create many StatsChannelConfigs.
     * @example
     * // Create many StatsChannelConfigs
     * const statsChannelConfig = await prisma.statsChannelConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatsChannelConfigCreateManyArgs>(args?: SelectSubset<T, StatsChannelConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatsChannelConfigs and returns the data saved in the database.
     * @param {StatsChannelConfigCreateManyAndReturnArgs} args - Arguments to create many StatsChannelConfigs.
     * @example
     * // Create many StatsChannelConfigs
     * const statsChannelConfig = await prisma.statsChannelConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatsChannelConfigs and only return the `id`
     * const statsChannelConfigWithIdOnly = await prisma.statsChannelConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatsChannelConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, StatsChannelConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsChannelConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StatsChannelConfig.
     * @param {StatsChannelConfigDeleteArgs} args - Arguments to delete one StatsChannelConfig.
     * @example
     * // Delete one StatsChannelConfig
     * const StatsChannelConfig = await prisma.statsChannelConfig.delete({
     *   where: {
     *     // ... filter to delete one StatsChannelConfig
     *   }
     * })
     * 
     */
    delete<T extends StatsChannelConfigDeleteArgs>(args: SelectSubset<T, StatsChannelConfigDeleteArgs<ExtArgs>>): Prisma__StatsChannelConfigClient<$Result.GetResult<Prisma.$StatsChannelConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatsChannelConfig.
     * @param {StatsChannelConfigUpdateArgs} args - Arguments to update one StatsChannelConfig.
     * @example
     * // Update one StatsChannelConfig
     * const statsChannelConfig = await prisma.statsChannelConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatsChannelConfigUpdateArgs>(args: SelectSubset<T, StatsChannelConfigUpdateArgs<ExtArgs>>): Prisma__StatsChannelConfigClient<$Result.GetResult<Prisma.$StatsChannelConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatsChannelConfigs.
     * @param {StatsChannelConfigDeleteManyArgs} args - Arguments to filter StatsChannelConfigs to delete.
     * @example
     * // Delete a few StatsChannelConfigs
     * const { count } = await prisma.statsChannelConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatsChannelConfigDeleteManyArgs>(args?: SelectSubset<T, StatsChannelConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatsChannelConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsChannelConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatsChannelConfigs
     * const statsChannelConfig = await prisma.statsChannelConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatsChannelConfigUpdateManyArgs>(args: SelectSubset<T, StatsChannelConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatsChannelConfigs and returns the data updated in the database.
     * @param {StatsChannelConfigUpdateManyAndReturnArgs} args - Arguments to update many StatsChannelConfigs.
     * @example
     * // Update many StatsChannelConfigs
     * const statsChannelConfig = await prisma.statsChannelConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StatsChannelConfigs and only return the `id`
     * const statsChannelConfigWithIdOnly = await prisma.statsChannelConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatsChannelConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, StatsChannelConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsChannelConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StatsChannelConfig.
     * @param {StatsChannelConfigUpsertArgs} args - Arguments to update or create a StatsChannelConfig.
     * @example
     * // Update or create a StatsChannelConfig
     * const statsChannelConfig = await prisma.statsChannelConfig.upsert({
     *   create: {
     *     // ... data to create a StatsChannelConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatsChannelConfig we want to update
     *   }
     * })
     */
    upsert<T extends StatsChannelConfigUpsertArgs>(args: SelectSubset<T, StatsChannelConfigUpsertArgs<ExtArgs>>): Prisma__StatsChannelConfigClient<$Result.GetResult<Prisma.$StatsChannelConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatsChannelConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsChannelConfigCountArgs} args - Arguments to filter StatsChannelConfigs to count.
     * @example
     * // Count the number of StatsChannelConfigs
     * const count = await prisma.statsChannelConfig.count({
     *   where: {
     *     // ... the filter for the StatsChannelConfigs we want to count
     *   }
     * })
    **/
    count<T extends StatsChannelConfigCountArgs>(
      args?: Subset<T, StatsChannelConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatsChannelConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatsChannelConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsChannelConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatsChannelConfigAggregateArgs>(args: Subset<T, StatsChannelConfigAggregateArgs>): Prisma.PrismaPromise<GetStatsChannelConfigAggregateType<T>>

    /**
     * Group by StatsChannelConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsChannelConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatsChannelConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatsChannelConfigGroupByArgs['orderBy'] }
        : { orderBy?: StatsChannelConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatsChannelConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatsChannelConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatsChannelConfig model
   */
  readonly fields: StatsChannelConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatsChannelConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatsChannelConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatsChannelConfig model
   */
  interface StatsChannelConfigFieldRefs {
    readonly id: FieldRef<"StatsChannelConfig", 'String'>
    readonly guildId: FieldRef<"StatsChannelConfig", 'String'>
    readonly categoryId: FieldRef<"StatsChannelConfig", 'String'>
    readonly totalMembersChannelId: FieldRef<"StatsChannelConfig", 'String'>
    readonly humanMembersChannelId: FieldRef<"StatsChannelConfig", 'String'>
    readonly botMembersChannelId: FieldRef<"StatsChannelConfig", 'String'>
    readonly onlineMembersChannelId: FieldRef<"StatsChannelConfig", 'String'>
    readonly createdAt: FieldRef<"StatsChannelConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"StatsChannelConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StatsChannelConfig findUnique
   */
  export type StatsChannelConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsChannelConfig
     */
    select?: StatsChannelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatsChannelConfig
     */
    omit?: StatsChannelConfigOmit<ExtArgs> | null
    /**
     * Filter, which StatsChannelConfig to fetch.
     */
    where: StatsChannelConfigWhereUniqueInput
  }

  /**
   * StatsChannelConfig findUniqueOrThrow
   */
  export type StatsChannelConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsChannelConfig
     */
    select?: StatsChannelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatsChannelConfig
     */
    omit?: StatsChannelConfigOmit<ExtArgs> | null
    /**
     * Filter, which StatsChannelConfig to fetch.
     */
    where: StatsChannelConfigWhereUniqueInput
  }

  /**
   * StatsChannelConfig findFirst
   */
  export type StatsChannelConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsChannelConfig
     */
    select?: StatsChannelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatsChannelConfig
     */
    omit?: StatsChannelConfigOmit<ExtArgs> | null
    /**
     * Filter, which StatsChannelConfig to fetch.
     */
    where?: StatsChannelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatsChannelConfigs to fetch.
     */
    orderBy?: StatsChannelConfigOrderByWithRelationInput | StatsChannelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatsChannelConfigs.
     */
    cursor?: StatsChannelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatsChannelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatsChannelConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatsChannelConfigs.
     */
    distinct?: StatsChannelConfigScalarFieldEnum | StatsChannelConfigScalarFieldEnum[]
  }

  /**
   * StatsChannelConfig findFirstOrThrow
   */
  export type StatsChannelConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsChannelConfig
     */
    select?: StatsChannelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatsChannelConfig
     */
    omit?: StatsChannelConfigOmit<ExtArgs> | null
    /**
     * Filter, which StatsChannelConfig to fetch.
     */
    where?: StatsChannelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatsChannelConfigs to fetch.
     */
    orderBy?: StatsChannelConfigOrderByWithRelationInput | StatsChannelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatsChannelConfigs.
     */
    cursor?: StatsChannelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatsChannelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatsChannelConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatsChannelConfigs.
     */
    distinct?: StatsChannelConfigScalarFieldEnum | StatsChannelConfigScalarFieldEnum[]
  }

  /**
   * StatsChannelConfig findMany
   */
  export type StatsChannelConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsChannelConfig
     */
    select?: StatsChannelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatsChannelConfig
     */
    omit?: StatsChannelConfigOmit<ExtArgs> | null
    /**
     * Filter, which StatsChannelConfigs to fetch.
     */
    where?: StatsChannelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatsChannelConfigs to fetch.
     */
    orderBy?: StatsChannelConfigOrderByWithRelationInput | StatsChannelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatsChannelConfigs.
     */
    cursor?: StatsChannelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatsChannelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatsChannelConfigs.
     */
    skip?: number
    distinct?: StatsChannelConfigScalarFieldEnum | StatsChannelConfigScalarFieldEnum[]
  }

  /**
   * StatsChannelConfig create
   */
  export type StatsChannelConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsChannelConfig
     */
    select?: StatsChannelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatsChannelConfig
     */
    omit?: StatsChannelConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a StatsChannelConfig.
     */
    data: XOR<StatsChannelConfigCreateInput, StatsChannelConfigUncheckedCreateInput>
  }

  /**
   * StatsChannelConfig createMany
   */
  export type StatsChannelConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatsChannelConfigs.
     */
    data: StatsChannelConfigCreateManyInput | StatsChannelConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatsChannelConfig createManyAndReturn
   */
  export type StatsChannelConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsChannelConfig
     */
    select?: StatsChannelConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatsChannelConfig
     */
    omit?: StatsChannelConfigOmit<ExtArgs> | null
    /**
     * The data used to create many StatsChannelConfigs.
     */
    data: StatsChannelConfigCreateManyInput | StatsChannelConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatsChannelConfig update
   */
  export type StatsChannelConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsChannelConfig
     */
    select?: StatsChannelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatsChannelConfig
     */
    omit?: StatsChannelConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a StatsChannelConfig.
     */
    data: XOR<StatsChannelConfigUpdateInput, StatsChannelConfigUncheckedUpdateInput>
    /**
     * Choose, which StatsChannelConfig to update.
     */
    where: StatsChannelConfigWhereUniqueInput
  }

  /**
   * StatsChannelConfig updateMany
   */
  export type StatsChannelConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatsChannelConfigs.
     */
    data: XOR<StatsChannelConfigUpdateManyMutationInput, StatsChannelConfigUncheckedUpdateManyInput>
    /**
     * Filter which StatsChannelConfigs to update
     */
    where?: StatsChannelConfigWhereInput
    /**
     * Limit how many StatsChannelConfigs to update.
     */
    limit?: number
  }

  /**
   * StatsChannelConfig updateManyAndReturn
   */
  export type StatsChannelConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsChannelConfig
     */
    select?: StatsChannelConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatsChannelConfig
     */
    omit?: StatsChannelConfigOmit<ExtArgs> | null
    /**
     * The data used to update StatsChannelConfigs.
     */
    data: XOR<StatsChannelConfigUpdateManyMutationInput, StatsChannelConfigUncheckedUpdateManyInput>
    /**
     * Filter which StatsChannelConfigs to update
     */
    where?: StatsChannelConfigWhereInput
    /**
     * Limit how many StatsChannelConfigs to update.
     */
    limit?: number
  }

  /**
   * StatsChannelConfig upsert
   */
  export type StatsChannelConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsChannelConfig
     */
    select?: StatsChannelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatsChannelConfig
     */
    omit?: StatsChannelConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the StatsChannelConfig to update in case it exists.
     */
    where: StatsChannelConfigWhereUniqueInput
    /**
     * In case the StatsChannelConfig found by the `where` argument doesn't exist, create a new StatsChannelConfig with this data.
     */
    create: XOR<StatsChannelConfigCreateInput, StatsChannelConfigUncheckedCreateInput>
    /**
     * In case the StatsChannelConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatsChannelConfigUpdateInput, StatsChannelConfigUncheckedUpdateInput>
  }

  /**
   * StatsChannelConfig delete
   */
  export type StatsChannelConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsChannelConfig
     */
    select?: StatsChannelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatsChannelConfig
     */
    omit?: StatsChannelConfigOmit<ExtArgs> | null
    /**
     * Filter which StatsChannelConfig to delete.
     */
    where: StatsChannelConfigWhereUniqueInput
  }

  /**
   * StatsChannelConfig deleteMany
   */
  export type StatsChannelConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatsChannelConfigs to delete
     */
    where?: StatsChannelConfigWhereInput
    /**
     * Limit how many StatsChannelConfigs to delete.
     */
    limit?: number
  }

  /**
   * StatsChannelConfig without action
   */
  export type StatsChannelConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsChannelConfig
     */
    select?: StatsChannelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatsChannelConfig
     */
    omit?: StatsChannelConfigOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AutoRoleScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AutoRoleScalarFieldEnum = (typeof AutoRoleScalarFieldEnum)[keyof typeof AutoRoleScalarFieldEnum]


  export const ReactionRoleScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    channelId: 'channelId',
    messageId: 'messageId',
    emoji: 'emoji',
    roleId: 'roleId',
    mode: 'mode',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReactionRoleScalarFieldEnum = (typeof ReactionRoleScalarFieldEnum)[keyof typeof ReactionRoleScalarFieldEnum]


  export const VerificationConfigScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    roleId: 'roleId',
    difficulty: 'difficulty',
    question: 'question',
    answers: 'answers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationConfigScalarFieldEnum = (typeof VerificationConfigScalarFieldEnum)[keyof typeof VerificationConfigScalarFieldEnum]


  export const TicketConfigScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    categoryChannelId: 'categoryChannelId',
    transcriptsChannelId: 'transcriptsChannelId',
    supportRoleIds: 'supportRoleIds',
    maxOpenTickets: 'maxOpenTickets',
    autoCloseTime: 'autoCloseTime',
    welcomeMessage: 'welcomeMessage',
    closeMessage: 'closeMessage',
    enableRatings: 'enableRatings',
    enableTranscripts: 'enableTranscripts',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketConfigScalarFieldEnum = (typeof TicketConfigScalarFieldEnum)[keyof typeof TicketConfigScalarFieldEnum]


  export const TicketCategoryScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    name: 'name',
    emoji: 'emoji',
    description: 'description',
    color: 'color',
    configId: 'configId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketCategoryScalarFieldEnum = (typeof TicketCategoryScalarFieldEnum)[keyof typeof TicketCategoryScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    channelId: 'channelId',
    userId: 'userId',
    username: 'username',
    claimedBy: 'claimedBy',
    status: 'status',
    subject: 'subject',
    categoryId: 'categoryId',
    configId: 'configId',
    closedAt: 'closedAt',
    closedBy: 'closedBy',
    closedReason: 'closedReason',
    transcriptUrl: 'transcriptUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TicketMessageScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    userId: 'userId',
    username: 'username',
    content: 'content',
    attachments: 'attachments',
    isStaff: 'isStaff',
    createdAt: 'createdAt'
  };

  export type TicketMessageScalarFieldEnum = (typeof TicketMessageScalarFieldEnum)[keyof typeof TicketMessageScalarFieldEnum]


  export const TicketRatingScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    rating: 'rating',
    feedback: 'feedback',
    createdAt: 'createdAt'
  };

  export type TicketRatingScalarFieldEnum = (typeof TicketRatingScalarFieldEnum)[keyof typeof TicketRatingScalarFieldEnum]


  export const LevelConfigScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    enabled: 'enabled',
    xpMin: 'xpMin',
    xpMax: 'xpMax',
    xpCooldown: 'xpCooldown',
    levelUpChannelId: 'levelUpChannelId',
    levelUpMessage: 'levelUpMessage',
    ignoredChannelIds: 'ignoredChannelIds',
    ignoredRoleIds: 'ignoredRoleIds',
    stackRoles: 'stackRoles',
    announceInDm: 'announceInDm',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LevelConfigScalarFieldEnum = (typeof LevelConfigScalarFieldEnum)[keyof typeof LevelConfigScalarFieldEnum]


  export const UserLevelScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    userId: 'userId',
    xp: 'xp',
    level: 'level',
    totalMessages: 'totalMessages',
    lastMessageAt: 'lastMessageAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserLevelScalarFieldEnum = (typeof UserLevelScalarFieldEnum)[keyof typeof UserLevelScalarFieldEnum]


  export const LevelRewardScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    level: 'level',
    roleId: 'roleId',
    configId: 'configId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LevelRewardScalarFieldEnum = (typeof LevelRewardScalarFieldEnum)[keyof typeof LevelRewardScalarFieldEnum]


  export const StatsChannelConfigScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    categoryId: 'categoryId',
    totalMembersChannelId: 'totalMembersChannelId',
    humanMembersChannelId: 'humanMembersChannelId',
    botMembersChannelId: 'botMembersChannelId',
    onlineMembersChannelId: 'onlineMembersChannelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StatsChannelConfigScalarFieldEnum = (typeof StatsChannelConfigScalarFieldEnum)[keyof typeof StatsChannelConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RoleMode'
   */
  export type EnumRoleModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleMode'>
    


  /**
   * Reference to a field of type 'RoleMode[]'
   */
  export type ListEnumRoleModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleMode[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AutoRoleWhereInput = {
    AND?: AutoRoleWhereInput | AutoRoleWhereInput[]
    OR?: AutoRoleWhereInput[]
    NOT?: AutoRoleWhereInput | AutoRoleWhereInput[]
    id?: StringFilter<"AutoRole"> | string
    guildId?: StringFilter<"AutoRole"> | string
    roleId?: StringFilter<"AutoRole"> | string
    createdAt?: DateTimeFilter<"AutoRole"> | Date | string
    updatedAt?: DateTimeFilter<"AutoRole"> | Date | string
  }

  export type AutoRoleOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutoRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId_roleId?: AutoRoleGuildIdRoleIdCompoundUniqueInput
    AND?: AutoRoleWhereInput | AutoRoleWhereInput[]
    OR?: AutoRoleWhereInput[]
    NOT?: AutoRoleWhereInput | AutoRoleWhereInput[]
    guildId?: StringFilter<"AutoRole"> | string
    roleId?: StringFilter<"AutoRole"> | string
    createdAt?: DateTimeFilter<"AutoRole"> | Date | string
    updatedAt?: DateTimeFilter<"AutoRole"> | Date | string
  }, "id" | "guildId_roleId">

  export type AutoRoleOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AutoRoleCountOrderByAggregateInput
    _max?: AutoRoleMaxOrderByAggregateInput
    _min?: AutoRoleMinOrderByAggregateInput
  }

  export type AutoRoleScalarWhereWithAggregatesInput = {
    AND?: AutoRoleScalarWhereWithAggregatesInput | AutoRoleScalarWhereWithAggregatesInput[]
    OR?: AutoRoleScalarWhereWithAggregatesInput[]
    NOT?: AutoRoleScalarWhereWithAggregatesInput | AutoRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AutoRole"> | string
    guildId?: StringWithAggregatesFilter<"AutoRole"> | string
    roleId?: StringWithAggregatesFilter<"AutoRole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AutoRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AutoRole"> | Date | string
  }

  export type ReactionRoleWhereInput = {
    AND?: ReactionRoleWhereInput | ReactionRoleWhereInput[]
    OR?: ReactionRoleWhereInput[]
    NOT?: ReactionRoleWhereInput | ReactionRoleWhereInput[]
    id?: StringFilter<"ReactionRole"> | string
    guildId?: StringFilter<"ReactionRole"> | string
    channelId?: StringFilter<"ReactionRole"> | string
    messageId?: StringFilter<"ReactionRole"> | string
    emoji?: StringFilter<"ReactionRole"> | string
    roleId?: StringFilter<"ReactionRole"> | string
    mode?: EnumRoleModeFilter<"ReactionRole"> | $Enums.RoleMode
    description?: StringNullableFilter<"ReactionRole"> | string | null
    createdAt?: DateTimeFilter<"ReactionRole"> | Date | string
    updatedAt?: DateTimeFilter<"ReactionRole"> | Date | string
  }

  export type ReactionRoleOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
    mode?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReactionRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId_emoji?: ReactionRoleMessageIdEmojiCompoundUniqueInput
    AND?: ReactionRoleWhereInput | ReactionRoleWhereInput[]
    OR?: ReactionRoleWhereInput[]
    NOT?: ReactionRoleWhereInput | ReactionRoleWhereInput[]
    guildId?: StringFilter<"ReactionRole"> | string
    channelId?: StringFilter<"ReactionRole"> | string
    messageId?: StringFilter<"ReactionRole"> | string
    emoji?: StringFilter<"ReactionRole"> | string
    roleId?: StringFilter<"ReactionRole"> | string
    mode?: EnumRoleModeFilter<"ReactionRole"> | $Enums.RoleMode
    description?: StringNullableFilter<"ReactionRole"> | string | null
    createdAt?: DateTimeFilter<"ReactionRole"> | Date | string
    updatedAt?: DateTimeFilter<"ReactionRole"> | Date | string
  }, "id" | "messageId_emoji">

  export type ReactionRoleOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
    mode?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReactionRoleCountOrderByAggregateInput
    _max?: ReactionRoleMaxOrderByAggregateInput
    _min?: ReactionRoleMinOrderByAggregateInput
  }

  export type ReactionRoleScalarWhereWithAggregatesInput = {
    AND?: ReactionRoleScalarWhereWithAggregatesInput | ReactionRoleScalarWhereWithAggregatesInput[]
    OR?: ReactionRoleScalarWhereWithAggregatesInput[]
    NOT?: ReactionRoleScalarWhereWithAggregatesInput | ReactionRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReactionRole"> | string
    guildId?: StringWithAggregatesFilter<"ReactionRole"> | string
    channelId?: StringWithAggregatesFilter<"ReactionRole"> | string
    messageId?: StringWithAggregatesFilter<"ReactionRole"> | string
    emoji?: StringWithAggregatesFilter<"ReactionRole"> | string
    roleId?: StringWithAggregatesFilter<"ReactionRole"> | string
    mode?: EnumRoleModeWithAggregatesFilter<"ReactionRole"> | $Enums.RoleMode
    description?: StringNullableWithAggregatesFilter<"ReactionRole"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReactionRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReactionRole"> | Date | string
  }

  export type VerificationConfigWhereInput = {
    AND?: VerificationConfigWhereInput | VerificationConfigWhereInput[]
    OR?: VerificationConfigWhereInput[]
    NOT?: VerificationConfigWhereInput | VerificationConfigWhereInput[]
    id?: StringFilter<"VerificationConfig"> | string
    guildId?: StringFilter<"VerificationConfig"> | string
    roleId?: StringNullableFilter<"VerificationConfig"> | string | null
    difficulty?: StringFilter<"VerificationConfig"> | string
    question?: StringFilter<"VerificationConfig"> | string
    answers?: StringNullableListFilter<"VerificationConfig">
    createdAt?: DateTimeFilter<"VerificationConfig"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationConfig"> | Date | string
  }

  export type VerificationConfigOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    roleId?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId?: string
    AND?: VerificationConfigWhereInput | VerificationConfigWhereInput[]
    OR?: VerificationConfigWhereInput[]
    NOT?: VerificationConfigWhereInput | VerificationConfigWhereInput[]
    roleId?: StringNullableFilter<"VerificationConfig"> | string | null
    difficulty?: StringFilter<"VerificationConfig"> | string
    question?: StringFilter<"VerificationConfig"> | string
    answers?: StringNullableListFilter<"VerificationConfig">
    createdAt?: DateTimeFilter<"VerificationConfig"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationConfig"> | Date | string
  }, "id" | "guildId">

  export type VerificationConfigOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    roleId?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationConfigCountOrderByAggregateInput
    _max?: VerificationConfigMaxOrderByAggregateInput
    _min?: VerificationConfigMinOrderByAggregateInput
  }

  export type VerificationConfigScalarWhereWithAggregatesInput = {
    AND?: VerificationConfigScalarWhereWithAggregatesInput | VerificationConfigScalarWhereWithAggregatesInput[]
    OR?: VerificationConfigScalarWhereWithAggregatesInput[]
    NOT?: VerificationConfigScalarWhereWithAggregatesInput | VerificationConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationConfig"> | string
    guildId?: StringWithAggregatesFilter<"VerificationConfig"> | string
    roleId?: StringNullableWithAggregatesFilter<"VerificationConfig"> | string | null
    difficulty?: StringWithAggregatesFilter<"VerificationConfig"> | string
    question?: StringWithAggregatesFilter<"VerificationConfig"> | string
    answers?: StringNullableListFilter<"VerificationConfig">
    createdAt?: DateTimeWithAggregatesFilter<"VerificationConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VerificationConfig"> | Date | string
  }

  export type TicketConfigWhereInput = {
    AND?: TicketConfigWhereInput | TicketConfigWhereInput[]
    OR?: TicketConfigWhereInput[]
    NOT?: TicketConfigWhereInput | TicketConfigWhereInput[]
    id?: StringFilter<"TicketConfig"> | string
    guildId?: StringFilter<"TicketConfig"> | string
    categoryChannelId?: StringNullableFilter<"TicketConfig"> | string | null
    transcriptsChannelId?: StringNullableFilter<"TicketConfig"> | string | null
    supportRoleIds?: StringNullableListFilter<"TicketConfig">
    maxOpenTickets?: IntFilter<"TicketConfig"> | number
    autoCloseTime?: IntNullableFilter<"TicketConfig"> | number | null
    welcomeMessage?: StringNullableFilter<"TicketConfig"> | string | null
    closeMessage?: StringNullableFilter<"TicketConfig"> | string | null
    enableRatings?: BoolFilter<"TicketConfig"> | boolean
    enableTranscripts?: BoolFilter<"TicketConfig"> | boolean
    createdAt?: DateTimeFilter<"TicketConfig"> | Date | string
    updatedAt?: DateTimeFilter<"TicketConfig"> | Date | string
    categories?: TicketCategoryListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type TicketConfigOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    categoryChannelId?: SortOrderInput | SortOrder
    transcriptsChannelId?: SortOrderInput | SortOrder
    supportRoleIds?: SortOrder
    maxOpenTickets?: SortOrder
    autoCloseTime?: SortOrderInput | SortOrder
    welcomeMessage?: SortOrderInput | SortOrder
    closeMessage?: SortOrderInput | SortOrder
    enableRatings?: SortOrder
    enableTranscripts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: TicketCategoryOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type TicketConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId?: string
    AND?: TicketConfigWhereInput | TicketConfigWhereInput[]
    OR?: TicketConfigWhereInput[]
    NOT?: TicketConfigWhereInput | TicketConfigWhereInput[]
    categoryChannelId?: StringNullableFilter<"TicketConfig"> | string | null
    transcriptsChannelId?: StringNullableFilter<"TicketConfig"> | string | null
    supportRoleIds?: StringNullableListFilter<"TicketConfig">
    maxOpenTickets?: IntFilter<"TicketConfig"> | number
    autoCloseTime?: IntNullableFilter<"TicketConfig"> | number | null
    welcomeMessage?: StringNullableFilter<"TicketConfig"> | string | null
    closeMessage?: StringNullableFilter<"TicketConfig"> | string | null
    enableRatings?: BoolFilter<"TicketConfig"> | boolean
    enableTranscripts?: BoolFilter<"TicketConfig"> | boolean
    createdAt?: DateTimeFilter<"TicketConfig"> | Date | string
    updatedAt?: DateTimeFilter<"TicketConfig"> | Date | string
    categories?: TicketCategoryListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "guildId">

  export type TicketConfigOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    categoryChannelId?: SortOrderInput | SortOrder
    transcriptsChannelId?: SortOrderInput | SortOrder
    supportRoleIds?: SortOrder
    maxOpenTickets?: SortOrder
    autoCloseTime?: SortOrderInput | SortOrder
    welcomeMessage?: SortOrderInput | SortOrder
    closeMessage?: SortOrderInput | SortOrder
    enableRatings?: SortOrder
    enableTranscripts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketConfigCountOrderByAggregateInput
    _avg?: TicketConfigAvgOrderByAggregateInput
    _max?: TicketConfigMaxOrderByAggregateInput
    _min?: TicketConfigMinOrderByAggregateInput
    _sum?: TicketConfigSumOrderByAggregateInput
  }

  export type TicketConfigScalarWhereWithAggregatesInput = {
    AND?: TicketConfigScalarWhereWithAggregatesInput | TicketConfigScalarWhereWithAggregatesInput[]
    OR?: TicketConfigScalarWhereWithAggregatesInput[]
    NOT?: TicketConfigScalarWhereWithAggregatesInput | TicketConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketConfig"> | string
    guildId?: StringWithAggregatesFilter<"TicketConfig"> | string
    categoryChannelId?: StringNullableWithAggregatesFilter<"TicketConfig"> | string | null
    transcriptsChannelId?: StringNullableWithAggregatesFilter<"TicketConfig"> | string | null
    supportRoleIds?: StringNullableListFilter<"TicketConfig">
    maxOpenTickets?: IntWithAggregatesFilter<"TicketConfig"> | number
    autoCloseTime?: IntNullableWithAggregatesFilter<"TicketConfig"> | number | null
    welcomeMessage?: StringNullableWithAggregatesFilter<"TicketConfig"> | string | null
    closeMessage?: StringNullableWithAggregatesFilter<"TicketConfig"> | string | null
    enableRatings?: BoolWithAggregatesFilter<"TicketConfig"> | boolean
    enableTranscripts?: BoolWithAggregatesFilter<"TicketConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TicketConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TicketConfig"> | Date | string
  }

  export type TicketCategoryWhereInput = {
    AND?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    OR?: TicketCategoryWhereInput[]
    NOT?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    id?: StringFilter<"TicketCategory"> | string
    guildId?: StringFilter<"TicketCategory"> | string
    name?: StringFilter<"TicketCategory"> | string
    emoji?: StringNullableFilter<"TicketCategory"> | string | null
    description?: StringNullableFilter<"TicketCategory"> | string | null
    color?: StringFilter<"TicketCategory"> | string
    configId?: StringFilter<"TicketCategory"> | string
    createdAt?: DateTimeFilter<"TicketCategory"> | Date | string
    updatedAt?: DateTimeFilter<"TicketCategory"> | Date | string
    config?: XOR<TicketConfigScalarRelationFilter, TicketConfigWhereInput>
    tickets?: TicketListRelationFilter
  }

  export type TicketCategoryOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    emoji?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrder
    configId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    config?: TicketConfigOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type TicketCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    configId_name?: TicketCategoryConfigIdNameCompoundUniqueInput
    AND?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    OR?: TicketCategoryWhereInput[]
    NOT?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    guildId?: StringFilter<"TicketCategory"> | string
    name?: StringFilter<"TicketCategory"> | string
    emoji?: StringNullableFilter<"TicketCategory"> | string | null
    description?: StringNullableFilter<"TicketCategory"> | string | null
    color?: StringFilter<"TicketCategory"> | string
    configId?: StringFilter<"TicketCategory"> | string
    createdAt?: DateTimeFilter<"TicketCategory"> | Date | string
    updatedAt?: DateTimeFilter<"TicketCategory"> | Date | string
    config?: XOR<TicketConfigScalarRelationFilter, TicketConfigWhereInput>
    tickets?: TicketListRelationFilter
  }, "id" | "configId_name">

  export type TicketCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    emoji?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrder
    configId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCategoryCountOrderByAggregateInput
    _max?: TicketCategoryMaxOrderByAggregateInput
    _min?: TicketCategoryMinOrderByAggregateInput
  }

  export type TicketCategoryScalarWhereWithAggregatesInput = {
    AND?: TicketCategoryScalarWhereWithAggregatesInput | TicketCategoryScalarWhereWithAggregatesInput[]
    OR?: TicketCategoryScalarWhereWithAggregatesInput[]
    NOT?: TicketCategoryScalarWhereWithAggregatesInput | TicketCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketCategory"> | string
    guildId?: StringWithAggregatesFilter<"TicketCategory"> | string
    name?: StringWithAggregatesFilter<"TicketCategory"> | string
    emoji?: StringNullableWithAggregatesFilter<"TicketCategory"> | string | null
    description?: StringNullableWithAggregatesFilter<"TicketCategory"> | string | null
    color?: StringWithAggregatesFilter<"TicketCategory"> | string
    configId?: StringWithAggregatesFilter<"TicketCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TicketCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TicketCategory"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    guildId?: StringFilter<"Ticket"> | string
    channelId?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    username?: StringFilter<"Ticket"> | string
    claimedBy?: StringNullableFilter<"Ticket"> | string | null
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    subject?: StringNullableFilter<"Ticket"> | string | null
    categoryId?: StringNullableFilter<"Ticket"> | string | null
    configId?: StringFilter<"Ticket"> | string
    closedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    closedBy?: StringNullableFilter<"Ticket"> | string | null
    closedReason?: StringNullableFilter<"Ticket"> | string | null
    transcriptUrl?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    category?: XOR<TicketCategoryNullableScalarRelationFilter, TicketCategoryWhereInput> | null
    config?: XOR<TicketConfigScalarRelationFilter, TicketConfigWhereInput>
    messages?: TicketMessageListRelationFilter
    rating?: XOR<TicketRatingNullableScalarRelationFilter, TicketRatingWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    claimedBy?: SortOrderInput | SortOrder
    status?: SortOrder
    subject?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    configId?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    closedBy?: SortOrderInput | SortOrder
    closedReason?: SortOrderInput | SortOrder
    transcriptUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: TicketCategoryOrderByWithRelationInput
    config?: TicketConfigOrderByWithRelationInput
    messages?: TicketMessageOrderByRelationAggregateInput
    rating?: TicketRatingOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    channelId?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    guildId?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    username?: StringFilter<"Ticket"> | string
    claimedBy?: StringNullableFilter<"Ticket"> | string | null
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    subject?: StringNullableFilter<"Ticket"> | string | null
    categoryId?: StringNullableFilter<"Ticket"> | string | null
    configId?: StringFilter<"Ticket"> | string
    closedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    closedBy?: StringNullableFilter<"Ticket"> | string | null
    closedReason?: StringNullableFilter<"Ticket"> | string | null
    transcriptUrl?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    category?: XOR<TicketCategoryNullableScalarRelationFilter, TicketCategoryWhereInput> | null
    config?: XOR<TicketConfigScalarRelationFilter, TicketConfigWhereInput>
    messages?: TicketMessageListRelationFilter
    rating?: XOR<TicketRatingNullableScalarRelationFilter, TicketRatingWhereInput> | null
  }, "id" | "channelId">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    claimedBy?: SortOrderInput | SortOrder
    status?: SortOrder
    subject?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    configId?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    closedBy?: SortOrderInput | SortOrder
    closedReason?: SortOrderInput | SortOrder
    transcriptUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    guildId?: StringWithAggregatesFilter<"Ticket"> | string
    channelId?: StringWithAggregatesFilter<"Ticket"> | string
    userId?: StringWithAggregatesFilter<"Ticket"> | string
    username?: StringWithAggregatesFilter<"Ticket"> | string
    claimedBy?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    subject?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    configId?: StringWithAggregatesFilter<"Ticket"> | string
    closedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    closedBy?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    closedReason?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    transcriptUrl?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type TicketMessageWhereInput = {
    AND?: TicketMessageWhereInput | TicketMessageWhereInput[]
    OR?: TicketMessageWhereInput[]
    NOT?: TicketMessageWhereInput | TicketMessageWhereInput[]
    id?: StringFilter<"TicketMessage"> | string
    ticketId?: StringFilter<"TicketMessage"> | string
    userId?: StringFilter<"TicketMessage"> | string
    username?: StringFilter<"TicketMessage"> | string
    content?: StringFilter<"TicketMessage"> | string
    attachments?: StringNullableListFilter<"TicketMessage">
    isStaff?: BoolFilter<"TicketMessage"> | boolean
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type TicketMessageOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    content?: SortOrder
    attachments?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type TicketMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketMessageWhereInput | TicketMessageWhereInput[]
    OR?: TicketMessageWhereInput[]
    NOT?: TicketMessageWhereInput | TicketMessageWhereInput[]
    ticketId?: StringFilter<"TicketMessage"> | string
    userId?: StringFilter<"TicketMessage"> | string
    username?: StringFilter<"TicketMessage"> | string
    content?: StringFilter<"TicketMessage"> | string
    attachments?: StringNullableListFilter<"TicketMessage">
    isStaff?: BoolFilter<"TicketMessage"> | boolean
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id">

  export type TicketMessageOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    content?: SortOrder
    attachments?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
    _count?: TicketMessageCountOrderByAggregateInput
    _max?: TicketMessageMaxOrderByAggregateInput
    _min?: TicketMessageMinOrderByAggregateInput
  }

  export type TicketMessageScalarWhereWithAggregatesInput = {
    AND?: TicketMessageScalarWhereWithAggregatesInput | TicketMessageScalarWhereWithAggregatesInput[]
    OR?: TicketMessageScalarWhereWithAggregatesInput[]
    NOT?: TicketMessageScalarWhereWithAggregatesInput | TicketMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketMessage"> | string
    ticketId?: StringWithAggregatesFilter<"TicketMessage"> | string
    userId?: StringWithAggregatesFilter<"TicketMessage"> | string
    username?: StringWithAggregatesFilter<"TicketMessage"> | string
    content?: StringWithAggregatesFilter<"TicketMessage"> | string
    attachments?: StringNullableListFilter<"TicketMessage">
    isStaff?: BoolWithAggregatesFilter<"TicketMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TicketMessage"> | Date | string
  }

  export type TicketRatingWhereInput = {
    AND?: TicketRatingWhereInput | TicketRatingWhereInput[]
    OR?: TicketRatingWhereInput[]
    NOT?: TicketRatingWhereInput | TicketRatingWhereInput[]
    id?: StringFilter<"TicketRating"> | string
    ticketId?: StringFilter<"TicketRating"> | string
    rating?: IntFilter<"TicketRating"> | number
    feedback?: StringNullableFilter<"TicketRating"> | string | null
    createdAt?: DateTimeFilter<"TicketRating"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type TicketRatingOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    rating?: SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type TicketRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketId?: string
    AND?: TicketRatingWhereInput | TicketRatingWhereInput[]
    OR?: TicketRatingWhereInput[]
    NOT?: TicketRatingWhereInput | TicketRatingWhereInput[]
    rating?: IntFilter<"TicketRating"> | number
    feedback?: StringNullableFilter<"TicketRating"> | string | null
    createdAt?: DateTimeFilter<"TicketRating"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id" | "ticketId">

  export type TicketRatingOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    rating?: SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TicketRatingCountOrderByAggregateInput
    _avg?: TicketRatingAvgOrderByAggregateInput
    _max?: TicketRatingMaxOrderByAggregateInput
    _min?: TicketRatingMinOrderByAggregateInput
    _sum?: TicketRatingSumOrderByAggregateInput
  }

  export type TicketRatingScalarWhereWithAggregatesInput = {
    AND?: TicketRatingScalarWhereWithAggregatesInput | TicketRatingScalarWhereWithAggregatesInput[]
    OR?: TicketRatingScalarWhereWithAggregatesInput[]
    NOT?: TicketRatingScalarWhereWithAggregatesInput | TicketRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketRating"> | string
    ticketId?: StringWithAggregatesFilter<"TicketRating"> | string
    rating?: IntWithAggregatesFilter<"TicketRating"> | number
    feedback?: StringNullableWithAggregatesFilter<"TicketRating"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TicketRating"> | Date | string
  }

  export type LevelConfigWhereInput = {
    AND?: LevelConfigWhereInput | LevelConfigWhereInput[]
    OR?: LevelConfigWhereInput[]
    NOT?: LevelConfigWhereInput | LevelConfigWhereInput[]
    id?: StringFilter<"LevelConfig"> | string
    guildId?: StringFilter<"LevelConfig"> | string
    enabled?: BoolFilter<"LevelConfig"> | boolean
    xpMin?: IntFilter<"LevelConfig"> | number
    xpMax?: IntFilter<"LevelConfig"> | number
    xpCooldown?: IntFilter<"LevelConfig"> | number
    levelUpChannelId?: StringNullableFilter<"LevelConfig"> | string | null
    levelUpMessage?: StringFilter<"LevelConfig"> | string
    ignoredChannelIds?: StringNullableListFilter<"LevelConfig">
    ignoredRoleIds?: StringNullableListFilter<"LevelConfig">
    stackRoles?: BoolFilter<"LevelConfig"> | boolean
    announceInDm?: BoolFilter<"LevelConfig"> | boolean
    createdAt?: DateTimeFilter<"LevelConfig"> | Date | string
    updatedAt?: DateTimeFilter<"LevelConfig"> | Date | string
    rewards?: LevelRewardListRelationFilter
  }

  export type LevelConfigOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    enabled?: SortOrder
    xpMin?: SortOrder
    xpMax?: SortOrder
    xpCooldown?: SortOrder
    levelUpChannelId?: SortOrderInput | SortOrder
    levelUpMessage?: SortOrder
    ignoredChannelIds?: SortOrder
    ignoredRoleIds?: SortOrder
    stackRoles?: SortOrder
    announceInDm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rewards?: LevelRewardOrderByRelationAggregateInput
  }

  export type LevelConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId?: string
    AND?: LevelConfigWhereInput | LevelConfigWhereInput[]
    OR?: LevelConfigWhereInput[]
    NOT?: LevelConfigWhereInput | LevelConfigWhereInput[]
    enabled?: BoolFilter<"LevelConfig"> | boolean
    xpMin?: IntFilter<"LevelConfig"> | number
    xpMax?: IntFilter<"LevelConfig"> | number
    xpCooldown?: IntFilter<"LevelConfig"> | number
    levelUpChannelId?: StringNullableFilter<"LevelConfig"> | string | null
    levelUpMessage?: StringFilter<"LevelConfig"> | string
    ignoredChannelIds?: StringNullableListFilter<"LevelConfig">
    ignoredRoleIds?: StringNullableListFilter<"LevelConfig">
    stackRoles?: BoolFilter<"LevelConfig"> | boolean
    announceInDm?: BoolFilter<"LevelConfig"> | boolean
    createdAt?: DateTimeFilter<"LevelConfig"> | Date | string
    updatedAt?: DateTimeFilter<"LevelConfig"> | Date | string
    rewards?: LevelRewardListRelationFilter
  }, "id" | "guildId">

  export type LevelConfigOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    enabled?: SortOrder
    xpMin?: SortOrder
    xpMax?: SortOrder
    xpCooldown?: SortOrder
    levelUpChannelId?: SortOrderInput | SortOrder
    levelUpMessage?: SortOrder
    ignoredChannelIds?: SortOrder
    ignoredRoleIds?: SortOrder
    stackRoles?: SortOrder
    announceInDm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LevelConfigCountOrderByAggregateInput
    _avg?: LevelConfigAvgOrderByAggregateInput
    _max?: LevelConfigMaxOrderByAggregateInput
    _min?: LevelConfigMinOrderByAggregateInput
    _sum?: LevelConfigSumOrderByAggregateInput
  }

  export type LevelConfigScalarWhereWithAggregatesInput = {
    AND?: LevelConfigScalarWhereWithAggregatesInput | LevelConfigScalarWhereWithAggregatesInput[]
    OR?: LevelConfigScalarWhereWithAggregatesInput[]
    NOT?: LevelConfigScalarWhereWithAggregatesInput | LevelConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LevelConfig"> | string
    guildId?: StringWithAggregatesFilter<"LevelConfig"> | string
    enabled?: BoolWithAggregatesFilter<"LevelConfig"> | boolean
    xpMin?: IntWithAggregatesFilter<"LevelConfig"> | number
    xpMax?: IntWithAggregatesFilter<"LevelConfig"> | number
    xpCooldown?: IntWithAggregatesFilter<"LevelConfig"> | number
    levelUpChannelId?: StringNullableWithAggregatesFilter<"LevelConfig"> | string | null
    levelUpMessage?: StringWithAggregatesFilter<"LevelConfig"> | string
    ignoredChannelIds?: StringNullableListFilter<"LevelConfig">
    ignoredRoleIds?: StringNullableListFilter<"LevelConfig">
    stackRoles?: BoolWithAggregatesFilter<"LevelConfig"> | boolean
    announceInDm?: BoolWithAggregatesFilter<"LevelConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LevelConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LevelConfig"> | Date | string
  }

  export type UserLevelWhereInput = {
    AND?: UserLevelWhereInput | UserLevelWhereInput[]
    OR?: UserLevelWhereInput[]
    NOT?: UserLevelWhereInput | UserLevelWhereInput[]
    id?: StringFilter<"UserLevel"> | string
    guildId?: StringFilter<"UserLevel"> | string
    userId?: StringFilter<"UserLevel"> | string
    xp?: IntFilter<"UserLevel"> | number
    level?: IntFilter<"UserLevel"> | number
    totalMessages?: IntFilter<"UserLevel"> | number
    lastMessageAt?: DateTimeFilter<"UserLevel"> | Date | string
    createdAt?: DateTimeFilter<"UserLevel"> | Date | string
    updatedAt?: DateTimeFilter<"UserLevel"> | Date | string
  }

  export type UserLevelOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    totalMessages?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId_userId?: UserLevelGuildIdUserIdCompoundUniqueInput
    AND?: UserLevelWhereInput | UserLevelWhereInput[]
    OR?: UserLevelWhereInput[]
    NOT?: UserLevelWhereInput | UserLevelWhereInput[]
    guildId?: StringFilter<"UserLevel"> | string
    userId?: StringFilter<"UserLevel"> | string
    xp?: IntFilter<"UserLevel"> | number
    level?: IntFilter<"UserLevel"> | number
    totalMessages?: IntFilter<"UserLevel"> | number
    lastMessageAt?: DateTimeFilter<"UserLevel"> | Date | string
    createdAt?: DateTimeFilter<"UserLevel"> | Date | string
    updatedAt?: DateTimeFilter<"UserLevel"> | Date | string
  }, "id" | "guildId_userId">

  export type UserLevelOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    totalMessages?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserLevelCountOrderByAggregateInput
    _avg?: UserLevelAvgOrderByAggregateInput
    _max?: UserLevelMaxOrderByAggregateInput
    _min?: UserLevelMinOrderByAggregateInput
    _sum?: UserLevelSumOrderByAggregateInput
  }

  export type UserLevelScalarWhereWithAggregatesInput = {
    AND?: UserLevelScalarWhereWithAggregatesInput | UserLevelScalarWhereWithAggregatesInput[]
    OR?: UserLevelScalarWhereWithAggregatesInput[]
    NOT?: UserLevelScalarWhereWithAggregatesInput | UserLevelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLevel"> | string
    guildId?: StringWithAggregatesFilter<"UserLevel"> | string
    userId?: StringWithAggregatesFilter<"UserLevel"> | string
    xp?: IntWithAggregatesFilter<"UserLevel"> | number
    level?: IntWithAggregatesFilter<"UserLevel"> | number
    totalMessages?: IntWithAggregatesFilter<"UserLevel"> | number
    lastMessageAt?: DateTimeWithAggregatesFilter<"UserLevel"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserLevel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserLevel"> | Date | string
  }

  export type LevelRewardWhereInput = {
    AND?: LevelRewardWhereInput | LevelRewardWhereInput[]
    OR?: LevelRewardWhereInput[]
    NOT?: LevelRewardWhereInput | LevelRewardWhereInput[]
    id?: StringFilter<"LevelReward"> | string
    guildId?: StringFilter<"LevelReward"> | string
    level?: IntFilter<"LevelReward"> | number
    roleId?: StringFilter<"LevelReward"> | string
    configId?: StringFilter<"LevelReward"> | string
    createdAt?: DateTimeFilter<"LevelReward"> | Date | string
    updatedAt?: DateTimeFilter<"LevelReward"> | Date | string
    config?: XOR<LevelConfigScalarRelationFilter, LevelConfigWhereInput>
  }

  export type LevelRewardOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    level?: SortOrder
    roleId?: SortOrder
    configId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    config?: LevelConfigOrderByWithRelationInput
  }

  export type LevelRewardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    configId_level_roleId?: LevelRewardConfigIdLevelRoleIdCompoundUniqueInput
    AND?: LevelRewardWhereInput | LevelRewardWhereInput[]
    OR?: LevelRewardWhereInput[]
    NOT?: LevelRewardWhereInput | LevelRewardWhereInput[]
    guildId?: StringFilter<"LevelReward"> | string
    level?: IntFilter<"LevelReward"> | number
    roleId?: StringFilter<"LevelReward"> | string
    configId?: StringFilter<"LevelReward"> | string
    createdAt?: DateTimeFilter<"LevelReward"> | Date | string
    updatedAt?: DateTimeFilter<"LevelReward"> | Date | string
    config?: XOR<LevelConfigScalarRelationFilter, LevelConfigWhereInput>
  }, "id" | "configId_level_roleId">

  export type LevelRewardOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    level?: SortOrder
    roleId?: SortOrder
    configId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LevelRewardCountOrderByAggregateInput
    _avg?: LevelRewardAvgOrderByAggregateInput
    _max?: LevelRewardMaxOrderByAggregateInput
    _min?: LevelRewardMinOrderByAggregateInput
    _sum?: LevelRewardSumOrderByAggregateInput
  }

  export type LevelRewardScalarWhereWithAggregatesInput = {
    AND?: LevelRewardScalarWhereWithAggregatesInput | LevelRewardScalarWhereWithAggregatesInput[]
    OR?: LevelRewardScalarWhereWithAggregatesInput[]
    NOT?: LevelRewardScalarWhereWithAggregatesInput | LevelRewardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LevelReward"> | string
    guildId?: StringWithAggregatesFilter<"LevelReward"> | string
    level?: IntWithAggregatesFilter<"LevelReward"> | number
    roleId?: StringWithAggregatesFilter<"LevelReward"> | string
    configId?: StringWithAggregatesFilter<"LevelReward"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LevelReward"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LevelReward"> | Date | string
  }

  export type StatsChannelConfigWhereInput = {
    AND?: StatsChannelConfigWhereInput | StatsChannelConfigWhereInput[]
    OR?: StatsChannelConfigWhereInput[]
    NOT?: StatsChannelConfigWhereInput | StatsChannelConfigWhereInput[]
    id?: StringFilter<"StatsChannelConfig"> | string
    guildId?: StringFilter<"StatsChannelConfig"> | string
    categoryId?: StringNullableFilter<"StatsChannelConfig"> | string | null
    totalMembersChannelId?: StringNullableFilter<"StatsChannelConfig"> | string | null
    humanMembersChannelId?: StringNullableFilter<"StatsChannelConfig"> | string | null
    botMembersChannelId?: StringNullableFilter<"StatsChannelConfig"> | string | null
    onlineMembersChannelId?: StringNullableFilter<"StatsChannelConfig"> | string | null
    createdAt?: DateTimeFilter<"StatsChannelConfig"> | Date | string
    updatedAt?: DateTimeFilter<"StatsChannelConfig"> | Date | string
  }

  export type StatsChannelConfigOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    totalMembersChannelId?: SortOrderInput | SortOrder
    humanMembersChannelId?: SortOrderInput | SortOrder
    botMembersChannelId?: SortOrderInput | SortOrder
    onlineMembersChannelId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatsChannelConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId?: string
    AND?: StatsChannelConfigWhereInput | StatsChannelConfigWhereInput[]
    OR?: StatsChannelConfigWhereInput[]
    NOT?: StatsChannelConfigWhereInput | StatsChannelConfigWhereInput[]
    categoryId?: StringNullableFilter<"StatsChannelConfig"> | string | null
    totalMembersChannelId?: StringNullableFilter<"StatsChannelConfig"> | string | null
    humanMembersChannelId?: StringNullableFilter<"StatsChannelConfig"> | string | null
    botMembersChannelId?: StringNullableFilter<"StatsChannelConfig"> | string | null
    onlineMembersChannelId?: StringNullableFilter<"StatsChannelConfig"> | string | null
    createdAt?: DateTimeFilter<"StatsChannelConfig"> | Date | string
    updatedAt?: DateTimeFilter<"StatsChannelConfig"> | Date | string
  }, "id" | "guildId">

  export type StatsChannelConfigOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    totalMembersChannelId?: SortOrderInput | SortOrder
    humanMembersChannelId?: SortOrderInput | SortOrder
    botMembersChannelId?: SortOrderInput | SortOrder
    onlineMembersChannelId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StatsChannelConfigCountOrderByAggregateInput
    _max?: StatsChannelConfigMaxOrderByAggregateInput
    _min?: StatsChannelConfigMinOrderByAggregateInput
  }

  export type StatsChannelConfigScalarWhereWithAggregatesInput = {
    AND?: StatsChannelConfigScalarWhereWithAggregatesInput | StatsChannelConfigScalarWhereWithAggregatesInput[]
    OR?: StatsChannelConfigScalarWhereWithAggregatesInput[]
    NOT?: StatsChannelConfigScalarWhereWithAggregatesInput | StatsChannelConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StatsChannelConfig"> | string
    guildId?: StringWithAggregatesFilter<"StatsChannelConfig"> | string
    categoryId?: StringNullableWithAggregatesFilter<"StatsChannelConfig"> | string | null
    totalMembersChannelId?: StringNullableWithAggregatesFilter<"StatsChannelConfig"> | string | null
    humanMembersChannelId?: StringNullableWithAggregatesFilter<"StatsChannelConfig"> | string | null
    botMembersChannelId?: StringNullableWithAggregatesFilter<"StatsChannelConfig"> | string | null
    onlineMembersChannelId?: StringNullableWithAggregatesFilter<"StatsChannelConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StatsChannelConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StatsChannelConfig"> | Date | string
  }

  export type AutoRoleCreateInput = {
    id?: string
    guildId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutoRoleUncheckedCreateInput = {
    id?: string
    guildId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutoRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutoRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutoRoleCreateManyInput = {
    id?: string
    guildId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutoRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutoRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionRoleCreateInput = {
    id?: string
    guildId: string
    channelId: string
    messageId: string
    emoji: string
    roleId: string
    mode?: $Enums.RoleMode
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionRoleUncheckedCreateInput = {
    id?: string
    guildId: string
    channelId: string
    messageId: string
    emoji: string
    roleId: string
    mode?: $Enums.RoleMode
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    mode?: EnumRoleModeFieldUpdateOperationsInput | $Enums.RoleMode
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    mode?: EnumRoleModeFieldUpdateOperationsInput | $Enums.RoleMode
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionRoleCreateManyInput = {
    id?: string
    guildId: string
    channelId: string
    messageId: string
    emoji: string
    roleId: string
    mode?: $Enums.RoleMode
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    mode?: EnumRoleModeFieldUpdateOperationsInput | $Enums.RoleMode
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    mode?: EnumRoleModeFieldUpdateOperationsInput | $Enums.RoleMode
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationConfigCreateInput = {
    id?: string
    guildId: string
    roleId?: string | null
    difficulty?: string
    question?: string
    answers?: VerificationConfigCreateanswersInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationConfigUncheckedCreateInput = {
    id?: string
    guildId: string
    roleId?: string | null
    difficulty?: string
    question?: string
    answers?: VerificationConfigCreateanswersInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: VerificationConfigUpdateanswersInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: VerificationConfigUpdateanswersInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationConfigCreateManyInput = {
    id?: string
    guildId: string
    roleId?: string | null
    difficulty?: string
    question?: string
    answers?: VerificationConfigCreateanswersInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: VerificationConfigUpdateanswersInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answers?: VerificationConfigUpdateanswersInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketConfigCreateInput = {
    id?: string
    guildId: string
    categoryChannelId?: string | null
    transcriptsChannelId?: string | null
    supportRoleIds?: TicketConfigCreatesupportRoleIdsInput | string[]
    maxOpenTickets?: number
    autoCloseTime?: number | null
    welcomeMessage?: string | null
    closeMessage?: string | null
    enableRatings?: boolean
    enableTranscripts?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: TicketCategoryCreateNestedManyWithoutConfigInput
    tickets?: TicketCreateNestedManyWithoutConfigInput
  }

  export type TicketConfigUncheckedCreateInput = {
    id?: string
    guildId: string
    categoryChannelId?: string | null
    transcriptsChannelId?: string | null
    supportRoleIds?: TicketConfigCreatesupportRoleIdsInput | string[]
    maxOpenTickets?: number
    autoCloseTime?: number | null
    welcomeMessage?: string | null
    closeMessage?: string | null
    enableRatings?: boolean
    enableTranscripts?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: TicketCategoryUncheckedCreateNestedManyWithoutConfigInput
    tickets?: TicketUncheckedCreateNestedManyWithoutConfigInput
  }

  export type TicketConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    categoryChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptsChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    supportRoleIds?: TicketConfigUpdatesupportRoleIdsInput | string[]
    maxOpenTickets?: IntFieldUpdateOperationsInput | number
    autoCloseTime?: NullableIntFieldUpdateOperationsInput | number | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    closeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableRatings?: BoolFieldUpdateOperationsInput | boolean
    enableTranscripts?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: TicketCategoryUpdateManyWithoutConfigNestedInput
    tickets?: TicketUpdateManyWithoutConfigNestedInput
  }

  export type TicketConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    categoryChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptsChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    supportRoleIds?: TicketConfigUpdatesupportRoleIdsInput | string[]
    maxOpenTickets?: IntFieldUpdateOperationsInput | number
    autoCloseTime?: NullableIntFieldUpdateOperationsInput | number | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    closeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableRatings?: BoolFieldUpdateOperationsInput | boolean
    enableTranscripts?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: TicketCategoryUncheckedUpdateManyWithoutConfigNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type TicketConfigCreateManyInput = {
    id?: string
    guildId: string
    categoryChannelId?: string | null
    transcriptsChannelId?: string | null
    supportRoleIds?: TicketConfigCreatesupportRoleIdsInput | string[]
    maxOpenTickets?: number
    autoCloseTime?: number | null
    welcomeMessage?: string | null
    closeMessage?: string | null
    enableRatings?: boolean
    enableTranscripts?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    categoryChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptsChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    supportRoleIds?: TicketConfigUpdatesupportRoleIdsInput | string[]
    maxOpenTickets?: IntFieldUpdateOperationsInput | number
    autoCloseTime?: NullableIntFieldUpdateOperationsInput | number | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    closeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableRatings?: BoolFieldUpdateOperationsInput | boolean
    enableTranscripts?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    categoryChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptsChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    supportRoleIds?: TicketConfigUpdatesupportRoleIdsInput | string[]
    maxOpenTickets?: IntFieldUpdateOperationsInput | number
    autoCloseTime?: NullableIntFieldUpdateOperationsInput | number | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    closeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableRatings?: BoolFieldUpdateOperationsInput | boolean
    enableTranscripts?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCategoryCreateInput = {
    id?: string
    guildId: string
    name: string
    emoji?: string | null
    description?: string | null
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    config: TicketConfigCreateNestedOneWithoutCategoriesInput
    tickets?: TicketCreateNestedManyWithoutCategoryInput
  }

  export type TicketCategoryUncheckedCreateInput = {
    id?: string
    guildId: string
    name: string
    emoji?: string | null
    description?: string | null
    color?: string
    configId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TicketCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: TicketConfigUpdateOneRequiredWithoutCategoriesNestedInput
    tickets?: TicketUpdateManyWithoutCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TicketCategoryCreateManyInput = {
    id?: string
    guildId: string
    name: string
    emoji?: string | null
    description?: string | null
    color?: string
    configId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: TicketCategoryCreateNestedOneWithoutTicketsInput
    config: TicketConfigCreateNestedOneWithoutTicketsInput
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
    rating?: TicketRatingCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    categoryId?: string | null
    configId: string
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
    rating?: TicketRatingUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: TicketCategoryUpdateOneWithoutTicketsNestedInput
    config?: TicketConfigUpdateOneRequiredWithoutTicketsNestedInput
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
    rating?: TicketRatingUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    configId?: StringFieldUpdateOperationsInput | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
    rating?: TicketRatingUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    categoryId?: string | null
    configId: string
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    configId?: StringFieldUpdateOperationsInput | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateInput = {
    id?: string
    userId: string
    username: string
    content: string
    attachments?: TicketMessageCreateattachmentsInput | string[]
    isStaff?: boolean
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutMessagesInput
  }

  export type TicketMessageUncheckedCreateInput = {
    id?: string
    ticketId: string
    userId: string
    username: string
    content: string
    attachments?: TicketMessageCreateattachmentsInput | string[]
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: TicketMessageUpdateattachmentsInput | string[]
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type TicketMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: TicketMessageUpdateattachmentsInput | string[]
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateManyInput = {
    id?: string
    ticketId: string
    userId: string
    username: string
    content: string
    attachments?: TicketMessageCreateattachmentsInput | string[]
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: TicketMessageUpdateattachmentsInput | string[]
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: TicketMessageUpdateattachmentsInput | string[]
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketRatingCreateInput = {
    id?: string
    rating: number
    feedback?: string | null
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutRatingInput
  }

  export type TicketRatingUncheckedCreateInput = {
    id?: string
    ticketId: string
    rating: number
    feedback?: string | null
    createdAt?: Date | string
  }

  export type TicketRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutRatingNestedInput
  }

  export type TicketRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketRatingCreateManyInput = {
    id?: string
    ticketId: string
    rating: number
    feedback?: string | null
    createdAt?: Date | string
  }

  export type TicketRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelConfigCreateInput = {
    id?: string
    guildId: string
    enabled?: boolean
    xpMin?: number
    xpMax?: number
    xpCooldown?: number
    levelUpChannelId?: string | null
    levelUpMessage?: string
    ignoredChannelIds?: LevelConfigCreateignoredChannelIdsInput | string[]
    ignoredRoleIds?: LevelConfigCreateignoredRoleIdsInput | string[]
    stackRoles?: boolean
    announceInDm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rewards?: LevelRewardCreateNestedManyWithoutConfigInput
  }

  export type LevelConfigUncheckedCreateInput = {
    id?: string
    guildId: string
    enabled?: boolean
    xpMin?: number
    xpMax?: number
    xpCooldown?: number
    levelUpChannelId?: string | null
    levelUpMessage?: string
    ignoredChannelIds?: LevelConfigCreateignoredChannelIdsInput | string[]
    ignoredRoleIds?: LevelConfigCreateignoredRoleIdsInput | string[]
    stackRoles?: boolean
    announceInDm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rewards?: LevelRewardUncheckedCreateNestedManyWithoutConfigInput
  }

  export type LevelConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    xpMin?: IntFieldUpdateOperationsInput | number
    xpMax?: IntFieldUpdateOperationsInput | number
    xpCooldown?: IntFieldUpdateOperationsInput | number
    levelUpChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    levelUpMessage?: StringFieldUpdateOperationsInput | string
    ignoredChannelIds?: LevelConfigUpdateignoredChannelIdsInput | string[]
    ignoredRoleIds?: LevelConfigUpdateignoredRoleIdsInput | string[]
    stackRoles?: BoolFieldUpdateOperationsInput | boolean
    announceInDm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewards?: LevelRewardUpdateManyWithoutConfigNestedInput
  }

  export type LevelConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    xpMin?: IntFieldUpdateOperationsInput | number
    xpMax?: IntFieldUpdateOperationsInput | number
    xpCooldown?: IntFieldUpdateOperationsInput | number
    levelUpChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    levelUpMessage?: StringFieldUpdateOperationsInput | string
    ignoredChannelIds?: LevelConfigUpdateignoredChannelIdsInput | string[]
    ignoredRoleIds?: LevelConfigUpdateignoredRoleIdsInput | string[]
    stackRoles?: BoolFieldUpdateOperationsInput | boolean
    announceInDm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewards?: LevelRewardUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type LevelConfigCreateManyInput = {
    id?: string
    guildId: string
    enabled?: boolean
    xpMin?: number
    xpMax?: number
    xpCooldown?: number
    levelUpChannelId?: string | null
    levelUpMessage?: string
    ignoredChannelIds?: LevelConfigCreateignoredChannelIdsInput | string[]
    ignoredRoleIds?: LevelConfigCreateignoredRoleIdsInput | string[]
    stackRoles?: boolean
    announceInDm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    xpMin?: IntFieldUpdateOperationsInput | number
    xpMax?: IntFieldUpdateOperationsInput | number
    xpCooldown?: IntFieldUpdateOperationsInput | number
    levelUpChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    levelUpMessage?: StringFieldUpdateOperationsInput | string
    ignoredChannelIds?: LevelConfigUpdateignoredChannelIdsInput | string[]
    ignoredRoleIds?: LevelConfigUpdateignoredRoleIdsInput | string[]
    stackRoles?: BoolFieldUpdateOperationsInput | boolean
    announceInDm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    xpMin?: IntFieldUpdateOperationsInput | number
    xpMax?: IntFieldUpdateOperationsInput | number
    xpCooldown?: IntFieldUpdateOperationsInput | number
    levelUpChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    levelUpMessage?: StringFieldUpdateOperationsInput | string
    ignoredChannelIds?: LevelConfigUpdateignoredChannelIdsInput | string[]
    ignoredRoleIds?: LevelConfigUpdateignoredRoleIdsInput | string[]
    stackRoles?: BoolFieldUpdateOperationsInput | boolean
    announceInDm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLevelCreateInput = {
    id?: string
    guildId: string
    userId: string
    xp?: number
    level?: number
    totalMessages?: number
    lastMessageAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLevelUncheckedCreateInput = {
    id?: string
    guildId: string
    userId: string
    xp?: number
    level?: number
    totalMessages?: number
    lastMessageAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLevelCreateManyInput = {
    id?: string
    guildId: string
    userId: string
    xp?: number
    level?: number
    totalMessages?: number
    lastMessageAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    totalMessages?: IntFieldUpdateOperationsInput | number
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelRewardCreateInput = {
    id?: string
    guildId: string
    level: number
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    config: LevelConfigCreateNestedOneWithoutRewardsInput
  }

  export type LevelRewardUncheckedCreateInput = {
    id?: string
    guildId: string
    level: number
    roleId: string
    configId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelRewardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: LevelConfigUpdateOneRequiredWithoutRewardsNestedInput
  }

  export type LevelRewardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    roleId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelRewardCreateManyInput = {
    id?: string
    guildId: string
    level: number
    roleId: string
    configId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelRewardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelRewardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    roleId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatsChannelConfigCreateInput = {
    id?: string
    guildId: string
    categoryId?: string | null
    totalMembersChannelId?: string | null
    humanMembersChannelId?: string | null
    botMembersChannelId?: string | null
    onlineMembersChannelId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatsChannelConfigUncheckedCreateInput = {
    id?: string
    guildId: string
    categoryId?: string | null
    totalMembersChannelId?: string | null
    humanMembersChannelId?: string | null
    botMembersChannelId?: string | null
    onlineMembersChannelId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatsChannelConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    totalMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    humanMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    botMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    onlineMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatsChannelConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    totalMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    humanMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    botMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    onlineMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatsChannelConfigCreateManyInput = {
    id?: string
    guildId: string
    categoryId?: string | null
    totalMembersChannelId?: string | null
    humanMembersChannelId?: string | null
    botMembersChannelId?: string | null
    onlineMembersChannelId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatsChannelConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    totalMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    humanMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    botMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    onlineMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatsChannelConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    totalMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    humanMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    botMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    onlineMembersChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AutoRoleGuildIdRoleIdCompoundUniqueInput = {
    guildId: string
    roleId: string
  }

  export type AutoRoleCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutoRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutoRoleMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleModeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleMode | EnumRoleModeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleMode[] | ListEnumRoleModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleMode[] | ListEnumRoleModeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleModeFilter<$PrismaModel> | $Enums.RoleMode
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReactionRoleMessageIdEmojiCompoundUniqueInput = {
    messageId: string
    emoji: string
  }

  export type ReactionRoleCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
    mode?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReactionRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
    mode?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReactionRoleMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
    mode?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleMode | EnumRoleModeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleMode[] | ListEnumRoleModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleMode[] | ListEnumRoleModeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleModeWithAggregatesFilter<$PrismaModel> | $Enums.RoleMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleModeFilter<$PrismaModel>
    _max?: NestedEnumRoleModeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type VerificationConfigCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    roleId?: SortOrder
    difficulty?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    roleId?: SortOrder
    difficulty?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationConfigMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    roleId?: SortOrder
    difficulty?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TicketCategoryListRelationFilter = {
    every?: TicketCategoryWhereInput
    some?: TicketCategoryWhereInput
    none?: TicketCategoryWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketConfigCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    categoryChannelId?: SortOrder
    transcriptsChannelId?: SortOrder
    supportRoleIds?: SortOrder
    maxOpenTickets?: SortOrder
    autoCloseTime?: SortOrder
    welcomeMessage?: SortOrder
    closeMessage?: SortOrder
    enableRatings?: SortOrder
    enableTranscripts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketConfigAvgOrderByAggregateInput = {
    maxOpenTickets?: SortOrder
    autoCloseTime?: SortOrder
  }

  export type TicketConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    categoryChannelId?: SortOrder
    transcriptsChannelId?: SortOrder
    maxOpenTickets?: SortOrder
    autoCloseTime?: SortOrder
    welcomeMessage?: SortOrder
    closeMessage?: SortOrder
    enableRatings?: SortOrder
    enableTranscripts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketConfigMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    categoryChannelId?: SortOrder
    transcriptsChannelId?: SortOrder
    maxOpenTickets?: SortOrder
    autoCloseTime?: SortOrder
    welcomeMessage?: SortOrder
    closeMessage?: SortOrder
    enableRatings?: SortOrder
    enableTranscripts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketConfigSumOrderByAggregateInput = {
    maxOpenTickets?: SortOrder
    autoCloseTime?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TicketConfigScalarRelationFilter = {
    is?: TicketConfigWhereInput
    isNot?: TicketConfigWhereInput
  }

  export type TicketCategoryConfigIdNameCompoundUniqueInput = {
    configId: string
    name: string
  }

  export type TicketCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    description?: SortOrder
    color?: SortOrder
    configId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    description?: SortOrder
    color?: SortOrder
    configId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    description?: SortOrder
    color?: SortOrder
    configId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TicketCategoryNullableScalarRelationFilter = {
    is?: TicketCategoryWhereInput | null
    isNot?: TicketCategoryWhereInput | null
  }

  export type TicketMessageListRelationFilter = {
    every?: TicketMessageWhereInput
    some?: TicketMessageWhereInput
    none?: TicketMessageWhereInput
  }

  export type TicketRatingNullableScalarRelationFilter = {
    is?: TicketRatingWhereInput | null
    isNot?: TicketRatingWhereInput | null
  }

  export type TicketMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    claimedBy?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    categoryId?: SortOrder
    configId?: SortOrder
    closedAt?: SortOrder
    closedBy?: SortOrder
    closedReason?: SortOrder
    transcriptUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    claimedBy?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    categoryId?: SortOrder
    configId?: SortOrder
    closedAt?: SortOrder
    closedBy?: SortOrder
    closedReason?: SortOrder
    transcriptUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    claimedBy?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    categoryId?: SortOrder
    configId?: SortOrder
    closedAt?: SortOrder
    closedBy?: SortOrder
    closedReason?: SortOrder
    transcriptUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type TicketMessageCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    content?: SortOrder
    attachments?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    content?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    content?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketRatingCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketRatingAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type TicketRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketRatingMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketRatingSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type LevelRewardListRelationFilter = {
    every?: LevelRewardWhereInput
    some?: LevelRewardWhereInput
    none?: LevelRewardWhereInput
  }

  export type LevelRewardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LevelConfigCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    enabled?: SortOrder
    xpMin?: SortOrder
    xpMax?: SortOrder
    xpCooldown?: SortOrder
    levelUpChannelId?: SortOrder
    levelUpMessage?: SortOrder
    ignoredChannelIds?: SortOrder
    ignoredRoleIds?: SortOrder
    stackRoles?: SortOrder
    announceInDm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelConfigAvgOrderByAggregateInput = {
    xpMin?: SortOrder
    xpMax?: SortOrder
    xpCooldown?: SortOrder
  }

  export type LevelConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    enabled?: SortOrder
    xpMin?: SortOrder
    xpMax?: SortOrder
    xpCooldown?: SortOrder
    levelUpChannelId?: SortOrder
    levelUpMessage?: SortOrder
    stackRoles?: SortOrder
    announceInDm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelConfigMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    enabled?: SortOrder
    xpMin?: SortOrder
    xpMax?: SortOrder
    xpCooldown?: SortOrder
    levelUpChannelId?: SortOrder
    levelUpMessage?: SortOrder
    stackRoles?: SortOrder
    announceInDm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelConfigSumOrderByAggregateInput = {
    xpMin?: SortOrder
    xpMax?: SortOrder
    xpCooldown?: SortOrder
  }

  export type UserLevelGuildIdUserIdCompoundUniqueInput = {
    guildId: string
    userId: string
  }

  export type UserLevelCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    totalMessages?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLevelAvgOrderByAggregateInput = {
    xp?: SortOrder
    level?: SortOrder
    totalMessages?: SortOrder
  }

  export type UserLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    totalMessages?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLevelMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    totalMessages?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLevelSumOrderByAggregateInput = {
    xp?: SortOrder
    level?: SortOrder
    totalMessages?: SortOrder
  }

  export type LevelConfigScalarRelationFilter = {
    is?: LevelConfigWhereInput
    isNot?: LevelConfigWhereInput
  }

  export type LevelRewardConfigIdLevelRoleIdCompoundUniqueInput = {
    configId: string
    level: number
    roleId: string
  }

  export type LevelRewardCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    level?: SortOrder
    roleId?: SortOrder
    configId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelRewardAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type LevelRewardMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    level?: SortOrder
    roleId?: SortOrder
    configId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelRewardMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    level?: SortOrder
    roleId?: SortOrder
    configId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelRewardSumOrderByAggregateInput = {
    level?: SortOrder
  }

  export type StatsChannelConfigCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    categoryId?: SortOrder
    totalMembersChannelId?: SortOrder
    humanMembersChannelId?: SortOrder
    botMembersChannelId?: SortOrder
    onlineMembersChannelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatsChannelConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    categoryId?: SortOrder
    totalMembersChannelId?: SortOrder
    humanMembersChannelId?: SortOrder
    botMembersChannelId?: SortOrder
    onlineMembersChannelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatsChannelConfigMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    categoryId?: SortOrder
    totalMembersChannelId?: SortOrder
    humanMembersChannelId?: SortOrder
    botMembersChannelId?: SortOrder
    onlineMembersChannelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleModeFieldUpdateOperationsInput = {
    set?: $Enums.RoleMode
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VerificationConfigCreateanswersInput = {
    set: string[]
  }

  export type VerificationConfigUpdateanswersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TicketConfigCreatesupportRoleIdsInput = {
    set: string[]
  }

  export type TicketCategoryCreateNestedManyWithoutConfigInput = {
    create?: XOR<TicketCategoryCreateWithoutConfigInput, TicketCategoryUncheckedCreateWithoutConfigInput> | TicketCategoryCreateWithoutConfigInput[] | TicketCategoryUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutConfigInput | TicketCategoryCreateOrConnectWithoutConfigInput[]
    createMany?: TicketCategoryCreateManyConfigInputEnvelope
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutConfigInput = {
    create?: XOR<TicketCreateWithoutConfigInput, TicketUncheckedCreateWithoutConfigInput> | TicketCreateWithoutConfigInput[] | TicketUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutConfigInput | TicketCreateOrConnectWithoutConfigInput[]
    createMany?: TicketCreateManyConfigInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketCategoryUncheckedCreateNestedManyWithoutConfigInput = {
    create?: XOR<TicketCategoryCreateWithoutConfigInput, TicketCategoryUncheckedCreateWithoutConfigInput> | TicketCategoryCreateWithoutConfigInput[] | TicketCategoryUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutConfigInput | TicketCategoryCreateOrConnectWithoutConfigInput[]
    createMany?: TicketCategoryCreateManyConfigInputEnvelope
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutConfigInput = {
    create?: XOR<TicketCreateWithoutConfigInput, TicketUncheckedCreateWithoutConfigInput> | TicketCreateWithoutConfigInput[] | TicketUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutConfigInput | TicketCreateOrConnectWithoutConfigInput[]
    createMany?: TicketCreateManyConfigInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketConfigUpdatesupportRoleIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TicketCategoryUpdateManyWithoutConfigNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutConfigInput, TicketCategoryUncheckedCreateWithoutConfigInput> | TicketCategoryCreateWithoutConfigInput[] | TicketCategoryUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutConfigInput | TicketCategoryCreateOrConnectWithoutConfigInput[]
    upsert?: TicketCategoryUpsertWithWhereUniqueWithoutConfigInput | TicketCategoryUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: TicketCategoryCreateManyConfigInputEnvelope
    set?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    disconnect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    delete?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    update?: TicketCategoryUpdateWithWhereUniqueWithoutConfigInput | TicketCategoryUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: TicketCategoryUpdateManyWithWhereWithoutConfigInput | TicketCategoryUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutConfigNestedInput = {
    create?: XOR<TicketCreateWithoutConfigInput, TicketUncheckedCreateWithoutConfigInput> | TicketCreateWithoutConfigInput[] | TicketUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutConfigInput | TicketCreateOrConnectWithoutConfigInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutConfigInput | TicketUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: TicketCreateManyConfigInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutConfigInput | TicketUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutConfigInput | TicketUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCategoryUncheckedUpdateManyWithoutConfigNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutConfigInput, TicketCategoryUncheckedCreateWithoutConfigInput> | TicketCategoryCreateWithoutConfigInput[] | TicketCategoryUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutConfigInput | TicketCategoryCreateOrConnectWithoutConfigInput[]
    upsert?: TicketCategoryUpsertWithWhereUniqueWithoutConfigInput | TicketCategoryUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: TicketCategoryCreateManyConfigInputEnvelope
    set?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    disconnect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    delete?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    update?: TicketCategoryUpdateWithWhereUniqueWithoutConfigInput | TicketCategoryUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: TicketCategoryUpdateManyWithWhereWithoutConfigInput | TicketCategoryUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutConfigNestedInput = {
    create?: XOR<TicketCreateWithoutConfigInput, TicketUncheckedCreateWithoutConfigInput> | TicketCreateWithoutConfigInput[] | TicketUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutConfigInput | TicketCreateOrConnectWithoutConfigInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutConfigInput | TicketUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: TicketCreateManyConfigInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutConfigInput | TicketUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutConfigInput | TicketUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketConfigCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<TicketConfigCreateWithoutCategoriesInput, TicketConfigUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TicketConfigCreateOrConnectWithoutCategoriesInput
    connect?: TicketConfigWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput> | TicketCreateWithoutCategoryInput[] | TicketUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCategoryInput | TicketCreateOrConnectWithoutCategoryInput[]
    createMany?: TicketCreateManyCategoryInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput> | TicketCreateWithoutCategoryInput[] | TicketUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCategoryInput | TicketCreateOrConnectWithoutCategoryInput[]
    createMany?: TicketCreateManyCategoryInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketConfigUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<TicketConfigCreateWithoutCategoriesInput, TicketConfigUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TicketConfigCreateOrConnectWithoutCategoriesInput
    upsert?: TicketConfigUpsertWithoutCategoriesInput
    connect?: TicketConfigWhereUniqueInput
    update?: XOR<XOR<TicketConfigUpdateToOneWithWhereWithoutCategoriesInput, TicketConfigUpdateWithoutCategoriesInput>, TicketConfigUncheckedUpdateWithoutCategoriesInput>
  }

  export type TicketUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput> | TicketCreateWithoutCategoryInput[] | TicketUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCategoryInput | TicketCreateOrConnectWithoutCategoryInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCategoryInput | TicketUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TicketCreateManyCategoryInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCategoryInput | TicketUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCategoryInput | TicketUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput> | TicketCreateWithoutCategoryInput[] | TicketUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCategoryInput | TicketCreateOrConnectWithoutCategoryInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCategoryInput | TicketUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TicketCreateManyCategoryInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCategoryInput | TicketUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCategoryInput | TicketUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCategoryCreateNestedOneWithoutTicketsInput = {
    create?: XOR<TicketCategoryCreateWithoutTicketsInput, TicketCategoryUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTicketsInput
    connect?: TicketCategoryWhereUniqueInput
  }

  export type TicketConfigCreateNestedOneWithoutTicketsInput = {
    create?: XOR<TicketConfigCreateWithoutTicketsInput, TicketConfigUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketConfigCreateOrConnectWithoutTicketsInput
    connect?: TicketConfigWhereUniqueInput
  }

  export type TicketMessageCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
  }

  export type TicketRatingCreateNestedOneWithoutTicketInput = {
    create?: XOR<TicketRatingCreateWithoutTicketInput, TicketRatingUncheckedCreateWithoutTicketInput>
    connectOrCreate?: TicketRatingCreateOrConnectWithoutTicketInput
    connect?: TicketRatingWhereUniqueInput
  }

  export type TicketMessageUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
  }

  export type TicketRatingUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<TicketRatingCreateWithoutTicketInput, TicketRatingUncheckedCreateWithoutTicketInput>
    connectOrCreate?: TicketRatingCreateOrConnectWithoutTicketInput
    connect?: TicketRatingWhereUniqueInput
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TicketCategoryUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutTicketsInput, TicketCategoryUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTicketsInput
    upsert?: TicketCategoryUpsertWithoutTicketsInput
    disconnect?: TicketCategoryWhereInput | boolean
    delete?: TicketCategoryWhereInput | boolean
    connect?: TicketCategoryWhereUniqueInput
    update?: XOR<XOR<TicketCategoryUpdateToOneWithWhereWithoutTicketsInput, TicketCategoryUpdateWithoutTicketsInput>, TicketCategoryUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketConfigUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<TicketConfigCreateWithoutTicketsInput, TicketConfigUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketConfigCreateOrConnectWithoutTicketsInput
    upsert?: TicketConfigUpsertWithoutTicketsInput
    connect?: TicketConfigWhereUniqueInput
    update?: XOR<XOR<TicketConfigUpdateToOneWithWhereWithoutTicketsInput, TicketConfigUpdateWithoutTicketsInput>, TicketConfigUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketMessageUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketMessageUpsertWithWhereUniqueWithoutTicketInput | TicketMessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    set?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    disconnect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    delete?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    update?: TicketMessageUpdateWithWhereUniqueWithoutTicketInput | TicketMessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketMessageUpdateManyWithWhereWithoutTicketInput | TicketMessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
  }

  export type TicketRatingUpdateOneWithoutTicketNestedInput = {
    create?: XOR<TicketRatingCreateWithoutTicketInput, TicketRatingUncheckedCreateWithoutTicketInput>
    connectOrCreate?: TicketRatingCreateOrConnectWithoutTicketInput
    upsert?: TicketRatingUpsertWithoutTicketInput
    disconnect?: TicketRatingWhereInput | boolean
    delete?: TicketRatingWhereInput | boolean
    connect?: TicketRatingWhereUniqueInput
    update?: XOR<XOR<TicketRatingUpdateToOneWithWhereWithoutTicketInput, TicketRatingUpdateWithoutTicketInput>, TicketRatingUncheckedUpdateWithoutTicketInput>
  }

  export type TicketMessageUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketMessageUpsertWithWhereUniqueWithoutTicketInput | TicketMessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    set?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    disconnect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    delete?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    update?: TicketMessageUpdateWithWhereUniqueWithoutTicketInput | TicketMessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketMessageUpdateManyWithWhereWithoutTicketInput | TicketMessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
  }

  export type TicketRatingUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<TicketRatingCreateWithoutTicketInput, TicketRatingUncheckedCreateWithoutTicketInput>
    connectOrCreate?: TicketRatingCreateOrConnectWithoutTicketInput
    upsert?: TicketRatingUpsertWithoutTicketInput
    disconnect?: TicketRatingWhereInput | boolean
    delete?: TicketRatingWhereInput | boolean
    connect?: TicketRatingWhereUniqueInput
    update?: XOR<XOR<TicketRatingUpdateToOneWithWhereWithoutTicketInput, TicketRatingUpdateWithoutTicketInput>, TicketRatingUncheckedUpdateWithoutTicketInput>
  }

  export type TicketMessageCreateattachmentsInput = {
    set: string[]
  }

  export type TicketCreateNestedOneWithoutMessagesInput = {
    create?: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutMessagesInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketMessageUpdateattachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TicketUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutMessagesInput
    upsert?: TicketUpsertWithoutMessagesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutMessagesInput, TicketUpdateWithoutMessagesInput>, TicketUncheckedUpdateWithoutMessagesInput>
  }

  export type TicketCreateNestedOneWithoutRatingInput = {
    create?: XOR<TicketCreateWithoutRatingInput, TicketUncheckedCreateWithoutRatingInput>
    connectOrCreate?: TicketCreateOrConnectWithoutRatingInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutRatingNestedInput = {
    create?: XOR<TicketCreateWithoutRatingInput, TicketUncheckedCreateWithoutRatingInput>
    connectOrCreate?: TicketCreateOrConnectWithoutRatingInput
    upsert?: TicketUpsertWithoutRatingInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutRatingInput, TicketUpdateWithoutRatingInput>, TicketUncheckedUpdateWithoutRatingInput>
  }

  export type LevelConfigCreateignoredChannelIdsInput = {
    set: string[]
  }

  export type LevelConfigCreateignoredRoleIdsInput = {
    set: string[]
  }

  export type LevelRewardCreateNestedManyWithoutConfigInput = {
    create?: XOR<LevelRewardCreateWithoutConfigInput, LevelRewardUncheckedCreateWithoutConfigInput> | LevelRewardCreateWithoutConfigInput[] | LevelRewardUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: LevelRewardCreateOrConnectWithoutConfigInput | LevelRewardCreateOrConnectWithoutConfigInput[]
    createMany?: LevelRewardCreateManyConfigInputEnvelope
    connect?: LevelRewardWhereUniqueInput | LevelRewardWhereUniqueInput[]
  }

  export type LevelRewardUncheckedCreateNestedManyWithoutConfigInput = {
    create?: XOR<LevelRewardCreateWithoutConfigInput, LevelRewardUncheckedCreateWithoutConfigInput> | LevelRewardCreateWithoutConfigInput[] | LevelRewardUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: LevelRewardCreateOrConnectWithoutConfigInput | LevelRewardCreateOrConnectWithoutConfigInput[]
    createMany?: LevelRewardCreateManyConfigInputEnvelope
    connect?: LevelRewardWhereUniqueInput | LevelRewardWhereUniqueInput[]
  }

  export type LevelConfigUpdateignoredChannelIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LevelConfigUpdateignoredRoleIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LevelRewardUpdateManyWithoutConfigNestedInput = {
    create?: XOR<LevelRewardCreateWithoutConfigInput, LevelRewardUncheckedCreateWithoutConfigInput> | LevelRewardCreateWithoutConfigInput[] | LevelRewardUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: LevelRewardCreateOrConnectWithoutConfigInput | LevelRewardCreateOrConnectWithoutConfigInput[]
    upsert?: LevelRewardUpsertWithWhereUniqueWithoutConfigInput | LevelRewardUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: LevelRewardCreateManyConfigInputEnvelope
    set?: LevelRewardWhereUniqueInput | LevelRewardWhereUniqueInput[]
    disconnect?: LevelRewardWhereUniqueInput | LevelRewardWhereUniqueInput[]
    delete?: LevelRewardWhereUniqueInput | LevelRewardWhereUniqueInput[]
    connect?: LevelRewardWhereUniqueInput | LevelRewardWhereUniqueInput[]
    update?: LevelRewardUpdateWithWhereUniqueWithoutConfigInput | LevelRewardUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: LevelRewardUpdateManyWithWhereWithoutConfigInput | LevelRewardUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: LevelRewardScalarWhereInput | LevelRewardScalarWhereInput[]
  }

  export type LevelRewardUncheckedUpdateManyWithoutConfigNestedInput = {
    create?: XOR<LevelRewardCreateWithoutConfigInput, LevelRewardUncheckedCreateWithoutConfigInput> | LevelRewardCreateWithoutConfigInput[] | LevelRewardUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: LevelRewardCreateOrConnectWithoutConfigInput | LevelRewardCreateOrConnectWithoutConfigInput[]
    upsert?: LevelRewardUpsertWithWhereUniqueWithoutConfigInput | LevelRewardUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: LevelRewardCreateManyConfigInputEnvelope
    set?: LevelRewardWhereUniqueInput | LevelRewardWhereUniqueInput[]
    disconnect?: LevelRewardWhereUniqueInput | LevelRewardWhereUniqueInput[]
    delete?: LevelRewardWhereUniqueInput | LevelRewardWhereUniqueInput[]
    connect?: LevelRewardWhereUniqueInput | LevelRewardWhereUniqueInput[]
    update?: LevelRewardUpdateWithWhereUniqueWithoutConfigInput | LevelRewardUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: LevelRewardUpdateManyWithWhereWithoutConfigInput | LevelRewardUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: LevelRewardScalarWhereInput | LevelRewardScalarWhereInput[]
  }

  export type LevelConfigCreateNestedOneWithoutRewardsInput = {
    create?: XOR<LevelConfigCreateWithoutRewardsInput, LevelConfigUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: LevelConfigCreateOrConnectWithoutRewardsInput
    connect?: LevelConfigWhereUniqueInput
  }

  export type LevelConfigUpdateOneRequiredWithoutRewardsNestedInput = {
    create?: XOR<LevelConfigCreateWithoutRewardsInput, LevelConfigUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: LevelConfigCreateOrConnectWithoutRewardsInput
    upsert?: LevelConfigUpsertWithoutRewardsInput
    connect?: LevelConfigWhereUniqueInput
    update?: XOR<XOR<LevelConfigUpdateToOneWithWhereWithoutRewardsInput, LevelConfigUpdateWithoutRewardsInput>, LevelConfigUncheckedUpdateWithoutRewardsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleModeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleMode | EnumRoleModeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleMode[] | ListEnumRoleModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleMode[] | ListEnumRoleModeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleModeFilter<$PrismaModel> | $Enums.RoleMode
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleMode | EnumRoleModeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleMode[] | ListEnumRoleModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleMode[] | ListEnumRoleModeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleModeWithAggregatesFilter<$PrismaModel> | $Enums.RoleMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleModeFilter<$PrismaModel>
    _max?: NestedEnumRoleModeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TicketCategoryCreateWithoutConfigInput = {
    id?: string
    guildId: string
    name: string
    emoji?: string | null
    description?: string | null
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutCategoryInput
  }

  export type TicketCategoryUncheckedCreateWithoutConfigInput = {
    id?: string
    guildId: string
    name: string
    emoji?: string | null
    description?: string | null
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TicketCategoryCreateOrConnectWithoutConfigInput = {
    where: TicketCategoryWhereUniqueInput
    create: XOR<TicketCategoryCreateWithoutConfigInput, TicketCategoryUncheckedCreateWithoutConfigInput>
  }

  export type TicketCategoryCreateManyConfigInputEnvelope = {
    data: TicketCategoryCreateManyConfigInput | TicketCategoryCreateManyConfigInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutConfigInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: TicketCategoryCreateNestedOneWithoutTicketsInput
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
    rating?: TicketRatingCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutConfigInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    categoryId?: string | null
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
    rating?: TicketRatingUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutConfigInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutConfigInput, TicketUncheckedCreateWithoutConfigInput>
  }

  export type TicketCreateManyConfigInputEnvelope = {
    data: TicketCreateManyConfigInput | TicketCreateManyConfigInput[]
    skipDuplicates?: boolean
  }

  export type TicketCategoryUpsertWithWhereUniqueWithoutConfigInput = {
    where: TicketCategoryWhereUniqueInput
    update: XOR<TicketCategoryUpdateWithoutConfigInput, TicketCategoryUncheckedUpdateWithoutConfigInput>
    create: XOR<TicketCategoryCreateWithoutConfigInput, TicketCategoryUncheckedCreateWithoutConfigInput>
  }

  export type TicketCategoryUpdateWithWhereUniqueWithoutConfigInput = {
    where: TicketCategoryWhereUniqueInput
    data: XOR<TicketCategoryUpdateWithoutConfigInput, TicketCategoryUncheckedUpdateWithoutConfigInput>
  }

  export type TicketCategoryUpdateManyWithWhereWithoutConfigInput = {
    where: TicketCategoryScalarWhereInput
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyWithoutConfigInput>
  }

  export type TicketCategoryScalarWhereInput = {
    AND?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
    OR?: TicketCategoryScalarWhereInput[]
    NOT?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
    id?: StringFilter<"TicketCategory"> | string
    guildId?: StringFilter<"TicketCategory"> | string
    name?: StringFilter<"TicketCategory"> | string
    emoji?: StringNullableFilter<"TicketCategory"> | string | null
    description?: StringNullableFilter<"TicketCategory"> | string | null
    color?: StringFilter<"TicketCategory"> | string
    configId?: StringFilter<"TicketCategory"> | string
    createdAt?: DateTimeFilter<"TicketCategory"> | Date | string
    updatedAt?: DateTimeFilter<"TicketCategory"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutConfigInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutConfigInput, TicketUncheckedUpdateWithoutConfigInput>
    create: XOR<TicketCreateWithoutConfigInput, TicketUncheckedCreateWithoutConfigInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutConfigInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutConfigInput, TicketUncheckedUpdateWithoutConfigInput>
  }

  export type TicketUpdateManyWithWhereWithoutConfigInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutConfigInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    guildId?: StringFilter<"Ticket"> | string
    channelId?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    username?: StringFilter<"Ticket"> | string
    claimedBy?: StringNullableFilter<"Ticket"> | string | null
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    subject?: StringNullableFilter<"Ticket"> | string | null
    categoryId?: StringNullableFilter<"Ticket"> | string | null
    configId?: StringFilter<"Ticket"> | string
    closedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    closedBy?: StringNullableFilter<"Ticket"> | string | null
    closedReason?: StringNullableFilter<"Ticket"> | string | null
    transcriptUrl?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type TicketConfigCreateWithoutCategoriesInput = {
    id?: string
    guildId: string
    categoryChannelId?: string | null
    transcriptsChannelId?: string | null
    supportRoleIds?: TicketConfigCreatesupportRoleIdsInput | string[]
    maxOpenTickets?: number
    autoCloseTime?: number | null
    welcomeMessage?: string | null
    closeMessage?: string | null
    enableRatings?: boolean
    enableTranscripts?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutConfigInput
  }

  export type TicketConfigUncheckedCreateWithoutCategoriesInput = {
    id?: string
    guildId: string
    categoryChannelId?: string | null
    transcriptsChannelId?: string | null
    supportRoleIds?: TicketConfigCreatesupportRoleIdsInput | string[]
    maxOpenTickets?: number
    autoCloseTime?: number | null
    welcomeMessage?: string | null
    closeMessage?: string | null
    enableRatings?: boolean
    enableTranscripts?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutConfigInput
  }

  export type TicketConfigCreateOrConnectWithoutCategoriesInput = {
    where: TicketConfigWhereUniqueInput
    create: XOR<TicketConfigCreateWithoutCategoriesInput, TicketConfigUncheckedCreateWithoutCategoriesInput>
  }

  export type TicketCreateWithoutCategoryInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    config: TicketConfigCreateNestedOneWithoutTicketsInput
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
    rating?: TicketRatingCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCategoryInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    configId: string
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
    rating?: TicketRatingUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCategoryInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput>
  }

  export type TicketCreateManyCategoryInputEnvelope = {
    data: TicketCreateManyCategoryInput | TicketCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TicketConfigUpsertWithoutCategoriesInput = {
    update: XOR<TicketConfigUpdateWithoutCategoriesInput, TicketConfigUncheckedUpdateWithoutCategoriesInput>
    create: XOR<TicketConfigCreateWithoutCategoriesInput, TicketConfigUncheckedCreateWithoutCategoriesInput>
    where?: TicketConfigWhereInput
  }

  export type TicketConfigUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: TicketConfigWhereInput
    data: XOR<TicketConfigUpdateWithoutCategoriesInput, TicketConfigUncheckedUpdateWithoutCategoriesInput>
  }

  export type TicketConfigUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    categoryChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptsChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    supportRoleIds?: TicketConfigUpdatesupportRoleIdsInput | string[]
    maxOpenTickets?: IntFieldUpdateOperationsInput | number
    autoCloseTime?: NullableIntFieldUpdateOperationsInput | number | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    closeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableRatings?: BoolFieldUpdateOperationsInput | boolean
    enableTranscripts?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutConfigNestedInput
  }

  export type TicketConfigUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    categoryChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptsChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    supportRoleIds?: TicketConfigUpdatesupportRoleIdsInput | string[]
    maxOpenTickets?: IntFieldUpdateOperationsInput | number
    autoCloseTime?: NullableIntFieldUpdateOperationsInput | number | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    closeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableRatings?: BoolFieldUpdateOperationsInput | boolean
    enableTranscripts?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCategoryInput, TicketUncheckedUpdateWithoutCategoryInput>
    create: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCategoryInput, TicketUncheckedUpdateWithoutCategoryInput>
  }

  export type TicketUpdateManyWithWhereWithoutCategoryInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TicketCategoryCreateWithoutTicketsInput = {
    id?: string
    guildId: string
    name: string
    emoji?: string | null
    description?: string | null
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    config: TicketConfigCreateNestedOneWithoutCategoriesInput
  }

  export type TicketCategoryUncheckedCreateWithoutTicketsInput = {
    id?: string
    guildId: string
    name: string
    emoji?: string | null
    description?: string | null
    color?: string
    configId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCategoryCreateOrConnectWithoutTicketsInput = {
    where: TicketCategoryWhereUniqueInput
    create: XOR<TicketCategoryCreateWithoutTicketsInput, TicketCategoryUncheckedCreateWithoutTicketsInput>
  }

  export type TicketConfigCreateWithoutTicketsInput = {
    id?: string
    guildId: string
    categoryChannelId?: string | null
    transcriptsChannelId?: string | null
    supportRoleIds?: TicketConfigCreatesupportRoleIdsInput | string[]
    maxOpenTickets?: number
    autoCloseTime?: number | null
    welcomeMessage?: string | null
    closeMessage?: string | null
    enableRatings?: boolean
    enableTranscripts?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: TicketCategoryCreateNestedManyWithoutConfigInput
  }

  export type TicketConfigUncheckedCreateWithoutTicketsInput = {
    id?: string
    guildId: string
    categoryChannelId?: string | null
    transcriptsChannelId?: string | null
    supportRoleIds?: TicketConfigCreatesupportRoleIdsInput | string[]
    maxOpenTickets?: number
    autoCloseTime?: number | null
    welcomeMessage?: string | null
    closeMessage?: string | null
    enableRatings?: boolean
    enableTranscripts?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: TicketCategoryUncheckedCreateNestedManyWithoutConfigInput
  }

  export type TicketConfigCreateOrConnectWithoutTicketsInput = {
    where: TicketConfigWhereUniqueInput
    create: XOR<TicketConfigCreateWithoutTicketsInput, TicketConfigUncheckedCreateWithoutTicketsInput>
  }

  export type TicketMessageCreateWithoutTicketInput = {
    id?: string
    userId: string
    username: string
    content: string
    attachments?: TicketMessageCreateattachmentsInput | string[]
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageUncheckedCreateWithoutTicketInput = {
    id?: string
    userId: string
    username: string
    content: string
    attachments?: TicketMessageCreateattachmentsInput | string[]
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageCreateOrConnectWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    create: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageCreateManyTicketInputEnvelope = {
    data: TicketMessageCreateManyTicketInput | TicketMessageCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketRatingCreateWithoutTicketInput = {
    id?: string
    rating: number
    feedback?: string | null
    createdAt?: Date | string
  }

  export type TicketRatingUncheckedCreateWithoutTicketInput = {
    id?: string
    rating: number
    feedback?: string | null
    createdAt?: Date | string
  }

  export type TicketRatingCreateOrConnectWithoutTicketInput = {
    where: TicketRatingWhereUniqueInput
    create: XOR<TicketRatingCreateWithoutTicketInput, TicketRatingUncheckedCreateWithoutTicketInput>
  }

  export type TicketCategoryUpsertWithoutTicketsInput = {
    update: XOR<TicketCategoryUpdateWithoutTicketsInput, TicketCategoryUncheckedUpdateWithoutTicketsInput>
    create: XOR<TicketCategoryCreateWithoutTicketsInput, TicketCategoryUncheckedCreateWithoutTicketsInput>
    where?: TicketCategoryWhereInput
  }

  export type TicketCategoryUpdateToOneWithWhereWithoutTicketsInput = {
    where?: TicketCategoryWhereInput
    data: XOR<TicketCategoryUpdateWithoutTicketsInput, TicketCategoryUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketCategoryUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: TicketConfigUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type TicketCategoryUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketConfigUpsertWithoutTicketsInput = {
    update: XOR<TicketConfigUpdateWithoutTicketsInput, TicketConfigUncheckedUpdateWithoutTicketsInput>
    create: XOR<TicketConfigCreateWithoutTicketsInput, TicketConfigUncheckedCreateWithoutTicketsInput>
    where?: TicketConfigWhereInput
  }

  export type TicketConfigUpdateToOneWithWhereWithoutTicketsInput = {
    where?: TicketConfigWhereInput
    data: XOR<TicketConfigUpdateWithoutTicketsInput, TicketConfigUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketConfigUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    categoryChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptsChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    supportRoleIds?: TicketConfigUpdatesupportRoleIdsInput | string[]
    maxOpenTickets?: IntFieldUpdateOperationsInput | number
    autoCloseTime?: NullableIntFieldUpdateOperationsInput | number | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    closeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableRatings?: BoolFieldUpdateOperationsInput | boolean
    enableTranscripts?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: TicketCategoryUpdateManyWithoutConfigNestedInput
  }

  export type TicketConfigUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    categoryChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptsChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    supportRoleIds?: TicketConfigUpdatesupportRoleIdsInput | string[]
    maxOpenTickets?: IntFieldUpdateOperationsInput | number
    autoCloseTime?: NullableIntFieldUpdateOperationsInput | number | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    closeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enableRatings?: BoolFieldUpdateOperationsInput | boolean
    enableTranscripts?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: TicketCategoryUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type TicketMessageUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    update: XOR<TicketMessageUpdateWithoutTicketInput, TicketMessageUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    data: XOR<TicketMessageUpdateWithoutTicketInput, TicketMessageUncheckedUpdateWithoutTicketInput>
  }

  export type TicketMessageUpdateManyWithWhereWithoutTicketInput = {
    where: TicketMessageScalarWhereInput
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketMessageScalarWhereInput = {
    AND?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
    OR?: TicketMessageScalarWhereInput[]
    NOT?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
    id?: StringFilter<"TicketMessage"> | string
    ticketId?: StringFilter<"TicketMessage"> | string
    userId?: StringFilter<"TicketMessage"> | string
    username?: StringFilter<"TicketMessage"> | string
    content?: StringFilter<"TicketMessage"> | string
    attachments?: StringNullableListFilter<"TicketMessage">
    isStaff?: BoolFilter<"TicketMessage"> | boolean
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
  }

  export type TicketRatingUpsertWithoutTicketInput = {
    update: XOR<TicketRatingUpdateWithoutTicketInput, TicketRatingUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketRatingCreateWithoutTicketInput, TicketRatingUncheckedCreateWithoutTicketInput>
    where?: TicketRatingWhereInput
  }

  export type TicketRatingUpdateToOneWithWhereWithoutTicketInput = {
    where?: TicketRatingWhereInput
    data: XOR<TicketRatingUpdateWithoutTicketInput, TicketRatingUncheckedUpdateWithoutTicketInput>
  }

  export type TicketRatingUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketRatingUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateWithoutMessagesInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: TicketCategoryCreateNestedOneWithoutTicketsInput
    config: TicketConfigCreateNestedOneWithoutTicketsInput
    rating?: TicketRatingCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutMessagesInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    categoryId?: string | null
    configId: string
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: TicketRatingUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutMessagesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
  }

  export type TicketUpsertWithoutMessagesInput = {
    update: XOR<TicketUpdateWithoutMessagesInput, TicketUncheckedUpdateWithoutMessagesInput>
    create: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutMessagesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutMessagesInput, TicketUncheckedUpdateWithoutMessagesInput>
  }

  export type TicketUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: TicketCategoryUpdateOneWithoutTicketsNestedInput
    config?: TicketConfigUpdateOneRequiredWithoutTicketsNestedInput
    rating?: TicketRatingUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    configId?: StringFieldUpdateOperationsInput | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: TicketRatingUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketCreateWithoutRatingInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: TicketCategoryCreateNestedOneWithoutTicketsInput
    config: TicketConfigCreateNestedOneWithoutTicketsInput
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutRatingInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    categoryId?: string | null
    configId: string
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutRatingInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutRatingInput, TicketUncheckedCreateWithoutRatingInput>
  }

  export type TicketUpsertWithoutRatingInput = {
    update: XOR<TicketUpdateWithoutRatingInput, TicketUncheckedUpdateWithoutRatingInput>
    create: XOR<TicketCreateWithoutRatingInput, TicketUncheckedCreateWithoutRatingInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutRatingInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutRatingInput, TicketUncheckedUpdateWithoutRatingInput>
  }

  export type TicketUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: TicketCategoryUpdateOneWithoutTicketsNestedInput
    config?: TicketConfigUpdateOneRequiredWithoutTicketsNestedInput
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    configId?: StringFieldUpdateOperationsInput | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type LevelRewardCreateWithoutConfigInput = {
    id?: string
    guildId: string
    level: number
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelRewardUncheckedCreateWithoutConfigInput = {
    id?: string
    guildId: string
    level: number
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelRewardCreateOrConnectWithoutConfigInput = {
    where: LevelRewardWhereUniqueInput
    create: XOR<LevelRewardCreateWithoutConfigInput, LevelRewardUncheckedCreateWithoutConfigInput>
  }

  export type LevelRewardCreateManyConfigInputEnvelope = {
    data: LevelRewardCreateManyConfigInput | LevelRewardCreateManyConfigInput[]
    skipDuplicates?: boolean
  }

  export type LevelRewardUpsertWithWhereUniqueWithoutConfigInput = {
    where: LevelRewardWhereUniqueInput
    update: XOR<LevelRewardUpdateWithoutConfigInput, LevelRewardUncheckedUpdateWithoutConfigInput>
    create: XOR<LevelRewardCreateWithoutConfigInput, LevelRewardUncheckedCreateWithoutConfigInput>
  }

  export type LevelRewardUpdateWithWhereUniqueWithoutConfigInput = {
    where: LevelRewardWhereUniqueInput
    data: XOR<LevelRewardUpdateWithoutConfigInput, LevelRewardUncheckedUpdateWithoutConfigInput>
  }

  export type LevelRewardUpdateManyWithWhereWithoutConfigInput = {
    where: LevelRewardScalarWhereInput
    data: XOR<LevelRewardUpdateManyMutationInput, LevelRewardUncheckedUpdateManyWithoutConfigInput>
  }

  export type LevelRewardScalarWhereInput = {
    AND?: LevelRewardScalarWhereInput | LevelRewardScalarWhereInput[]
    OR?: LevelRewardScalarWhereInput[]
    NOT?: LevelRewardScalarWhereInput | LevelRewardScalarWhereInput[]
    id?: StringFilter<"LevelReward"> | string
    guildId?: StringFilter<"LevelReward"> | string
    level?: IntFilter<"LevelReward"> | number
    roleId?: StringFilter<"LevelReward"> | string
    configId?: StringFilter<"LevelReward"> | string
    createdAt?: DateTimeFilter<"LevelReward"> | Date | string
    updatedAt?: DateTimeFilter<"LevelReward"> | Date | string
  }

  export type LevelConfigCreateWithoutRewardsInput = {
    id?: string
    guildId: string
    enabled?: boolean
    xpMin?: number
    xpMax?: number
    xpCooldown?: number
    levelUpChannelId?: string | null
    levelUpMessage?: string
    ignoredChannelIds?: LevelConfigCreateignoredChannelIdsInput | string[]
    ignoredRoleIds?: LevelConfigCreateignoredRoleIdsInput | string[]
    stackRoles?: boolean
    announceInDm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelConfigUncheckedCreateWithoutRewardsInput = {
    id?: string
    guildId: string
    enabled?: boolean
    xpMin?: number
    xpMax?: number
    xpCooldown?: number
    levelUpChannelId?: string | null
    levelUpMessage?: string
    ignoredChannelIds?: LevelConfigCreateignoredChannelIdsInput | string[]
    ignoredRoleIds?: LevelConfigCreateignoredRoleIdsInput | string[]
    stackRoles?: boolean
    announceInDm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelConfigCreateOrConnectWithoutRewardsInput = {
    where: LevelConfigWhereUniqueInput
    create: XOR<LevelConfigCreateWithoutRewardsInput, LevelConfigUncheckedCreateWithoutRewardsInput>
  }

  export type LevelConfigUpsertWithoutRewardsInput = {
    update: XOR<LevelConfigUpdateWithoutRewardsInput, LevelConfigUncheckedUpdateWithoutRewardsInput>
    create: XOR<LevelConfigCreateWithoutRewardsInput, LevelConfigUncheckedCreateWithoutRewardsInput>
    where?: LevelConfigWhereInput
  }

  export type LevelConfigUpdateToOneWithWhereWithoutRewardsInput = {
    where?: LevelConfigWhereInput
    data: XOR<LevelConfigUpdateWithoutRewardsInput, LevelConfigUncheckedUpdateWithoutRewardsInput>
  }

  export type LevelConfigUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    xpMin?: IntFieldUpdateOperationsInput | number
    xpMax?: IntFieldUpdateOperationsInput | number
    xpCooldown?: IntFieldUpdateOperationsInput | number
    levelUpChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    levelUpMessage?: StringFieldUpdateOperationsInput | string
    ignoredChannelIds?: LevelConfigUpdateignoredChannelIdsInput | string[]
    ignoredRoleIds?: LevelConfigUpdateignoredRoleIdsInput | string[]
    stackRoles?: BoolFieldUpdateOperationsInput | boolean
    announceInDm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelConfigUncheckedUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    xpMin?: IntFieldUpdateOperationsInput | number
    xpMax?: IntFieldUpdateOperationsInput | number
    xpCooldown?: IntFieldUpdateOperationsInput | number
    levelUpChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    levelUpMessage?: StringFieldUpdateOperationsInput | string
    ignoredChannelIds?: LevelConfigUpdateignoredChannelIdsInput | string[]
    ignoredRoleIds?: LevelConfigUpdateignoredRoleIdsInput | string[]
    stackRoles?: BoolFieldUpdateOperationsInput | boolean
    announceInDm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCategoryCreateManyConfigInput = {
    id?: string
    guildId: string
    name: string
    emoji?: string | null
    description?: string | null
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyConfigInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    categoryId?: string | null
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCategoryUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateManyWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: TicketCategoryUpdateOneWithoutTicketsNestedInput
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
    rating?: TicketRatingUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
    rating?: TicketRatingUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyCategoryInput = {
    id?: string
    guildId: string
    channelId: string
    userId: string
    username: string
    claimedBy?: string | null
    status?: $Enums.TicketStatus
    subject?: string | null
    configId: string
    closedAt?: Date | string | null
    closedBy?: string | null
    closedReason?: string | null
    transcriptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: TicketConfigUpdateOneRequiredWithoutTicketsNestedInput
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
    rating?: TicketRatingUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    configId?: StringFieldUpdateOperationsInput | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
    rating?: TicketRatingUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    configId?: StringFieldUpdateOperationsInput | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateManyTicketInput = {
    id?: string
    userId: string
    username: string
    content: string
    attachments?: TicketMessageCreateattachmentsInput | string[]
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: TicketMessageUpdateattachmentsInput | string[]
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: TicketMessageUpdateattachmentsInput | string[]
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: TicketMessageUpdateattachmentsInput | string[]
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelRewardCreateManyConfigInput = {
    id?: string
    guildId: string
    level: number
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelRewardUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelRewardUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelRewardUncheckedUpdateManyWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}