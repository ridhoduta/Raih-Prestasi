
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model CompetitionCategory
 * 
 */
export type CompetitionCategory = $Result.DefaultSelection<Prisma.$CompetitionCategoryPayload>
/**
 * Model CompetitionLevel
 * 
 */
export type CompetitionLevel = $Result.DefaultSelection<Prisma.$CompetitionLevelPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model Competition
 * 
 */
export type Competition = $Result.DefaultSelection<Prisma.$CompetitionPayload>
/**
 * Model CompetitionRegistration
 * 
 */
export type CompetitionRegistration = $Result.DefaultSelection<Prisma.$CompetitionRegistrationPayload>
/**
 * Model CompetitionFormField
 * 
 */
export type CompetitionFormField = $Result.DefaultSelection<Prisma.$CompetitionFormFieldPayload>
/**
 * Model RegistrationAnswer
 * 
 */
export type RegistrationAnswer = $Result.DefaultSelection<Prisma.$RegistrationAnswerPayload>
/**
 * Model IndependentCompetitionSubmission
 * 
 */
export type IndependentCompetitionSubmission = $Result.DefaultSelection<Prisma.$IndependentCompetitionSubmissionPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model AcademicScore
 * 
 */
export type AcademicScore = $Result.DefaultSelection<Prisma.$AcademicScorePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  GURU: 'GURU'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const RegistrationStatus: {
  MENUNGGU: 'MENUNGGU',
  DITERIMA: 'DITERIMA',
  DITOLAK: 'DITOLAK'
};

export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus]


export const FieldType: {
  TEXT: 'TEXT',
  TEXTAREA: 'TEXTAREA',
  NUMBER: 'NUMBER',
  FILE: 'FILE',
  SELECT: 'SELECT',
  CHECKBOX: 'CHECKBOX',
  RADIO: 'RADIO',
  DATE: 'DATE'
};

export type FieldType = (typeof FieldType)[keyof typeof FieldType]


export const SubmissionStatus: {
  MENUNGGU: 'MENUNGGU',
  DITERIMA: 'DITERIMA',
  DITOLAK: 'DITOLAK'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]


export const AchievementStatus: {
  MENUNGGU: 'MENUNGGU',
  TERVERIFIKASI: 'TERVERIFIKASI',
  DITOLAK: 'DITOLAK'
};

export type AchievementStatus = (typeof AchievementStatus)[keyof typeof AchievementStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type RegistrationStatus = $Enums.RegistrationStatus

export const RegistrationStatus: typeof $Enums.RegistrationStatus

export type FieldType = $Enums.FieldType

export const FieldType: typeof $Enums.FieldType

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

export type AchievementStatus = $Enums.AchievementStatus

export const AchievementStatus: typeof $Enums.AchievementStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitionCategory`: Exposes CRUD operations for the **CompetitionCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompetitionCategories
    * const competitionCategories = await prisma.competitionCategory.findMany()
    * ```
    */
  get competitionCategory(): Prisma.CompetitionCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitionLevel`: Exposes CRUD operations for the **CompetitionLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompetitionLevels
    * const competitionLevels = await prisma.competitionLevel.findMany()
    * ```
    */
  get competitionLevel(): Prisma.CompetitionLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competition`: Exposes CRUD operations for the **Competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competition.findMany()
    * ```
    */
  get competition(): Prisma.CompetitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitionRegistration`: Exposes CRUD operations for the **CompetitionRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompetitionRegistrations
    * const competitionRegistrations = await prisma.competitionRegistration.findMany()
    * ```
    */
  get competitionRegistration(): Prisma.CompetitionRegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitionFormField`: Exposes CRUD operations for the **CompetitionFormField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompetitionFormFields
    * const competitionFormFields = await prisma.competitionFormField.findMany()
    * ```
    */
  get competitionFormField(): Prisma.CompetitionFormFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registrationAnswer`: Exposes CRUD operations for the **RegistrationAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistrationAnswers
    * const registrationAnswers = await prisma.registrationAnswer.findMany()
    * ```
    */
  get registrationAnswer(): Prisma.RegistrationAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.independentCompetitionSubmission`: Exposes CRUD operations for the **IndependentCompetitionSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndependentCompetitionSubmissions
    * const independentCompetitionSubmissions = await prisma.independentCompetitionSubmission.findMany()
    * ```
    */
  get independentCompetitionSubmission(): Prisma.IndependentCompetitionSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.academicScore`: Exposes CRUD operations for the **AcademicScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcademicScores
    * const academicScores = await prisma.academicScore.findMany()
    * ```
    */
  get academicScore(): Prisma.AcademicScoreDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Student: 'Student',
    CompetitionCategory: 'CompetitionCategory',
    CompetitionLevel: 'CompetitionLevel',
    News: 'News',
    Competition: 'Competition',
    CompetitionRegistration: 'CompetitionRegistration',
    CompetitionFormField: 'CompetitionFormField',
    RegistrationAnswer: 'RegistrationAnswer',
    IndependentCompetitionSubmission: 'IndependentCompetitionSubmission',
    Announcement: 'Announcement',
    Achievement: 'Achievement',
    AcademicScore: 'AcademicScore'
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
      modelProps: "user" | "student" | "competitionCategory" | "competitionLevel" | "news" | "competition" | "competitionRegistration" | "competitionFormField" | "registrationAnswer" | "independentCompetitionSubmission" | "announcement" | "achievement" | "academicScore"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      CompetitionCategory: {
        payload: Prisma.$CompetitionCategoryPayload<ExtArgs>
        fields: Prisma.CompetitionCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionCategoryPayload>
          }
          findFirst: {
            args: Prisma.CompetitionCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionCategoryPayload>
          }
          findMany: {
            args: Prisma.CompetitionCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionCategoryPayload>[]
          }
          create: {
            args: Prisma.CompetitionCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionCategoryPayload>
          }
          createMany: {
            args: Prisma.CompetitionCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionCategoryPayload>[]
          }
          delete: {
            args: Prisma.CompetitionCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionCategoryPayload>
          }
          update: {
            args: Prisma.CompetitionCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionCategoryPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionCategoryPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionCategoryPayload>
          }
          aggregate: {
            args: Prisma.CompetitionCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitionCategory>
          }
          groupBy: {
            args: Prisma.CompetitionCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionCategoryCountAggregateOutputType> | number
          }
        }
      }
      CompetitionLevel: {
        payload: Prisma.$CompetitionLevelPayload<ExtArgs>
        fields: Prisma.CompetitionLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionLevelPayload>
          }
          findFirst: {
            args: Prisma.CompetitionLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionLevelPayload>
          }
          findMany: {
            args: Prisma.CompetitionLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionLevelPayload>[]
          }
          create: {
            args: Prisma.CompetitionLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionLevelPayload>
          }
          createMany: {
            args: Prisma.CompetitionLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionLevelPayload>[]
          }
          delete: {
            args: Prisma.CompetitionLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionLevelPayload>
          }
          update: {
            args: Prisma.CompetitionLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionLevelPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionLevelPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionLevelPayload>
          }
          aggregate: {
            args: Prisma.CompetitionLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitionLevel>
          }
          groupBy: {
            args: Prisma.CompetitionLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionLevelCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionLevelCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      Competition: {
        payload: Prisma.$CompetitionPayload<ExtArgs>
        fields: Prisma.CompetitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findFirst: {
            args: Prisma.CompetitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findMany: {
            args: Prisma.CompetitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          create: {
            args: Prisma.CompetitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          createMany: {
            args: Prisma.CompetitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          delete: {
            args: Prisma.CompetitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          update: {
            args: Prisma.CompetitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          aggregate: {
            args: Prisma.CompetitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetition>
          }
          groupBy: {
            args: Prisma.CompetitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionCountAggregateOutputType> | number
          }
        }
      }
      CompetitionRegistration: {
        payload: Prisma.$CompetitionRegistrationPayload<ExtArgs>
        fields: Prisma.CompetitionRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionRegistrationPayload>
          }
          findFirst: {
            args: Prisma.CompetitionRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionRegistrationPayload>
          }
          findMany: {
            args: Prisma.CompetitionRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionRegistrationPayload>[]
          }
          create: {
            args: Prisma.CompetitionRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionRegistrationPayload>
          }
          createMany: {
            args: Prisma.CompetitionRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionRegistrationPayload>[]
          }
          delete: {
            args: Prisma.CompetitionRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionRegistrationPayload>
          }
          update: {
            args: Prisma.CompetitionRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionRegistrationPayload>
          }
          aggregate: {
            args: Prisma.CompetitionRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitionRegistration>
          }
          groupBy: {
            args: Prisma.CompetitionRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionRegistrationCountAggregateOutputType> | number
          }
        }
      }
      CompetitionFormField: {
        payload: Prisma.$CompetitionFormFieldPayload<ExtArgs>
        fields: Prisma.CompetitionFormFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionFormFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionFormFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionFormFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionFormFieldPayload>
          }
          findFirst: {
            args: Prisma.CompetitionFormFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionFormFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionFormFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionFormFieldPayload>
          }
          findMany: {
            args: Prisma.CompetitionFormFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionFormFieldPayload>[]
          }
          create: {
            args: Prisma.CompetitionFormFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionFormFieldPayload>
          }
          createMany: {
            args: Prisma.CompetitionFormFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionFormFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionFormFieldPayload>[]
          }
          delete: {
            args: Prisma.CompetitionFormFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionFormFieldPayload>
          }
          update: {
            args: Prisma.CompetitionFormFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionFormFieldPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionFormFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionFormFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionFormFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionFormFieldPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionFormFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionFormFieldPayload>
          }
          aggregate: {
            args: Prisma.CompetitionFormFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitionFormField>
          }
          groupBy: {
            args: Prisma.CompetitionFormFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionFormFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionFormFieldCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionFormFieldCountAggregateOutputType> | number
          }
        }
      }
      RegistrationAnswer: {
        payload: Prisma.$RegistrationAnswerPayload<ExtArgs>
        fields: Prisma.RegistrationAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationAnswerPayload>
          }
          findFirst: {
            args: Prisma.RegistrationAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationAnswerPayload>
          }
          findMany: {
            args: Prisma.RegistrationAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationAnswerPayload>[]
          }
          create: {
            args: Prisma.RegistrationAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationAnswerPayload>
          }
          createMany: {
            args: Prisma.RegistrationAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistrationAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationAnswerPayload>[]
          }
          delete: {
            args: Prisma.RegistrationAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationAnswerPayload>
          }
          update: {
            args: Prisma.RegistrationAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationAnswerPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistrationAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationAnswerPayload>[]
          }
          upsert: {
            args: Prisma.RegistrationAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationAnswerPayload>
          }
          aggregate: {
            args: Prisma.RegistrationAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrationAnswer>
          }
          groupBy: {
            args: Prisma.RegistrationAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationAnswerCountAggregateOutputType> | number
          }
        }
      }
      IndependentCompetitionSubmission: {
        payload: Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>
        fields: Prisma.IndependentCompetitionSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndependentCompetitionSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentCompetitionSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndependentCompetitionSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentCompetitionSubmissionPayload>
          }
          findFirst: {
            args: Prisma.IndependentCompetitionSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentCompetitionSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndependentCompetitionSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentCompetitionSubmissionPayload>
          }
          findMany: {
            args: Prisma.IndependentCompetitionSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentCompetitionSubmissionPayload>[]
          }
          create: {
            args: Prisma.IndependentCompetitionSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentCompetitionSubmissionPayload>
          }
          createMany: {
            args: Prisma.IndependentCompetitionSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndependentCompetitionSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentCompetitionSubmissionPayload>[]
          }
          delete: {
            args: Prisma.IndependentCompetitionSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentCompetitionSubmissionPayload>
          }
          update: {
            args: Prisma.IndependentCompetitionSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentCompetitionSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.IndependentCompetitionSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndependentCompetitionSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndependentCompetitionSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentCompetitionSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.IndependentCompetitionSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentCompetitionSubmissionPayload>
          }
          aggregate: {
            args: Prisma.IndependentCompetitionSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndependentCompetitionSubmission>
          }
          groupBy: {
            args: Prisma.IndependentCompetitionSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndependentCompetitionSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndependentCompetitionSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<IndependentCompetitionSubmissionCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      AcademicScore: {
        payload: Prisma.$AcademicScorePayload<ExtArgs>
        fields: Prisma.AcademicScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademicScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademicScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicScorePayload>
          }
          findFirst: {
            args: Prisma.AcademicScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademicScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicScorePayload>
          }
          findMany: {
            args: Prisma.AcademicScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicScorePayload>[]
          }
          create: {
            args: Prisma.AcademicScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicScorePayload>
          }
          createMany: {
            args: Prisma.AcademicScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcademicScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicScorePayload>[]
          }
          delete: {
            args: Prisma.AcademicScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicScorePayload>
          }
          update: {
            args: Prisma.AcademicScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicScorePayload>
          }
          deleteMany: {
            args: Prisma.AcademicScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademicScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcademicScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicScorePayload>[]
          }
          upsert: {
            args: Prisma.AcademicScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicScorePayload>
          }
          aggregate: {
            args: Prisma.AcademicScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademicScore>
          }
          groupBy: {
            args: Prisma.AcademicScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademicScoreCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicScoreCountAggregateOutputType> | number
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
    user?: UserOmit
    student?: StudentOmit
    competitionCategory?: CompetitionCategoryOmit
    competitionLevel?: CompetitionLevelOmit
    news?: NewsOmit
    competition?: CompetitionOmit
    competitionRegistration?: CompetitionRegistrationOmit
    competitionFormField?: CompetitionFormFieldOmit
    registrationAnswer?: RegistrationAnswerOmit
    independentCompetitionSubmission?: IndependentCompetitionSubmissionOmit
    announcement?: AnnouncementOmit
    achievement?: AchievementOmit
    academicScore?: AcademicScoreOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    news: number
    competitions: number
    reviewedSubmissions: number
    announcements: number
    verifiedAchievements: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | UserCountOutputTypeCountNewsArgs
    competitions?: boolean | UserCountOutputTypeCountCompetitionsArgs
    reviewedSubmissions?: boolean | UserCountOutputTypeCountReviewedSubmissionsArgs
    announcements?: boolean | UserCountOutputTypeCountAnnouncementsArgs
    verifiedAchievements?: boolean | UserCountOutputTypeCountVerifiedAchievementsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompetitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewedSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndependentCompetitionSubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerifiedAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    registrations: number
    submissions: number
    achievements: number
    academicScores: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | StudentCountOutputTypeCountRegistrationsArgs
    submissions?: boolean | StudentCountOutputTypeCountSubmissionsArgs
    achievements?: boolean | StudentCountOutputTypeCountAchievementsArgs
    academicScores?: boolean | StudentCountOutputTypeCountAcademicScoresArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionRegistrationWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndependentCompetitionSubmissionWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAcademicScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicScoreWhereInput
  }


  /**
   * Count Type CompetitionCategoryCountOutputType
   */

  export type CompetitionCategoryCountOutputType = {
    competitions: number
  }

  export type CompetitionCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competitions?: boolean | CompetitionCategoryCountOutputTypeCountCompetitionsArgs
  }

  // Custom InputTypes
  /**
   * CompetitionCategoryCountOutputType without action
   */
  export type CompetitionCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategoryCountOutputType
     */
    select?: CompetitionCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionCategoryCountOutputType without action
   */
  export type CompetitionCategoryCountOutputTypeCountCompetitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
  }


  /**
   * Count Type CompetitionLevelCountOutputType
   */

  export type CompetitionLevelCountOutputType = {
    competitions: number
  }

  export type CompetitionLevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competitions?: boolean | CompetitionLevelCountOutputTypeCountCompetitionsArgs
  }

  // Custom InputTypes
  /**
   * CompetitionLevelCountOutputType without action
   */
  export type CompetitionLevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevelCountOutputType
     */
    select?: CompetitionLevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionLevelCountOutputType without action
   */
  export type CompetitionLevelCountOutputTypeCountCompetitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
  }


  /**
   * Count Type CompetitionCountOutputType
   */

  export type CompetitionCountOutputType = {
    registrations: number
    CompetitionFormField: number
  }

  export type CompetitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | CompetitionCountOutputTypeCountRegistrationsArgs
    CompetitionFormField?: boolean | CompetitionCountOutputTypeCountCompetitionFormFieldArgs
  }

  // Custom InputTypes
  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCountOutputType
     */
    select?: CompetitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionRegistrationWhereInput
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountCompetitionFormFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionFormFieldWhereInput
  }


  /**
   * Count Type CompetitionRegistrationCountOutputType
   */

  export type CompetitionRegistrationCountOutputType = {
    answers: number
  }

  export type CompetitionRegistrationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | CompetitionRegistrationCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * CompetitionRegistrationCountOutputType without action
   */
  export type CompetitionRegistrationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistrationCountOutputType
     */
    select?: CompetitionRegistrationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionRegistrationCountOutputType without action
   */
  export type CompetitionRegistrationCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationAnswerWhereInput
  }


  /**
   * Count Type CompetitionFormFieldCountOutputType
   */

  export type CompetitionFormFieldCountOutputType = {
    registrationAnswer: number
  }

  export type CompetitionFormFieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrationAnswer?: boolean | CompetitionFormFieldCountOutputTypeCountRegistrationAnswerArgs
  }

  // Custom InputTypes
  /**
   * CompetitionFormFieldCountOutputType without action
   */
  export type CompetitionFormFieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormFieldCountOutputType
     */
    select?: CompetitionFormFieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionFormFieldCountOutputType without action
   */
  export type CompetitionFormFieldCountOutputTypeCountRegistrationAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | User$newsArgs<ExtArgs>
    competitions?: boolean | User$competitionsArgs<ExtArgs>
    reviewedSubmissions?: boolean | User$reviewedSubmissionsArgs<ExtArgs>
    announcements?: boolean | User$announcementsArgs<ExtArgs>
    verifiedAchievements?: boolean | User$verifiedAchievementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | User$newsArgs<ExtArgs>
    competitions?: boolean | User$competitionsArgs<ExtArgs>
    reviewedSubmissions?: boolean | User$reviewedSubmissionsArgs<ExtArgs>
    announcements?: boolean | User$announcementsArgs<ExtArgs>
    verifiedAchievements?: boolean | User$verifiedAchievementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
      competitions: Prisma.$CompetitionPayload<ExtArgs>[]
      reviewedSubmissions: Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>[]
      announcements: Prisma.$AnnouncementPayload<ExtArgs>[]
      verifiedAchievements: Prisma.$AchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends User$newsArgs<ExtArgs> = {}>(args?: Subset<T, User$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    competitions<T extends User$competitionsArgs<ExtArgs> = {}>(args?: Subset<T, User$competitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewedSubmissions<T extends User$reviewedSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewedSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announcements<T extends User$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, User$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verifiedAchievements<T extends User$verifiedAchievementsArgs<ExtArgs> = {}>(args?: Subset<T, User$verifiedAchievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.news
   */
  export type User$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * User.competitions
   */
  export type User$competitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    cursor?: CompetitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * User.reviewedSubmissions
   */
  export type User$reviewedSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionInclude<ExtArgs> | null
    where?: IndependentCompetitionSubmissionWhereInput
    orderBy?: IndependentCompetitionSubmissionOrderByWithRelationInput | IndependentCompetitionSubmissionOrderByWithRelationInput[]
    cursor?: IndependentCompetitionSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndependentCompetitionSubmissionScalarFieldEnum | IndependentCompetitionSubmissionScalarFieldEnum[]
  }

  /**
   * User.announcements
   */
  export type User$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * User.verifiedAchievements
   */
  export type User$verifiedAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    cursor?: AchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    angkatan: number | null
  }

  export type StudentSumAggregateOutputType = {
    angkatan: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    nisn: string | null
    password: string | null
    name: string | null
    kelas: string | null
    angkatan: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    nisn: string | null
    password: string | null
    name: string | null
    kelas: string | null
    angkatan: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    nisn: number
    password: number
    name: number
    kelas: number
    angkatan: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    angkatan?: true
  }

  export type StudentSumAggregateInputType = {
    angkatan?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    nisn?: true
    password?: true
    name?: true
    kelas?: true
    angkatan?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    nisn?: true
    password?: true
    name?: true
    kelas?: true
    angkatan?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    nisn?: true
    password?: true
    name?: true
    kelas?: true
    angkatan?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    nisn: string
    password: string
    name: string
    kelas: string
    angkatan: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nisn?: boolean
    password?: boolean
    name?: boolean
    kelas?: boolean
    angkatan?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    registrations?: boolean | Student$registrationsArgs<ExtArgs>
    submissions?: boolean | Student$submissionsArgs<ExtArgs>
    achievements?: boolean | Student$achievementsArgs<ExtArgs>
    academicScores?: boolean | Student$academicScoresArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nisn?: boolean
    password?: boolean
    name?: boolean
    kelas?: boolean
    angkatan?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nisn?: boolean
    password?: boolean
    name?: boolean
    kelas?: boolean
    angkatan?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    nisn?: boolean
    password?: boolean
    name?: boolean
    kelas?: boolean
    angkatan?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nisn" | "password" | "name" | "kelas" | "angkatan" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | Student$registrationsArgs<ExtArgs>
    submissions?: boolean | Student$submissionsArgs<ExtArgs>
    achievements?: boolean | Student$achievementsArgs<ExtArgs>
    academicScores?: boolean | Student$academicScoresArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      registrations: Prisma.$CompetitionRegistrationPayload<ExtArgs>[]
      submissions: Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>[]
      achievements: Prisma.$AchievementPayload<ExtArgs>[]
      academicScores: Prisma.$AcademicScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nisn: string
      password: string
      name: string
      kelas: string
      angkatan: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registrations<T extends Student$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Student$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Student$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Student$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    achievements<T extends Student$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, Student$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    academicScores<T extends Student$academicScoresArgs<ExtArgs> = {}>(args?: Subset<T, Student$academicScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly nisn: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly kelas: FieldRef<"Student", 'String'>
    readonly angkatan: FieldRef<"Student", 'Int'>
    readonly isActive: FieldRef<"Student", 'Boolean'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.registrations
   */
  export type Student$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationInclude<ExtArgs> | null
    where?: CompetitionRegistrationWhereInput
    orderBy?: CompetitionRegistrationOrderByWithRelationInput | CompetitionRegistrationOrderByWithRelationInput[]
    cursor?: CompetitionRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionRegistrationScalarFieldEnum | CompetitionRegistrationScalarFieldEnum[]
  }

  /**
   * Student.submissions
   */
  export type Student$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionInclude<ExtArgs> | null
    where?: IndependentCompetitionSubmissionWhereInput
    orderBy?: IndependentCompetitionSubmissionOrderByWithRelationInput | IndependentCompetitionSubmissionOrderByWithRelationInput[]
    cursor?: IndependentCompetitionSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndependentCompetitionSubmissionScalarFieldEnum | IndependentCompetitionSubmissionScalarFieldEnum[]
  }

  /**
   * Student.achievements
   */
  export type Student$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    cursor?: AchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Student.academicScores
   */
  export type Student$academicScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreInclude<ExtArgs> | null
    where?: AcademicScoreWhereInput
    orderBy?: AcademicScoreOrderByWithRelationInput | AcademicScoreOrderByWithRelationInput[]
    cursor?: AcademicScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcademicScoreScalarFieldEnum | AcademicScoreScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model CompetitionCategory
   */

  export type AggregateCompetitionCategory = {
    _count: CompetitionCategoryCountAggregateOutputType | null
    _min: CompetitionCategoryMinAggregateOutputType | null
    _max: CompetitionCategoryMaxAggregateOutputType | null
  }

  export type CompetitionCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetitionCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetitionCategoryCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompetitionCategoryMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetitionCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetitionCategoryCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompetitionCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionCategory to aggregate.
     */
    where?: CompetitionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionCategories to fetch.
     */
    orderBy?: CompetitionCategoryOrderByWithRelationInput | CompetitionCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompetitionCategories
    **/
    _count?: true | CompetitionCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionCategoryMaxAggregateInputType
  }

  export type GetCompetitionCategoryAggregateType<T extends CompetitionCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitionCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitionCategory[P]>
      : GetScalarType<T[P], AggregateCompetitionCategory[P]>
  }




  export type CompetitionCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionCategoryWhereInput
    orderBy?: CompetitionCategoryOrderByWithAggregationInput | CompetitionCategoryOrderByWithAggregationInput[]
    by: CompetitionCategoryScalarFieldEnum[] | CompetitionCategoryScalarFieldEnum
    having?: CompetitionCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCategoryCountAggregateInputType | true
    _min?: CompetitionCategoryMinAggregateInputType
    _max?: CompetitionCategoryMaxAggregateInputType
  }

  export type CompetitionCategoryGroupByOutputType = {
    id: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CompetitionCategoryCountAggregateOutputType | null
    _min: CompetitionCategoryMinAggregateOutputType | null
    _max: CompetitionCategoryMaxAggregateOutputType | null
  }

  type GetCompetitionCategoryGroupByPayload<T extends CompetitionCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionCategoryGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    competitions?: boolean | CompetitionCategory$competitionsArgs<ExtArgs>
    _count?: boolean | CompetitionCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionCategory"]>

  export type CompetitionCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["competitionCategory"]>

  export type CompetitionCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["competitionCategory"]>

  export type CompetitionCategorySelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompetitionCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["competitionCategory"]>
  export type CompetitionCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competitions?: boolean | CompetitionCategory$competitionsArgs<ExtArgs>
    _count?: boolean | CompetitionCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetitionCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompetitionCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompetitionCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompetitionCategory"
    objects: {
      competitions: Prisma.$CompetitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["competitionCategory"]>
    composites: {}
  }

  type CompetitionCategoryGetPayload<S extends boolean | null | undefined | CompetitionCategoryDefaultArgs> = $Result.GetResult<Prisma.$CompetitionCategoryPayload, S>

  type CompetitionCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionCategoryCountAggregateInputType | true
    }

  export interface CompetitionCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompetitionCategory'], meta: { name: 'CompetitionCategory' } }
    /**
     * Find zero or one CompetitionCategory that matches the filter.
     * @param {CompetitionCategoryFindUniqueArgs} args - Arguments to find a CompetitionCategory
     * @example
     * // Get one CompetitionCategory
     * const competitionCategory = await prisma.competitionCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionCategoryFindUniqueArgs>(args: SelectSubset<T, CompetitionCategoryFindUniqueArgs<ExtArgs>>): Prisma__CompetitionCategoryClient<$Result.GetResult<Prisma.$CompetitionCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompetitionCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionCategoryFindUniqueOrThrowArgs} args - Arguments to find a CompetitionCategory
     * @example
     * // Get one CompetitionCategory
     * const competitionCategory = await prisma.competitionCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionCategoryClient<$Result.GetResult<Prisma.$CompetitionCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCategoryFindFirstArgs} args - Arguments to find a CompetitionCategory
     * @example
     * // Get one CompetitionCategory
     * const competitionCategory = await prisma.competitionCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionCategoryFindFirstArgs>(args?: SelectSubset<T, CompetitionCategoryFindFirstArgs<ExtArgs>>): Prisma__CompetitionCategoryClient<$Result.GetResult<Prisma.$CompetitionCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCategoryFindFirstOrThrowArgs} args - Arguments to find a CompetitionCategory
     * @example
     * // Get one CompetitionCategory
     * const competitionCategory = await prisma.competitionCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionCategoryClient<$Result.GetResult<Prisma.$CompetitionCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompetitionCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompetitionCategories
     * const competitionCategories = await prisma.competitionCategory.findMany()
     * 
     * // Get first 10 CompetitionCategories
     * const competitionCategories = await prisma.competitionCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionCategoryWithIdOnly = await prisma.competitionCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionCategoryFindManyArgs>(args?: SelectSubset<T, CompetitionCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompetitionCategory.
     * @param {CompetitionCategoryCreateArgs} args - Arguments to create a CompetitionCategory.
     * @example
     * // Create one CompetitionCategory
     * const CompetitionCategory = await prisma.competitionCategory.create({
     *   data: {
     *     // ... data to create a CompetitionCategory
     *   }
     * })
     * 
     */
    create<T extends CompetitionCategoryCreateArgs>(args: SelectSubset<T, CompetitionCategoryCreateArgs<ExtArgs>>): Prisma__CompetitionCategoryClient<$Result.GetResult<Prisma.$CompetitionCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompetitionCategories.
     * @param {CompetitionCategoryCreateManyArgs} args - Arguments to create many CompetitionCategories.
     * @example
     * // Create many CompetitionCategories
     * const competitionCategory = await prisma.competitionCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionCategoryCreateManyArgs>(args?: SelectSubset<T, CompetitionCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompetitionCategories and returns the data saved in the database.
     * @param {CompetitionCategoryCreateManyAndReturnArgs} args - Arguments to create many CompetitionCategories.
     * @example
     * // Create many CompetitionCategories
     * const competitionCategory = await prisma.competitionCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompetitionCategories and only return the `id`
     * const competitionCategoryWithIdOnly = await prisma.competitionCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompetitionCategory.
     * @param {CompetitionCategoryDeleteArgs} args - Arguments to delete one CompetitionCategory.
     * @example
     * // Delete one CompetitionCategory
     * const CompetitionCategory = await prisma.competitionCategory.delete({
     *   where: {
     *     // ... filter to delete one CompetitionCategory
     *   }
     * })
     * 
     */
    delete<T extends CompetitionCategoryDeleteArgs>(args: SelectSubset<T, CompetitionCategoryDeleteArgs<ExtArgs>>): Prisma__CompetitionCategoryClient<$Result.GetResult<Prisma.$CompetitionCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompetitionCategory.
     * @param {CompetitionCategoryUpdateArgs} args - Arguments to update one CompetitionCategory.
     * @example
     * // Update one CompetitionCategory
     * const competitionCategory = await prisma.competitionCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionCategoryUpdateArgs>(args: SelectSubset<T, CompetitionCategoryUpdateArgs<ExtArgs>>): Prisma__CompetitionCategoryClient<$Result.GetResult<Prisma.$CompetitionCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompetitionCategories.
     * @param {CompetitionCategoryDeleteManyArgs} args - Arguments to filter CompetitionCategories to delete.
     * @example
     * // Delete a few CompetitionCategories
     * const { count } = await prisma.competitionCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionCategoryDeleteManyArgs>(args?: SelectSubset<T, CompetitionCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompetitionCategories
     * const competitionCategory = await prisma.competitionCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionCategoryUpdateManyArgs>(args: SelectSubset<T, CompetitionCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionCategories and returns the data updated in the database.
     * @param {CompetitionCategoryUpdateManyAndReturnArgs} args - Arguments to update many CompetitionCategories.
     * @example
     * // Update many CompetitionCategories
     * const competitionCategory = await prisma.competitionCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompetitionCategories and only return the `id`
     * const competitionCategoryWithIdOnly = await prisma.competitionCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompetitionCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompetitionCategory.
     * @param {CompetitionCategoryUpsertArgs} args - Arguments to update or create a CompetitionCategory.
     * @example
     * // Update or create a CompetitionCategory
     * const competitionCategory = await prisma.competitionCategory.upsert({
     *   create: {
     *     // ... data to create a CompetitionCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompetitionCategory we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionCategoryUpsertArgs>(args: SelectSubset<T, CompetitionCategoryUpsertArgs<ExtArgs>>): Prisma__CompetitionCategoryClient<$Result.GetResult<Prisma.$CompetitionCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompetitionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCategoryCountArgs} args - Arguments to filter CompetitionCategories to count.
     * @example
     * // Count the number of CompetitionCategories
     * const count = await prisma.competitionCategory.count({
     *   where: {
     *     // ... the filter for the CompetitionCategories we want to count
     *   }
     * })
    **/
    count<T extends CompetitionCategoryCountArgs>(
      args?: Subset<T, CompetitionCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompetitionCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitionCategoryAggregateArgs>(args: Subset<T, CompetitionCategoryAggregateArgs>): Prisma.PrismaPromise<GetCompetitionCategoryAggregateType<T>>

    /**
     * Group by CompetitionCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCategoryGroupByArgs} args - Group by arguments.
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
      T extends CompetitionCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionCategoryGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitionCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompetitionCategory model
   */
  readonly fields: CompetitionCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompetitionCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competitions<T extends CompetitionCategory$competitionsArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionCategory$competitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CompetitionCategory model
   */
  interface CompetitionCategoryFieldRefs {
    readonly id: FieldRef<"CompetitionCategory", 'String'>
    readonly name: FieldRef<"CompetitionCategory", 'String'>
    readonly isActive: FieldRef<"CompetitionCategory", 'Boolean'>
    readonly createdAt: FieldRef<"CompetitionCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"CompetitionCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompetitionCategory findUnique
   */
  export type CompetitionCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategory
     */
    select?: CompetitionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionCategory
     */
    omit?: CompetitionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionCategory to fetch.
     */
    where: CompetitionCategoryWhereUniqueInput
  }

  /**
   * CompetitionCategory findUniqueOrThrow
   */
  export type CompetitionCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategory
     */
    select?: CompetitionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionCategory
     */
    omit?: CompetitionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionCategory to fetch.
     */
    where: CompetitionCategoryWhereUniqueInput
  }

  /**
   * CompetitionCategory findFirst
   */
  export type CompetitionCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategory
     */
    select?: CompetitionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionCategory
     */
    omit?: CompetitionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionCategory to fetch.
     */
    where?: CompetitionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionCategories to fetch.
     */
    orderBy?: CompetitionCategoryOrderByWithRelationInput | CompetitionCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionCategories.
     */
    cursor?: CompetitionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionCategories.
     */
    distinct?: CompetitionCategoryScalarFieldEnum | CompetitionCategoryScalarFieldEnum[]
  }

  /**
   * CompetitionCategory findFirstOrThrow
   */
  export type CompetitionCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategory
     */
    select?: CompetitionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionCategory
     */
    omit?: CompetitionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionCategory to fetch.
     */
    where?: CompetitionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionCategories to fetch.
     */
    orderBy?: CompetitionCategoryOrderByWithRelationInput | CompetitionCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionCategories.
     */
    cursor?: CompetitionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionCategories.
     */
    distinct?: CompetitionCategoryScalarFieldEnum | CompetitionCategoryScalarFieldEnum[]
  }

  /**
   * CompetitionCategory findMany
   */
  export type CompetitionCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategory
     */
    select?: CompetitionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionCategory
     */
    omit?: CompetitionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionCategories to fetch.
     */
    where?: CompetitionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionCategories to fetch.
     */
    orderBy?: CompetitionCategoryOrderByWithRelationInput | CompetitionCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompetitionCategories.
     */
    cursor?: CompetitionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionCategories.
     */
    skip?: number
    distinct?: CompetitionCategoryScalarFieldEnum | CompetitionCategoryScalarFieldEnum[]
  }

  /**
   * CompetitionCategory create
   */
  export type CompetitionCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategory
     */
    select?: CompetitionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionCategory
     */
    omit?: CompetitionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CompetitionCategory.
     */
    data: XOR<CompetitionCategoryCreateInput, CompetitionCategoryUncheckedCreateInput>
  }

  /**
   * CompetitionCategory createMany
   */
  export type CompetitionCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompetitionCategories.
     */
    data: CompetitionCategoryCreateManyInput | CompetitionCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompetitionCategory createManyAndReturn
   */
  export type CompetitionCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategory
     */
    select?: CompetitionCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionCategory
     */
    omit?: CompetitionCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many CompetitionCategories.
     */
    data: CompetitionCategoryCreateManyInput | CompetitionCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompetitionCategory update
   */
  export type CompetitionCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategory
     */
    select?: CompetitionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionCategory
     */
    omit?: CompetitionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CompetitionCategory.
     */
    data: XOR<CompetitionCategoryUpdateInput, CompetitionCategoryUncheckedUpdateInput>
    /**
     * Choose, which CompetitionCategory to update.
     */
    where: CompetitionCategoryWhereUniqueInput
  }

  /**
   * CompetitionCategory updateMany
   */
  export type CompetitionCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompetitionCategories.
     */
    data: XOR<CompetitionCategoryUpdateManyMutationInput, CompetitionCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionCategories to update
     */
    where?: CompetitionCategoryWhereInput
    /**
     * Limit how many CompetitionCategories to update.
     */
    limit?: number
  }

  /**
   * CompetitionCategory updateManyAndReturn
   */
  export type CompetitionCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategory
     */
    select?: CompetitionCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionCategory
     */
    omit?: CompetitionCategoryOmit<ExtArgs> | null
    /**
     * The data used to update CompetitionCategories.
     */
    data: XOR<CompetitionCategoryUpdateManyMutationInput, CompetitionCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionCategories to update
     */
    where?: CompetitionCategoryWhereInput
    /**
     * Limit how many CompetitionCategories to update.
     */
    limit?: number
  }

  /**
   * CompetitionCategory upsert
   */
  export type CompetitionCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategory
     */
    select?: CompetitionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionCategory
     */
    omit?: CompetitionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CompetitionCategory to update in case it exists.
     */
    where: CompetitionCategoryWhereUniqueInput
    /**
     * In case the CompetitionCategory found by the `where` argument doesn't exist, create a new CompetitionCategory with this data.
     */
    create: XOR<CompetitionCategoryCreateInput, CompetitionCategoryUncheckedCreateInput>
    /**
     * In case the CompetitionCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionCategoryUpdateInput, CompetitionCategoryUncheckedUpdateInput>
  }

  /**
   * CompetitionCategory delete
   */
  export type CompetitionCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategory
     */
    select?: CompetitionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionCategory
     */
    omit?: CompetitionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionCategoryInclude<ExtArgs> | null
    /**
     * Filter which CompetitionCategory to delete.
     */
    where: CompetitionCategoryWhereUniqueInput
  }

  /**
   * CompetitionCategory deleteMany
   */
  export type CompetitionCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionCategories to delete
     */
    where?: CompetitionCategoryWhereInput
    /**
     * Limit how many CompetitionCategories to delete.
     */
    limit?: number
  }

  /**
   * CompetitionCategory.competitions
   */
  export type CompetitionCategory$competitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    cursor?: CompetitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * CompetitionCategory without action
   */
  export type CompetitionCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCategory
     */
    select?: CompetitionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionCategory
     */
    omit?: CompetitionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionCategoryInclude<ExtArgs> | null
  }


  /**
   * Model CompetitionLevel
   */

  export type AggregateCompetitionLevel = {
    _count: CompetitionLevelCountAggregateOutputType | null
    _avg: CompetitionLevelAvgAggregateOutputType | null
    _sum: CompetitionLevelSumAggregateOutputType | null
    _min: CompetitionLevelMinAggregateOutputType | null
    _max: CompetitionLevelMaxAggregateOutputType | null
  }

  export type CompetitionLevelAvgAggregateOutputType = {
    order: number | null
  }

  export type CompetitionLevelSumAggregateOutputType = {
    order: number | null
  }

  export type CompetitionLevelMinAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetitionLevelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetitionLevelCountAggregateOutputType = {
    id: number
    name: number
    order: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompetitionLevelAvgAggregateInputType = {
    order?: true
  }

  export type CompetitionLevelSumAggregateInputType = {
    order?: true
  }

  export type CompetitionLevelMinAggregateInputType = {
    id?: true
    name?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetitionLevelMaxAggregateInputType = {
    id?: true
    name?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetitionLevelCountAggregateInputType = {
    id?: true
    name?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompetitionLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionLevel to aggregate.
     */
    where?: CompetitionLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionLevels to fetch.
     */
    orderBy?: CompetitionLevelOrderByWithRelationInput | CompetitionLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompetitionLevels
    **/
    _count?: true | CompetitionLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionLevelMaxAggregateInputType
  }

  export type GetCompetitionLevelAggregateType<T extends CompetitionLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitionLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitionLevel[P]>
      : GetScalarType<T[P], AggregateCompetitionLevel[P]>
  }




  export type CompetitionLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionLevelWhereInput
    orderBy?: CompetitionLevelOrderByWithAggregationInput | CompetitionLevelOrderByWithAggregationInput[]
    by: CompetitionLevelScalarFieldEnum[] | CompetitionLevelScalarFieldEnum
    having?: CompetitionLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionLevelCountAggregateInputType | true
    _avg?: CompetitionLevelAvgAggregateInputType
    _sum?: CompetitionLevelSumAggregateInputType
    _min?: CompetitionLevelMinAggregateInputType
    _max?: CompetitionLevelMaxAggregateInputType
  }

  export type CompetitionLevelGroupByOutputType = {
    id: string
    name: string
    order: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CompetitionLevelCountAggregateOutputType | null
    _avg: CompetitionLevelAvgAggregateOutputType | null
    _sum: CompetitionLevelSumAggregateOutputType | null
    _min: CompetitionLevelMinAggregateOutputType | null
    _max: CompetitionLevelMaxAggregateOutputType | null
  }

  type GetCompetitionLevelGroupByPayload<T extends CompetitionLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionLevelGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionLevelGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    competitions?: boolean | CompetitionLevel$competitionsArgs<ExtArgs>
    _count?: boolean | CompetitionLevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionLevel"]>

  export type CompetitionLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["competitionLevel"]>

  export type CompetitionLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["competitionLevel"]>

  export type CompetitionLevelSelectScalar = {
    id?: boolean
    name?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompetitionLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "order" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["competitionLevel"]>
  export type CompetitionLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competitions?: boolean | CompetitionLevel$competitionsArgs<ExtArgs>
    _count?: boolean | CompetitionLevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetitionLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompetitionLevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompetitionLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompetitionLevel"
    objects: {
      competitions: Prisma.$CompetitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      order: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["competitionLevel"]>
    composites: {}
  }

  type CompetitionLevelGetPayload<S extends boolean | null | undefined | CompetitionLevelDefaultArgs> = $Result.GetResult<Prisma.$CompetitionLevelPayload, S>

  type CompetitionLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionLevelCountAggregateInputType | true
    }

  export interface CompetitionLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompetitionLevel'], meta: { name: 'CompetitionLevel' } }
    /**
     * Find zero or one CompetitionLevel that matches the filter.
     * @param {CompetitionLevelFindUniqueArgs} args - Arguments to find a CompetitionLevel
     * @example
     * // Get one CompetitionLevel
     * const competitionLevel = await prisma.competitionLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionLevelFindUniqueArgs>(args: SelectSubset<T, CompetitionLevelFindUniqueArgs<ExtArgs>>): Prisma__CompetitionLevelClient<$Result.GetResult<Prisma.$CompetitionLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompetitionLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionLevelFindUniqueOrThrowArgs} args - Arguments to find a CompetitionLevel
     * @example
     * // Get one CompetitionLevel
     * const competitionLevel = await prisma.competitionLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionLevelClient<$Result.GetResult<Prisma.$CompetitionLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionLevelFindFirstArgs} args - Arguments to find a CompetitionLevel
     * @example
     * // Get one CompetitionLevel
     * const competitionLevel = await prisma.competitionLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionLevelFindFirstArgs>(args?: SelectSubset<T, CompetitionLevelFindFirstArgs<ExtArgs>>): Prisma__CompetitionLevelClient<$Result.GetResult<Prisma.$CompetitionLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionLevelFindFirstOrThrowArgs} args - Arguments to find a CompetitionLevel
     * @example
     * // Get one CompetitionLevel
     * const competitionLevel = await prisma.competitionLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionLevelClient<$Result.GetResult<Prisma.$CompetitionLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompetitionLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompetitionLevels
     * const competitionLevels = await prisma.competitionLevel.findMany()
     * 
     * // Get first 10 CompetitionLevels
     * const competitionLevels = await prisma.competitionLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionLevelWithIdOnly = await prisma.competitionLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionLevelFindManyArgs>(args?: SelectSubset<T, CompetitionLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompetitionLevel.
     * @param {CompetitionLevelCreateArgs} args - Arguments to create a CompetitionLevel.
     * @example
     * // Create one CompetitionLevel
     * const CompetitionLevel = await prisma.competitionLevel.create({
     *   data: {
     *     // ... data to create a CompetitionLevel
     *   }
     * })
     * 
     */
    create<T extends CompetitionLevelCreateArgs>(args: SelectSubset<T, CompetitionLevelCreateArgs<ExtArgs>>): Prisma__CompetitionLevelClient<$Result.GetResult<Prisma.$CompetitionLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompetitionLevels.
     * @param {CompetitionLevelCreateManyArgs} args - Arguments to create many CompetitionLevels.
     * @example
     * // Create many CompetitionLevels
     * const competitionLevel = await prisma.competitionLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionLevelCreateManyArgs>(args?: SelectSubset<T, CompetitionLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompetitionLevels and returns the data saved in the database.
     * @param {CompetitionLevelCreateManyAndReturnArgs} args - Arguments to create many CompetitionLevels.
     * @example
     * // Create many CompetitionLevels
     * const competitionLevel = await prisma.competitionLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompetitionLevels and only return the `id`
     * const competitionLevelWithIdOnly = await prisma.competitionLevel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompetitionLevel.
     * @param {CompetitionLevelDeleteArgs} args - Arguments to delete one CompetitionLevel.
     * @example
     * // Delete one CompetitionLevel
     * const CompetitionLevel = await prisma.competitionLevel.delete({
     *   where: {
     *     // ... filter to delete one CompetitionLevel
     *   }
     * })
     * 
     */
    delete<T extends CompetitionLevelDeleteArgs>(args: SelectSubset<T, CompetitionLevelDeleteArgs<ExtArgs>>): Prisma__CompetitionLevelClient<$Result.GetResult<Prisma.$CompetitionLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompetitionLevel.
     * @param {CompetitionLevelUpdateArgs} args - Arguments to update one CompetitionLevel.
     * @example
     * // Update one CompetitionLevel
     * const competitionLevel = await prisma.competitionLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionLevelUpdateArgs>(args: SelectSubset<T, CompetitionLevelUpdateArgs<ExtArgs>>): Prisma__CompetitionLevelClient<$Result.GetResult<Prisma.$CompetitionLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompetitionLevels.
     * @param {CompetitionLevelDeleteManyArgs} args - Arguments to filter CompetitionLevels to delete.
     * @example
     * // Delete a few CompetitionLevels
     * const { count } = await prisma.competitionLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionLevelDeleteManyArgs>(args?: SelectSubset<T, CompetitionLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompetitionLevels
     * const competitionLevel = await prisma.competitionLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionLevelUpdateManyArgs>(args: SelectSubset<T, CompetitionLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionLevels and returns the data updated in the database.
     * @param {CompetitionLevelUpdateManyAndReturnArgs} args - Arguments to update many CompetitionLevels.
     * @example
     * // Update many CompetitionLevels
     * const competitionLevel = await prisma.competitionLevel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompetitionLevels and only return the `id`
     * const competitionLevelWithIdOnly = await prisma.competitionLevel.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompetitionLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompetitionLevel.
     * @param {CompetitionLevelUpsertArgs} args - Arguments to update or create a CompetitionLevel.
     * @example
     * // Update or create a CompetitionLevel
     * const competitionLevel = await prisma.competitionLevel.upsert({
     *   create: {
     *     // ... data to create a CompetitionLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompetitionLevel we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionLevelUpsertArgs>(args: SelectSubset<T, CompetitionLevelUpsertArgs<ExtArgs>>): Prisma__CompetitionLevelClient<$Result.GetResult<Prisma.$CompetitionLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompetitionLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionLevelCountArgs} args - Arguments to filter CompetitionLevels to count.
     * @example
     * // Count the number of CompetitionLevels
     * const count = await prisma.competitionLevel.count({
     *   where: {
     *     // ... the filter for the CompetitionLevels we want to count
     *   }
     * })
    **/
    count<T extends CompetitionLevelCountArgs>(
      args?: Subset<T, CompetitionLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompetitionLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitionLevelAggregateArgs>(args: Subset<T, CompetitionLevelAggregateArgs>): Prisma.PrismaPromise<GetCompetitionLevelAggregateType<T>>

    /**
     * Group by CompetitionLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionLevelGroupByArgs} args - Group by arguments.
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
      T extends CompetitionLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionLevelGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionLevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitionLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompetitionLevel model
   */
  readonly fields: CompetitionLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompetitionLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competitions<T extends CompetitionLevel$competitionsArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionLevel$competitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CompetitionLevel model
   */
  interface CompetitionLevelFieldRefs {
    readonly id: FieldRef<"CompetitionLevel", 'String'>
    readonly name: FieldRef<"CompetitionLevel", 'String'>
    readonly order: FieldRef<"CompetitionLevel", 'Int'>
    readonly isActive: FieldRef<"CompetitionLevel", 'Boolean'>
    readonly createdAt: FieldRef<"CompetitionLevel", 'DateTime'>
    readonly updatedAt: FieldRef<"CompetitionLevel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompetitionLevel findUnique
   */
  export type CompetitionLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevel
     */
    select?: CompetitionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionLevel
     */
    omit?: CompetitionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionLevelInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionLevel to fetch.
     */
    where: CompetitionLevelWhereUniqueInput
  }

  /**
   * CompetitionLevel findUniqueOrThrow
   */
  export type CompetitionLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevel
     */
    select?: CompetitionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionLevel
     */
    omit?: CompetitionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionLevelInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionLevel to fetch.
     */
    where: CompetitionLevelWhereUniqueInput
  }

  /**
   * CompetitionLevel findFirst
   */
  export type CompetitionLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevel
     */
    select?: CompetitionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionLevel
     */
    omit?: CompetitionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionLevelInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionLevel to fetch.
     */
    where?: CompetitionLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionLevels to fetch.
     */
    orderBy?: CompetitionLevelOrderByWithRelationInput | CompetitionLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionLevels.
     */
    cursor?: CompetitionLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionLevels.
     */
    distinct?: CompetitionLevelScalarFieldEnum | CompetitionLevelScalarFieldEnum[]
  }

  /**
   * CompetitionLevel findFirstOrThrow
   */
  export type CompetitionLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevel
     */
    select?: CompetitionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionLevel
     */
    omit?: CompetitionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionLevelInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionLevel to fetch.
     */
    where?: CompetitionLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionLevels to fetch.
     */
    orderBy?: CompetitionLevelOrderByWithRelationInput | CompetitionLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionLevels.
     */
    cursor?: CompetitionLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionLevels.
     */
    distinct?: CompetitionLevelScalarFieldEnum | CompetitionLevelScalarFieldEnum[]
  }

  /**
   * CompetitionLevel findMany
   */
  export type CompetitionLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevel
     */
    select?: CompetitionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionLevel
     */
    omit?: CompetitionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionLevelInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionLevels to fetch.
     */
    where?: CompetitionLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionLevels to fetch.
     */
    orderBy?: CompetitionLevelOrderByWithRelationInput | CompetitionLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompetitionLevels.
     */
    cursor?: CompetitionLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionLevels.
     */
    skip?: number
    distinct?: CompetitionLevelScalarFieldEnum | CompetitionLevelScalarFieldEnum[]
  }

  /**
   * CompetitionLevel create
   */
  export type CompetitionLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevel
     */
    select?: CompetitionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionLevel
     */
    omit?: CompetitionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a CompetitionLevel.
     */
    data: XOR<CompetitionLevelCreateInput, CompetitionLevelUncheckedCreateInput>
  }

  /**
   * CompetitionLevel createMany
   */
  export type CompetitionLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompetitionLevels.
     */
    data: CompetitionLevelCreateManyInput | CompetitionLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompetitionLevel createManyAndReturn
   */
  export type CompetitionLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevel
     */
    select?: CompetitionLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionLevel
     */
    omit?: CompetitionLevelOmit<ExtArgs> | null
    /**
     * The data used to create many CompetitionLevels.
     */
    data: CompetitionLevelCreateManyInput | CompetitionLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompetitionLevel update
   */
  export type CompetitionLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevel
     */
    select?: CompetitionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionLevel
     */
    omit?: CompetitionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a CompetitionLevel.
     */
    data: XOR<CompetitionLevelUpdateInput, CompetitionLevelUncheckedUpdateInput>
    /**
     * Choose, which CompetitionLevel to update.
     */
    where: CompetitionLevelWhereUniqueInput
  }

  /**
   * CompetitionLevel updateMany
   */
  export type CompetitionLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompetitionLevels.
     */
    data: XOR<CompetitionLevelUpdateManyMutationInput, CompetitionLevelUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionLevels to update
     */
    where?: CompetitionLevelWhereInput
    /**
     * Limit how many CompetitionLevels to update.
     */
    limit?: number
  }

  /**
   * CompetitionLevel updateManyAndReturn
   */
  export type CompetitionLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevel
     */
    select?: CompetitionLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionLevel
     */
    omit?: CompetitionLevelOmit<ExtArgs> | null
    /**
     * The data used to update CompetitionLevels.
     */
    data: XOR<CompetitionLevelUpdateManyMutationInput, CompetitionLevelUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionLevels to update
     */
    where?: CompetitionLevelWhereInput
    /**
     * Limit how many CompetitionLevels to update.
     */
    limit?: number
  }

  /**
   * CompetitionLevel upsert
   */
  export type CompetitionLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevel
     */
    select?: CompetitionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionLevel
     */
    omit?: CompetitionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the CompetitionLevel to update in case it exists.
     */
    where: CompetitionLevelWhereUniqueInput
    /**
     * In case the CompetitionLevel found by the `where` argument doesn't exist, create a new CompetitionLevel with this data.
     */
    create: XOR<CompetitionLevelCreateInput, CompetitionLevelUncheckedCreateInput>
    /**
     * In case the CompetitionLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionLevelUpdateInput, CompetitionLevelUncheckedUpdateInput>
  }

  /**
   * CompetitionLevel delete
   */
  export type CompetitionLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevel
     */
    select?: CompetitionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionLevel
     */
    omit?: CompetitionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionLevelInclude<ExtArgs> | null
    /**
     * Filter which CompetitionLevel to delete.
     */
    where: CompetitionLevelWhereUniqueInput
  }

  /**
   * CompetitionLevel deleteMany
   */
  export type CompetitionLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionLevels to delete
     */
    where?: CompetitionLevelWhereInput
    /**
     * Limit how many CompetitionLevels to delete.
     */
    limit?: number
  }

  /**
   * CompetitionLevel.competitions
   */
  export type CompetitionLevel$competitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    cursor?: CompetitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * CompetitionLevel without action
   */
  export type CompetitionLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionLevel
     */
    select?: CompetitionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionLevel
     */
    omit?: CompetitionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionLevelInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    thumbnail: string | null
    isPublished: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    thumbnail: string | null
    isPublished: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    thumbnail: number
    isPublished: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    thumbnail?: true
    isPublished?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    thumbnail?: true
    isPublished?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    thumbnail?: true
    isPublished?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    title: string
    content: string
    thumbnail: string | null
    isPublished: boolean
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    thumbnail?: boolean
    isPublished?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    thumbnail?: boolean
    isPublished?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    thumbnail?: boolean
    isPublished?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    thumbnail?: boolean
    isPublished?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "thumbnail" | "isPublished" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      thumbnail: string | null
      isPublished: boolean
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly content: FieldRef<"News", 'String'>
    readonly thumbnail: FieldRef<"News", 'String'>
    readonly isPublished: FieldRef<"News", 'Boolean'>
    readonly createdBy: FieldRef<"News", 'String'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model Competition
   */

  export type AggregateCompetition = {
    _count: CompetitionCountAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    thumbnail: string | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    categoryId: string | null
    levelId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetitionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    thumbnail: string | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    categoryId: string | null
    levelId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetitionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    thumbnail: number
    isActive: number
    startDate: number
    endDate: number
    categoryId: number
    levelId: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompetitionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    isActive?: true
    startDate?: true
    endDate?: true
    categoryId?: true
    levelId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetitionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    isActive?: true
    startDate?: true
    endDate?: true
    categoryId?: true
    levelId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetitionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    isActive?: true
    startDate?: true
    endDate?: true
    categoryId?: true
    levelId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompetitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competition to aggregate.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitions
    **/
    _count?: true | CompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionMaxAggregateInputType
  }

  export type GetCompetitionAggregateType<T extends CompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition[P]>
      : GetScalarType<T[P], AggregateCompetition[P]>
  }




  export type CompetitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithAggregationInput | CompetitionOrderByWithAggregationInput[]
    by: CompetitionScalarFieldEnum[] | CompetitionScalarFieldEnum
    having?: CompetitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCountAggregateInputType | true
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }

  export type CompetitionGroupByOutputType = {
    id: string
    title: string
    description: string | null
    thumbnail: string | null
    isActive: boolean
    startDate: Date
    endDate: Date
    categoryId: string
    levelId: string
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: CompetitionCountAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  type GetCompetitionGroupByPayload<T extends CompetitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    categoryId?: boolean
    levelId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CompetitionCategoryDefaultArgs<ExtArgs>
    level?: boolean | CompetitionLevelDefaultArgs<ExtArgs>
    guru?: boolean | UserDefaultArgs<ExtArgs>
    registrations?: boolean | Competition$registrationsArgs<ExtArgs>
    CompetitionFormField?: boolean | Competition$CompetitionFormFieldArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    categoryId?: boolean
    levelId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CompetitionCategoryDefaultArgs<ExtArgs>
    level?: boolean | CompetitionLevelDefaultArgs<ExtArgs>
    guru?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    categoryId?: boolean
    levelId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CompetitionCategoryDefaultArgs<ExtArgs>
    level?: boolean | CompetitionLevelDefaultArgs<ExtArgs>
    guru?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    categoryId?: boolean
    levelId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompetitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "thumbnail" | "isActive" | "startDate" | "endDate" | "categoryId" | "levelId" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["competition"]>
  export type CompetitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CompetitionCategoryDefaultArgs<ExtArgs>
    level?: boolean | CompetitionLevelDefaultArgs<ExtArgs>
    guru?: boolean | UserDefaultArgs<ExtArgs>
    registrations?: boolean | Competition$registrationsArgs<ExtArgs>
    CompetitionFormField?: boolean | Competition$CompetitionFormFieldArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CompetitionCategoryDefaultArgs<ExtArgs>
    level?: boolean | CompetitionLevelDefaultArgs<ExtArgs>
    guru?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompetitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CompetitionCategoryDefaultArgs<ExtArgs>
    level?: boolean | CompetitionLevelDefaultArgs<ExtArgs>
    guru?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompetitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competition"
    objects: {
      category: Prisma.$CompetitionCategoryPayload<ExtArgs>
      level: Prisma.$CompetitionLevelPayload<ExtArgs>
      guru: Prisma.$UserPayload<ExtArgs>
      registrations: Prisma.$CompetitionRegistrationPayload<ExtArgs>[]
      CompetitionFormField: Prisma.$CompetitionFormFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      thumbnail: string | null
      isActive: boolean
      startDate: Date
      endDate: Date
      categoryId: string
      levelId: string
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["competition"]>
    composites: {}
  }

  type CompetitionGetPayload<S extends boolean | null | undefined | CompetitionDefaultArgs> = $Result.GetResult<Prisma.$CompetitionPayload, S>

  type CompetitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionCountAggregateInputType | true
    }

  export interface CompetitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competition'], meta: { name: 'Competition' } }
    /**
     * Find zero or one Competition that matches the filter.
     * @param {CompetitionFindUniqueArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionFindUniqueArgs>(args: SelectSubset<T, CompetitionFindUniqueArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionFindUniqueOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionFindFirstArgs>(args?: SelectSubset<T, CompetitionFindFirstArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competition.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionWithIdOnly = await prisma.competition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionFindManyArgs>(args?: SelectSubset<T, CompetitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competition.
     * @param {CompetitionCreateArgs} args - Arguments to create a Competition.
     * @example
     * // Create one Competition
     * const Competition = await prisma.competition.create({
     *   data: {
     *     // ... data to create a Competition
     *   }
     * })
     * 
     */
    create<T extends CompetitionCreateArgs>(args: SelectSubset<T, CompetitionCreateArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competitions.
     * @param {CompetitionCreateManyArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionCreateManyArgs>(args?: SelectSubset<T, CompetitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competitions and returns the data saved in the database.
     * @param {CompetitionCreateManyAndReturnArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competition.
     * @param {CompetitionDeleteArgs} args - Arguments to delete one Competition.
     * @example
     * // Delete one Competition
     * const Competition = await prisma.competition.delete({
     *   where: {
     *     // ... filter to delete one Competition
     *   }
     * })
     * 
     */
    delete<T extends CompetitionDeleteArgs>(args: SelectSubset<T, CompetitionDeleteArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competition.
     * @param {CompetitionUpdateArgs} args - Arguments to update one Competition.
     * @example
     * // Update one Competition
     * const competition = await prisma.competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionUpdateArgs>(args: SelectSubset<T, CompetitionUpdateArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competitions.
     * @param {CompetitionDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionDeleteManyArgs>(args?: SelectSubset<T, CompetitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionUpdateManyArgs>(args: SelectSubset<T, CompetitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions and returns the data updated in the database.
     * @param {CompetitionUpdateManyAndReturnArgs} args - Arguments to update many Competitions.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompetitionUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competition.
     * @param {CompetitionUpsertArgs} args - Arguments to update or create a Competition.
     * @example
     * // Update or create a Competition
     * const competition = await prisma.competition.upsert({
     *   create: {
     *     // ... data to create a Competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionUpsertArgs>(args: SelectSubset<T, CompetitionUpsertArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competition.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends CompetitionCountArgs>(
      args?: Subset<T, CompetitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitionAggregateArgs>(args: Subset<T, CompetitionAggregateArgs>): Prisma.PrismaPromise<GetCompetitionAggregateType<T>>

    /**
     * Group by Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionGroupByArgs} args - Group by arguments.
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
      T extends CompetitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competition model
   */
  readonly fields: CompetitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CompetitionCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionCategoryDefaultArgs<ExtArgs>>): Prisma__CompetitionCategoryClient<$Result.GetResult<Prisma.$CompetitionCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    level<T extends CompetitionLevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionLevelDefaultArgs<ExtArgs>>): Prisma__CompetitionLevelClient<$Result.GetResult<Prisma.$CompetitionLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guru<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registrations<T extends Competition$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Competition$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CompetitionFormField<T extends Competition$CompetitionFormFieldArgs<ExtArgs> = {}>(args?: Subset<T, Competition$CompetitionFormFieldArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Competition model
   */
  interface CompetitionFieldRefs {
    readonly id: FieldRef<"Competition", 'String'>
    readonly title: FieldRef<"Competition", 'String'>
    readonly description: FieldRef<"Competition", 'String'>
    readonly thumbnail: FieldRef<"Competition", 'String'>
    readonly isActive: FieldRef<"Competition", 'Boolean'>
    readonly startDate: FieldRef<"Competition", 'DateTime'>
    readonly endDate: FieldRef<"Competition", 'DateTime'>
    readonly categoryId: FieldRef<"Competition", 'String'>
    readonly levelId: FieldRef<"Competition", 'String'>
    readonly createdBy: FieldRef<"Competition", 'String'>
    readonly createdAt: FieldRef<"Competition", 'DateTime'>
    readonly updatedAt: FieldRef<"Competition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Competition findUnique
   */
  export type CompetitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findUniqueOrThrow
   */
  export type CompetitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findFirst
   */
  export type CompetitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition findFirstOrThrow
   */
  export type CompetitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition findMany
   */
  export type CompetitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competitions to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition create
   */
  export type CompetitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Competition.
     */
    data: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
  }

  /**
   * Competition createMany
   */
  export type CompetitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competition createManyAndReturn
   */
  export type CompetitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Competition update
   */
  export type CompetitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Competition.
     */
    data: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
    /**
     * Choose, which Competition to update.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition updateMany
   */
  export type CompetitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
  }

  /**
   * Competition updateManyAndReturn
   */
  export type CompetitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Competition upsert
   */
  export type CompetitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Competition to update in case it exists.
     */
    where: CompetitionWhereUniqueInput
    /**
     * In case the Competition found by the `where` argument doesn't exist, create a new Competition with this data.
     */
    create: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
    /**
     * In case the Competition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
  }

  /**
   * Competition delete
   */
  export type CompetitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter which Competition to delete.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition deleteMany
   */
  export type CompetitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitions to delete
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to delete.
     */
    limit?: number
  }

  /**
   * Competition.registrations
   */
  export type Competition$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationInclude<ExtArgs> | null
    where?: CompetitionRegistrationWhereInput
    orderBy?: CompetitionRegistrationOrderByWithRelationInput | CompetitionRegistrationOrderByWithRelationInput[]
    cursor?: CompetitionRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionRegistrationScalarFieldEnum | CompetitionRegistrationScalarFieldEnum[]
  }

  /**
   * Competition.CompetitionFormField
   */
  export type Competition$CompetitionFormFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldInclude<ExtArgs> | null
    where?: CompetitionFormFieldWhereInput
    orderBy?: CompetitionFormFieldOrderByWithRelationInput | CompetitionFormFieldOrderByWithRelationInput[]
    cursor?: CompetitionFormFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionFormFieldScalarFieldEnum | CompetitionFormFieldScalarFieldEnum[]
  }

  /**
   * Competition without action
   */
  export type CompetitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
  }


  /**
   * Model CompetitionRegistration
   */

  export type AggregateCompetitionRegistration = {
    _count: CompetitionRegistrationCountAggregateOutputType | null
    _min: CompetitionRegistrationMinAggregateOutputType | null
    _max: CompetitionRegistrationMaxAggregateOutputType | null
  }

  export type CompetitionRegistrationMinAggregateOutputType = {
    id: string | null
    competitionId: string | null
    studentId: string | null
    status: $Enums.RegistrationStatus | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetitionRegistrationMaxAggregateOutputType = {
    id: string | null
    competitionId: string | null
    studentId: string | null
    status: $Enums.RegistrationStatus | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetitionRegistrationCountAggregateOutputType = {
    id: number
    competitionId: number
    studentId: number
    status: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompetitionRegistrationMinAggregateInputType = {
    id?: true
    competitionId?: true
    studentId?: true
    status?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetitionRegistrationMaxAggregateInputType = {
    id?: true
    competitionId?: true
    studentId?: true
    status?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetitionRegistrationCountAggregateInputType = {
    id?: true
    competitionId?: true
    studentId?: true
    status?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompetitionRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionRegistration to aggregate.
     */
    where?: CompetitionRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionRegistrations to fetch.
     */
    orderBy?: CompetitionRegistrationOrderByWithRelationInput | CompetitionRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompetitionRegistrations
    **/
    _count?: true | CompetitionRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionRegistrationMaxAggregateInputType
  }

  export type GetCompetitionRegistrationAggregateType<T extends CompetitionRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitionRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitionRegistration[P]>
      : GetScalarType<T[P], AggregateCompetitionRegistration[P]>
  }




  export type CompetitionRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionRegistrationWhereInput
    orderBy?: CompetitionRegistrationOrderByWithAggregationInput | CompetitionRegistrationOrderByWithAggregationInput[]
    by: CompetitionRegistrationScalarFieldEnum[] | CompetitionRegistrationScalarFieldEnum
    having?: CompetitionRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionRegistrationCountAggregateInputType | true
    _min?: CompetitionRegistrationMinAggregateInputType
    _max?: CompetitionRegistrationMaxAggregateInputType
  }

  export type CompetitionRegistrationGroupByOutputType = {
    id: string
    competitionId: string
    studentId: string
    status: $Enums.RegistrationStatus
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompetitionRegistrationCountAggregateOutputType | null
    _min: CompetitionRegistrationMinAggregateOutputType | null
    _max: CompetitionRegistrationMaxAggregateOutputType | null
  }

  type GetCompetitionRegistrationGroupByPayload<T extends CompetitionRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    studentId?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    answers?: boolean | CompetitionRegistration$answersArgs<ExtArgs>
    _count?: boolean | CompetitionRegistrationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionRegistration"]>

  export type CompetitionRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    studentId?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionRegistration"]>

  export type CompetitionRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    studentId?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionRegistration"]>

  export type CompetitionRegistrationSelectScalar = {
    id?: boolean
    competitionId?: boolean
    studentId?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompetitionRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "competitionId" | "studentId" | "status" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["competitionRegistration"]>
  export type CompetitionRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    answers?: boolean | CompetitionRegistration$answersArgs<ExtArgs>
    _count?: boolean | CompetitionRegistrationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetitionRegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type CompetitionRegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $CompetitionRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompetitionRegistration"
    objects: {
      competition: Prisma.$CompetitionPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
      answers: Prisma.$RegistrationAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      competitionId: string
      studentId: string
      status: $Enums.RegistrationStatus
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["competitionRegistration"]>
    composites: {}
  }

  type CompetitionRegistrationGetPayload<S extends boolean | null | undefined | CompetitionRegistrationDefaultArgs> = $Result.GetResult<Prisma.$CompetitionRegistrationPayload, S>

  type CompetitionRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionRegistrationCountAggregateInputType | true
    }

  export interface CompetitionRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompetitionRegistration'], meta: { name: 'CompetitionRegistration' } }
    /**
     * Find zero or one CompetitionRegistration that matches the filter.
     * @param {CompetitionRegistrationFindUniqueArgs} args - Arguments to find a CompetitionRegistration
     * @example
     * // Get one CompetitionRegistration
     * const competitionRegistration = await prisma.competitionRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionRegistrationFindUniqueArgs>(args: SelectSubset<T, CompetitionRegistrationFindUniqueArgs<ExtArgs>>): Prisma__CompetitionRegistrationClient<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompetitionRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionRegistrationFindUniqueOrThrowArgs} args - Arguments to find a CompetitionRegistration
     * @example
     * // Get one CompetitionRegistration
     * const competitionRegistration = await prisma.competitionRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionRegistrationClient<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionRegistrationFindFirstArgs} args - Arguments to find a CompetitionRegistration
     * @example
     * // Get one CompetitionRegistration
     * const competitionRegistration = await prisma.competitionRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionRegistrationFindFirstArgs>(args?: SelectSubset<T, CompetitionRegistrationFindFirstArgs<ExtArgs>>): Prisma__CompetitionRegistrationClient<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionRegistrationFindFirstOrThrowArgs} args - Arguments to find a CompetitionRegistration
     * @example
     * // Get one CompetitionRegistration
     * const competitionRegistration = await prisma.competitionRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionRegistrationClient<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompetitionRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompetitionRegistrations
     * const competitionRegistrations = await prisma.competitionRegistration.findMany()
     * 
     * // Get first 10 CompetitionRegistrations
     * const competitionRegistrations = await prisma.competitionRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionRegistrationWithIdOnly = await prisma.competitionRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionRegistrationFindManyArgs>(args?: SelectSubset<T, CompetitionRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompetitionRegistration.
     * @param {CompetitionRegistrationCreateArgs} args - Arguments to create a CompetitionRegistration.
     * @example
     * // Create one CompetitionRegistration
     * const CompetitionRegistration = await prisma.competitionRegistration.create({
     *   data: {
     *     // ... data to create a CompetitionRegistration
     *   }
     * })
     * 
     */
    create<T extends CompetitionRegistrationCreateArgs>(args: SelectSubset<T, CompetitionRegistrationCreateArgs<ExtArgs>>): Prisma__CompetitionRegistrationClient<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompetitionRegistrations.
     * @param {CompetitionRegistrationCreateManyArgs} args - Arguments to create many CompetitionRegistrations.
     * @example
     * // Create many CompetitionRegistrations
     * const competitionRegistration = await prisma.competitionRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionRegistrationCreateManyArgs>(args?: SelectSubset<T, CompetitionRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompetitionRegistrations and returns the data saved in the database.
     * @param {CompetitionRegistrationCreateManyAndReturnArgs} args - Arguments to create many CompetitionRegistrations.
     * @example
     * // Create many CompetitionRegistrations
     * const competitionRegistration = await prisma.competitionRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompetitionRegistrations and only return the `id`
     * const competitionRegistrationWithIdOnly = await prisma.competitionRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompetitionRegistration.
     * @param {CompetitionRegistrationDeleteArgs} args - Arguments to delete one CompetitionRegistration.
     * @example
     * // Delete one CompetitionRegistration
     * const CompetitionRegistration = await prisma.competitionRegistration.delete({
     *   where: {
     *     // ... filter to delete one CompetitionRegistration
     *   }
     * })
     * 
     */
    delete<T extends CompetitionRegistrationDeleteArgs>(args: SelectSubset<T, CompetitionRegistrationDeleteArgs<ExtArgs>>): Prisma__CompetitionRegistrationClient<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompetitionRegistration.
     * @param {CompetitionRegistrationUpdateArgs} args - Arguments to update one CompetitionRegistration.
     * @example
     * // Update one CompetitionRegistration
     * const competitionRegistration = await prisma.competitionRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionRegistrationUpdateArgs>(args: SelectSubset<T, CompetitionRegistrationUpdateArgs<ExtArgs>>): Prisma__CompetitionRegistrationClient<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompetitionRegistrations.
     * @param {CompetitionRegistrationDeleteManyArgs} args - Arguments to filter CompetitionRegistrations to delete.
     * @example
     * // Delete a few CompetitionRegistrations
     * const { count } = await prisma.competitionRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionRegistrationDeleteManyArgs>(args?: SelectSubset<T, CompetitionRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompetitionRegistrations
     * const competitionRegistration = await prisma.competitionRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionRegistrationUpdateManyArgs>(args: SelectSubset<T, CompetitionRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionRegistrations and returns the data updated in the database.
     * @param {CompetitionRegistrationUpdateManyAndReturnArgs} args - Arguments to update many CompetitionRegistrations.
     * @example
     * // Update many CompetitionRegistrations
     * const competitionRegistration = await prisma.competitionRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompetitionRegistrations and only return the `id`
     * const competitionRegistrationWithIdOnly = await prisma.competitionRegistration.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompetitionRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompetitionRegistration.
     * @param {CompetitionRegistrationUpsertArgs} args - Arguments to update or create a CompetitionRegistration.
     * @example
     * // Update or create a CompetitionRegistration
     * const competitionRegistration = await prisma.competitionRegistration.upsert({
     *   create: {
     *     // ... data to create a CompetitionRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompetitionRegistration we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionRegistrationUpsertArgs>(args: SelectSubset<T, CompetitionRegistrationUpsertArgs<ExtArgs>>): Prisma__CompetitionRegistrationClient<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompetitionRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionRegistrationCountArgs} args - Arguments to filter CompetitionRegistrations to count.
     * @example
     * // Count the number of CompetitionRegistrations
     * const count = await prisma.competitionRegistration.count({
     *   where: {
     *     // ... the filter for the CompetitionRegistrations we want to count
     *   }
     * })
    **/
    count<T extends CompetitionRegistrationCountArgs>(
      args?: Subset<T, CompetitionRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompetitionRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitionRegistrationAggregateArgs>(args: Subset<T, CompetitionRegistrationAggregateArgs>): Prisma.PrismaPromise<GetCompetitionRegistrationAggregateType<T>>

    /**
     * Group by CompetitionRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionRegistrationGroupByArgs} args - Group by arguments.
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
      T extends CompetitionRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionRegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitionRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompetitionRegistration model
   */
  readonly fields: CompetitionRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompetitionRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competition<T extends CompetitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionDefaultArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends CompetitionRegistration$answersArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionRegistration$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CompetitionRegistration model
   */
  interface CompetitionRegistrationFieldRefs {
    readonly id: FieldRef<"CompetitionRegistration", 'String'>
    readonly competitionId: FieldRef<"CompetitionRegistration", 'String'>
    readonly studentId: FieldRef<"CompetitionRegistration", 'String'>
    readonly status: FieldRef<"CompetitionRegistration", 'RegistrationStatus'>
    readonly note: FieldRef<"CompetitionRegistration", 'String'>
    readonly createdAt: FieldRef<"CompetitionRegistration", 'DateTime'>
    readonly updatedAt: FieldRef<"CompetitionRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompetitionRegistration findUnique
   */
  export type CompetitionRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionRegistration to fetch.
     */
    where: CompetitionRegistrationWhereUniqueInput
  }

  /**
   * CompetitionRegistration findUniqueOrThrow
   */
  export type CompetitionRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionRegistration to fetch.
     */
    where: CompetitionRegistrationWhereUniqueInput
  }

  /**
   * CompetitionRegistration findFirst
   */
  export type CompetitionRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionRegistration to fetch.
     */
    where?: CompetitionRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionRegistrations to fetch.
     */
    orderBy?: CompetitionRegistrationOrderByWithRelationInput | CompetitionRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionRegistrations.
     */
    cursor?: CompetitionRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionRegistrations.
     */
    distinct?: CompetitionRegistrationScalarFieldEnum | CompetitionRegistrationScalarFieldEnum[]
  }

  /**
   * CompetitionRegistration findFirstOrThrow
   */
  export type CompetitionRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionRegistration to fetch.
     */
    where?: CompetitionRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionRegistrations to fetch.
     */
    orderBy?: CompetitionRegistrationOrderByWithRelationInput | CompetitionRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionRegistrations.
     */
    cursor?: CompetitionRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionRegistrations.
     */
    distinct?: CompetitionRegistrationScalarFieldEnum | CompetitionRegistrationScalarFieldEnum[]
  }

  /**
   * CompetitionRegistration findMany
   */
  export type CompetitionRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionRegistrations to fetch.
     */
    where?: CompetitionRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionRegistrations to fetch.
     */
    orderBy?: CompetitionRegistrationOrderByWithRelationInput | CompetitionRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompetitionRegistrations.
     */
    cursor?: CompetitionRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionRegistrations.
     */
    skip?: number
    distinct?: CompetitionRegistrationScalarFieldEnum | CompetitionRegistrationScalarFieldEnum[]
  }

  /**
   * CompetitionRegistration create
   */
  export type CompetitionRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a CompetitionRegistration.
     */
    data: XOR<CompetitionRegistrationCreateInput, CompetitionRegistrationUncheckedCreateInput>
  }

  /**
   * CompetitionRegistration createMany
   */
  export type CompetitionRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompetitionRegistrations.
     */
    data: CompetitionRegistrationCreateManyInput | CompetitionRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompetitionRegistration createManyAndReturn
   */
  export type CompetitionRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many CompetitionRegistrations.
     */
    data: CompetitionRegistrationCreateManyInput | CompetitionRegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompetitionRegistration update
   */
  export type CompetitionRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a CompetitionRegistration.
     */
    data: XOR<CompetitionRegistrationUpdateInput, CompetitionRegistrationUncheckedUpdateInput>
    /**
     * Choose, which CompetitionRegistration to update.
     */
    where: CompetitionRegistrationWhereUniqueInput
  }

  /**
   * CompetitionRegistration updateMany
   */
  export type CompetitionRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompetitionRegistrations.
     */
    data: XOR<CompetitionRegistrationUpdateManyMutationInput, CompetitionRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionRegistrations to update
     */
    where?: CompetitionRegistrationWhereInput
    /**
     * Limit how many CompetitionRegistrations to update.
     */
    limit?: number
  }

  /**
   * CompetitionRegistration updateManyAndReturn
   */
  export type CompetitionRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update CompetitionRegistrations.
     */
    data: XOR<CompetitionRegistrationUpdateManyMutationInput, CompetitionRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionRegistrations to update
     */
    where?: CompetitionRegistrationWhereInput
    /**
     * Limit how many CompetitionRegistrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompetitionRegistration upsert
   */
  export type CompetitionRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the CompetitionRegistration to update in case it exists.
     */
    where: CompetitionRegistrationWhereUniqueInput
    /**
     * In case the CompetitionRegistration found by the `where` argument doesn't exist, create a new CompetitionRegistration with this data.
     */
    create: XOR<CompetitionRegistrationCreateInput, CompetitionRegistrationUncheckedCreateInput>
    /**
     * In case the CompetitionRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionRegistrationUpdateInput, CompetitionRegistrationUncheckedUpdateInput>
  }

  /**
   * CompetitionRegistration delete
   */
  export type CompetitionRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationInclude<ExtArgs> | null
    /**
     * Filter which CompetitionRegistration to delete.
     */
    where: CompetitionRegistrationWhereUniqueInput
  }

  /**
   * CompetitionRegistration deleteMany
   */
  export type CompetitionRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionRegistrations to delete
     */
    where?: CompetitionRegistrationWhereInput
    /**
     * Limit how many CompetitionRegistrations to delete.
     */
    limit?: number
  }

  /**
   * CompetitionRegistration.answers
   */
  export type CompetitionRegistration$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerInclude<ExtArgs> | null
    where?: RegistrationAnswerWhereInput
    orderBy?: RegistrationAnswerOrderByWithRelationInput | RegistrationAnswerOrderByWithRelationInput[]
    cursor?: RegistrationAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationAnswerScalarFieldEnum | RegistrationAnswerScalarFieldEnum[]
  }

  /**
   * CompetitionRegistration without action
   */
  export type CompetitionRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionRegistration
     */
    select?: CompetitionRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionRegistration
     */
    omit?: CompetitionRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionRegistrationInclude<ExtArgs> | null
  }


  /**
   * Model CompetitionFormField
   */

  export type AggregateCompetitionFormField = {
    _count: CompetitionFormFieldCountAggregateOutputType | null
    _avg: CompetitionFormFieldAvgAggregateOutputType | null
    _sum: CompetitionFormFieldSumAggregateOutputType | null
    _min: CompetitionFormFieldMinAggregateOutputType | null
    _max: CompetitionFormFieldMaxAggregateOutputType | null
  }

  export type CompetitionFormFieldAvgAggregateOutputType = {
    order: number | null
  }

  export type CompetitionFormFieldSumAggregateOutputType = {
    order: number | null
  }

  export type CompetitionFormFieldMinAggregateOutputType = {
    id: string | null
    competitionId: string | null
    label: string | null
    fieldType: $Enums.FieldType | null
    isRequired: boolean | null
    order: number | null
    createdAt: Date | null
  }

  export type CompetitionFormFieldMaxAggregateOutputType = {
    id: string | null
    competitionId: string | null
    label: string | null
    fieldType: $Enums.FieldType | null
    isRequired: boolean | null
    order: number | null
    createdAt: Date | null
  }

  export type CompetitionFormFieldCountAggregateOutputType = {
    id: number
    competitionId: number
    label: number
    fieldType: number
    isRequired: number
    options: number
    order: number
    createdAt: number
    _all: number
  }


  export type CompetitionFormFieldAvgAggregateInputType = {
    order?: true
  }

  export type CompetitionFormFieldSumAggregateInputType = {
    order?: true
  }

  export type CompetitionFormFieldMinAggregateInputType = {
    id?: true
    competitionId?: true
    label?: true
    fieldType?: true
    isRequired?: true
    order?: true
    createdAt?: true
  }

  export type CompetitionFormFieldMaxAggregateInputType = {
    id?: true
    competitionId?: true
    label?: true
    fieldType?: true
    isRequired?: true
    order?: true
    createdAt?: true
  }

  export type CompetitionFormFieldCountAggregateInputType = {
    id?: true
    competitionId?: true
    label?: true
    fieldType?: true
    isRequired?: true
    options?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type CompetitionFormFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionFormField to aggregate.
     */
    where?: CompetitionFormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionFormFields to fetch.
     */
    orderBy?: CompetitionFormFieldOrderByWithRelationInput | CompetitionFormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionFormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionFormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionFormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompetitionFormFields
    **/
    _count?: true | CompetitionFormFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionFormFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionFormFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionFormFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionFormFieldMaxAggregateInputType
  }

  export type GetCompetitionFormFieldAggregateType<T extends CompetitionFormFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitionFormField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitionFormField[P]>
      : GetScalarType<T[P], AggregateCompetitionFormField[P]>
  }




  export type CompetitionFormFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionFormFieldWhereInput
    orderBy?: CompetitionFormFieldOrderByWithAggregationInput | CompetitionFormFieldOrderByWithAggregationInput[]
    by: CompetitionFormFieldScalarFieldEnum[] | CompetitionFormFieldScalarFieldEnum
    having?: CompetitionFormFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionFormFieldCountAggregateInputType | true
    _avg?: CompetitionFormFieldAvgAggregateInputType
    _sum?: CompetitionFormFieldSumAggregateInputType
    _min?: CompetitionFormFieldMinAggregateInputType
    _max?: CompetitionFormFieldMaxAggregateInputType
  }

  export type CompetitionFormFieldGroupByOutputType = {
    id: string
    competitionId: string
    label: string
    fieldType: $Enums.FieldType
    isRequired: boolean
    options: JsonValue | null
    order: number
    createdAt: Date
    _count: CompetitionFormFieldCountAggregateOutputType | null
    _avg: CompetitionFormFieldAvgAggregateOutputType | null
    _sum: CompetitionFormFieldSumAggregateOutputType | null
    _min: CompetitionFormFieldMinAggregateOutputType | null
    _max: CompetitionFormFieldMaxAggregateOutputType | null
  }

  type GetCompetitionFormFieldGroupByPayload<T extends CompetitionFormFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionFormFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionFormFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionFormFieldGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionFormFieldGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionFormFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    label?: boolean
    fieldType?: boolean
    isRequired?: boolean
    options?: boolean
    order?: boolean
    createdAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    registrationAnswer?: boolean | CompetitionFormField$registrationAnswerArgs<ExtArgs>
    _count?: boolean | CompetitionFormFieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionFormField"]>

  export type CompetitionFormFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    label?: boolean
    fieldType?: boolean
    isRequired?: boolean
    options?: boolean
    order?: boolean
    createdAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionFormField"]>

  export type CompetitionFormFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    label?: boolean
    fieldType?: boolean
    isRequired?: boolean
    options?: boolean
    order?: boolean
    createdAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionFormField"]>

  export type CompetitionFormFieldSelectScalar = {
    id?: boolean
    competitionId?: boolean
    label?: boolean
    fieldType?: boolean
    isRequired?: boolean
    options?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type CompetitionFormFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "competitionId" | "label" | "fieldType" | "isRequired" | "options" | "order" | "createdAt", ExtArgs["result"]["competitionFormField"]>
  export type CompetitionFormFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    registrationAnswer?: boolean | CompetitionFormField$registrationAnswerArgs<ExtArgs>
    _count?: boolean | CompetitionFormFieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetitionFormFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }
  export type CompetitionFormFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }

  export type $CompetitionFormFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompetitionFormField"
    objects: {
      competition: Prisma.$CompetitionPayload<ExtArgs>
      registrationAnswer: Prisma.$RegistrationAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      competitionId: string
      label: string
      fieldType: $Enums.FieldType
      isRequired: boolean
      options: Prisma.JsonValue | null
      order: number
      createdAt: Date
    }, ExtArgs["result"]["competitionFormField"]>
    composites: {}
  }

  type CompetitionFormFieldGetPayload<S extends boolean | null | undefined | CompetitionFormFieldDefaultArgs> = $Result.GetResult<Prisma.$CompetitionFormFieldPayload, S>

  type CompetitionFormFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionFormFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionFormFieldCountAggregateInputType | true
    }

  export interface CompetitionFormFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompetitionFormField'], meta: { name: 'CompetitionFormField' } }
    /**
     * Find zero or one CompetitionFormField that matches the filter.
     * @param {CompetitionFormFieldFindUniqueArgs} args - Arguments to find a CompetitionFormField
     * @example
     * // Get one CompetitionFormField
     * const competitionFormField = await prisma.competitionFormField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionFormFieldFindUniqueArgs>(args: SelectSubset<T, CompetitionFormFieldFindUniqueArgs<ExtArgs>>): Prisma__CompetitionFormFieldClient<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompetitionFormField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionFormFieldFindUniqueOrThrowArgs} args - Arguments to find a CompetitionFormField
     * @example
     * // Get one CompetitionFormField
     * const competitionFormField = await prisma.competitionFormField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionFormFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionFormFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionFormFieldClient<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionFormField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFormFieldFindFirstArgs} args - Arguments to find a CompetitionFormField
     * @example
     * // Get one CompetitionFormField
     * const competitionFormField = await prisma.competitionFormField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionFormFieldFindFirstArgs>(args?: SelectSubset<T, CompetitionFormFieldFindFirstArgs<ExtArgs>>): Prisma__CompetitionFormFieldClient<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionFormField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFormFieldFindFirstOrThrowArgs} args - Arguments to find a CompetitionFormField
     * @example
     * // Get one CompetitionFormField
     * const competitionFormField = await prisma.competitionFormField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionFormFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionFormFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionFormFieldClient<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompetitionFormFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFormFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompetitionFormFields
     * const competitionFormFields = await prisma.competitionFormField.findMany()
     * 
     * // Get first 10 CompetitionFormFields
     * const competitionFormFields = await prisma.competitionFormField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionFormFieldWithIdOnly = await prisma.competitionFormField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionFormFieldFindManyArgs>(args?: SelectSubset<T, CompetitionFormFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompetitionFormField.
     * @param {CompetitionFormFieldCreateArgs} args - Arguments to create a CompetitionFormField.
     * @example
     * // Create one CompetitionFormField
     * const CompetitionFormField = await prisma.competitionFormField.create({
     *   data: {
     *     // ... data to create a CompetitionFormField
     *   }
     * })
     * 
     */
    create<T extends CompetitionFormFieldCreateArgs>(args: SelectSubset<T, CompetitionFormFieldCreateArgs<ExtArgs>>): Prisma__CompetitionFormFieldClient<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompetitionFormFields.
     * @param {CompetitionFormFieldCreateManyArgs} args - Arguments to create many CompetitionFormFields.
     * @example
     * // Create many CompetitionFormFields
     * const competitionFormField = await prisma.competitionFormField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionFormFieldCreateManyArgs>(args?: SelectSubset<T, CompetitionFormFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompetitionFormFields and returns the data saved in the database.
     * @param {CompetitionFormFieldCreateManyAndReturnArgs} args - Arguments to create many CompetitionFormFields.
     * @example
     * // Create many CompetitionFormFields
     * const competitionFormField = await prisma.competitionFormField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompetitionFormFields and only return the `id`
     * const competitionFormFieldWithIdOnly = await prisma.competitionFormField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionFormFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionFormFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompetitionFormField.
     * @param {CompetitionFormFieldDeleteArgs} args - Arguments to delete one CompetitionFormField.
     * @example
     * // Delete one CompetitionFormField
     * const CompetitionFormField = await prisma.competitionFormField.delete({
     *   where: {
     *     // ... filter to delete one CompetitionFormField
     *   }
     * })
     * 
     */
    delete<T extends CompetitionFormFieldDeleteArgs>(args: SelectSubset<T, CompetitionFormFieldDeleteArgs<ExtArgs>>): Prisma__CompetitionFormFieldClient<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompetitionFormField.
     * @param {CompetitionFormFieldUpdateArgs} args - Arguments to update one CompetitionFormField.
     * @example
     * // Update one CompetitionFormField
     * const competitionFormField = await prisma.competitionFormField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionFormFieldUpdateArgs>(args: SelectSubset<T, CompetitionFormFieldUpdateArgs<ExtArgs>>): Prisma__CompetitionFormFieldClient<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompetitionFormFields.
     * @param {CompetitionFormFieldDeleteManyArgs} args - Arguments to filter CompetitionFormFields to delete.
     * @example
     * // Delete a few CompetitionFormFields
     * const { count } = await prisma.competitionFormField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionFormFieldDeleteManyArgs>(args?: SelectSubset<T, CompetitionFormFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionFormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFormFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompetitionFormFields
     * const competitionFormField = await prisma.competitionFormField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionFormFieldUpdateManyArgs>(args: SelectSubset<T, CompetitionFormFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionFormFields and returns the data updated in the database.
     * @param {CompetitionFormFieldUpdateManyAndReturnArgs} args - Arguments to update many CompetitionFormFields.
     * @example
     * // Update many CompetitionFormFields
     * const competitionFormField = await prisma.competitionFormField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompetitionFormFields and only return the `id`
     * const competitionFormFieldWithIdOnly = await prisma.competitionFormField.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompetitionFormFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionFormFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompetitionFormField.
     * @param {CompetitionFormFieldUpsertArgs} args - Arguments to update or create a CompetitionFormField.
     * @example
     * // Update or create a CompetitionFormField
     * const competitionFormField = await prisma.competitionFormField.upsert({
     *   create: {
     *     // ... data to create a CompetitionFormField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompetitionFormField we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionFormFieldUpsertArgs>(args: SelectSubset<T, CompetitionFormFieldUpsertArgs<ExtArgs>>): Prisma__CompetitionFormFieldClient<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompetitionFormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFormFieldCountArgs} args - Arguments to filter CompetitionFormFields to count.
     * @example
     * // Count the number of CompetitionFormFields
     * const count = await prisma.competitionFormField.count({
     *   where: {
     *     // ... the filter for the CompetitionFormFields we want to count
     *   }
     * })
    **/
    count<T extends CompetitionFormFieldCountArgs>(
      args?: Subset<T, CompetitionFormFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionFormFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompetitionFormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFormFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitionFormFieldAggregateArgs>(args: Subset<T, CompetitionFormFieldAggregateArgs>): Prisma.PrismaPromise<GetCompetitionFormFieldAggregateType<T>>

    /**
     * Group by CompetitionFormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFormFieldGroupByArgs} args - Group by arguments.
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
      T extends CompetitionFormFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionFormFieldGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionFormFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitionFormFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionFormFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompetitionFormField model
   */
  readonly fields: CompetitionFormFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompetitionFormField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionFormFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competition<T extends CompetitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionDefaultArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registrationAnswer<T extends CompetitionFormField$registrationAnswerArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionFormField$registrationAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CompetitionFormField model
   */
  interface CompetitionFormFieldFieldRefs {
    readonly id: FieldRef<"CompetitionFormField", 'String'>
    readonly competitionId: FieldRef<"CompetitionFormField", 'String'>
    readonly label: FieldRef<"CompetitionFormField", 'String'>
    readonly fieldType: FieldRef<"CompetitionFormField", 'FieldType'>
    readonly isRequired: FieldRef<"CompetitionFormField", 'Boolean'>
    readonly options: FieldRef<"CompetitionFormField", 'Json'>
    readonly order: FieldRef<"CompetitionFormField", 'Int'>
    readonly createdAt: FieldRef<"CompetitionFormField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompetitionFormField findUnique
   */
  export type CompetitionFormFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionFormField to fetch.
     */
    where: CompetitionFormFieldWhereUniqueInput
  }

  /**
   * CompetitionFormField findUniqueOrThrow
   */
  export type CompetitionFormFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionFormField to fetch.
     */
    where: CompetitionFormFieldWhereUniqueInput
  }

  /**
   * CompetitionFormField findFirst
   */
  export type CompetitionFormFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionFormField to fetch.
     */
    where?: CompetitionFormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionFormFields to fetch.
     */
    orderBy?: CompetitionFormFieldOrderByWithRelationInput | CompetitionFormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionFormFields.
     */
    cursor?: CompetitionFormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionFormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionFormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionFormFields.
     */
    distinct?: CompetitionFormFieldScalarFieldEnum | CompetitionFormFieldScalarFieldEnum[]
  }

  /**
   * CompetitionFormField findFirstOrThrow
   */
  export type CompetitionFormFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionFormField to fetch.
     */
    where?: CompetitionFormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionFormFields to fetch.
     */
    orderBy?: CompetitionFormFieldOrderByWithRelationInput | CompetitionFormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionFormFields.
     */
    cursor?: CompetitionFormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionFormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionFormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionFormFields.
     */
    distinct?: CompetitionFormFieldScalarFieldEnum | CompetitionFormFieldScalarFieldEnum[]
  }

  /**
   * CompetitionFormField findMany
   */
  export type CompetitionFormFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionFormFields to fetch.
     */
    where?: CompetitionFormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionFormFields to fetch.
     */
    orderBy?: CompetitionFormFieldOrderByWithRelationInput | CompetitionFormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompetitionFormFields.
     */
    cursor?: CompetitionFormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionFormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionFormFields.
     */
    skip?: number
    distinct?: CompetitionFormFieldScalarFieldEnum | CompetitionFormFieldScalarFieldEnum[]
  }

  /**
   * CompetitionFormField create
   */
  export type CompetitionFormFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a CompetitionFormField.
     */
    data: XOR<CompetitionFormFieldCreateInput, CompetitionFormFieldUncheckedCreateInput>
  }

  /**
   * CompetitionFormField createMany
   */
  export type CompetitionFormFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompetitionFormFields.
     */
    data: CompetitionFormFieldCreateManyInput | CompetitionFormFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompetitionFormField createManyAndReturn
   */
  export type CompetitionFormFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * The data used to create many CompetitionFormFields.
     */
    data: CompetitionFormFieldCreateManyInput | CompetitionFormFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompetitionFormField update
   */
  export type CompetitionFormFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a CompetitionFormField.
     */
    data: XOR<CompetitionFormFieldUpdateInput, CompetitionFormFieldUncheckedUpdateInput>
    /**
     * Choose, which CompetitionFormField to update.
     */
    where: CompetitionFormFieldWhereUniqueInput
  }

  /**
   * CompetitionFormField updateMany
   */
  export type CompetitionFormFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompetitionFormFields.
     */
    data: XOR<CompetitionFormFieldUpdateManyMutationInput, CompetitionFormFieldUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionFormFields to update
     */
    where?: CompetitionFormFieldWhereInput
    /**
     * Limit how many CompetitionFormFields to update.
     */
    limit?: number
  }

  /**
   * CompetitionFormField updateManyAndReturn
   */
  export type CompetitionFormFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * The data used to update CompetitionFormFields.
     */
    data: XOR<CompetitionFormFieldUpdateManyMutationInput, CompetitionFormFieldUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionFormFields to update
     */
    where?: CompetitionFormFieldWhereInput
    /**
     * Limit how many CompetitionFormFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompetitionFormField upsert
   */
  export type CompetitionFormFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the CompetitionFormField to update in case it exists.
     */
    where: CompetitionFormFieldWhereUniqueInput
    /**
     * In case the CompetitionFormField found by the `where` argument doesn't exist, create a new CompetitionFormField with this data.
     */
    create: XOR<CompetitionFormFieldCreateInput, CompetitionFormFieldUncheckedCreateInput>
    /**
     * In case the CompetitionFormField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionFormFieldUpdateInput, CompetitionFormFieldUncheckedUpdateInput>
  }

  /**
   * CompetitionFormField delete
   */
  export type CompetitionFormFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldInclude<ExtArgs> | null
    /**
     * Filter which CompetitionFormField to delete.
     */
    where: CompetitionFormFieldWhereUniqueInput
  }

  /**
   * CompetitionFormField deleteMany
   */
  export type CompetitionFormFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionFormFields to delete
     */
    where?: CompetitionFormFieldWhereInput
    /**
     * Limit how many CompetitionFormFields to delete.
     */
    limit?: number
  }

  /**
   * CompetitionFormField.registrationAnswer
   */
  export type CompetitionFormField$registrationAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerInclude<ExtArgs> | null
    where?: RegistrationAnswerWhereInput
    orderBy?: RegistrationAnswerOrderByWithRelationInput | RegistrationAnswerOrderByWithRelationInput[]
    cursor?: RegistrationAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationAnswerScalarFieldEnum | RegistrationAnswerScalarFieldEnum[]
  }

  /**
   * CompetitionFormField without action
   */
  export type CompetitionFormFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionFormField
     */
    select?: CompetitionFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionFormField
     */
    omit?: CompetitionFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionFormFieldInclude<ExtArgs> | null
  }


  /**
   * Model RegistrationAnswer
   */

  export type AggregateRegistrationAnswer = {
    _count: RegistrationAnswerCountAggregateOutputType | null
    _min: RegistrationAnswerMinAggregateOutputType | null
    _max: RegistrationAnswerMaxAggregateOutputType | null
  }

  export type RegistrationAnswerMinAggregateOutputType = {
    id: string | null
    registrationId: string | null
    fieldId: string | null
    createdAt: Date | null
  }

  export type RegistrationAnswerMaxAggregateOutputType = {
    id: string | null
    registrationId: string | null
    fieldId: string | null
    createdAt: Date | null
  }

  export type RegistrationAnswerCountAggregateOutputType = {
    id: number
    registrationId: number
    fieldId: number
    value: number
    createdAt: number
    _all: number
  }


  export type RegistrationAnswerMinAggregateInputType = {
    id?: true
    registrationId?: true
    fieldId?: true
    createdAt?: true
  }

  export type RegistrationAnswerMaxAggregateInputType = {
    id?: true
    registrationId?: true
    fieldId?: true
    createdAt?: true
  }

  export type RegistrationAnswerCountAggregateInputType = {
    id?: true
    registrationId?: true
    fieldId?: true
    value?: true
    createdAt?: true
    _all?: true
  }

  export type RegistrationAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationAnswer to aggregate.
     */
    where?: RegistrationAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationAnswers to fetch.
     */
    orderBy?: RegistrationAnswerOrderByWithRelationInput | RegistrationAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistrationAnswers
    **/
    _count?: true | RegistrationAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationAnswerMaxAggregateInputType
  }

  export type GetRegistrationAnswerAggregateType<T extends RegistrationAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrationAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrationAnswer[P]>
      : GetScalarType<T[P], AggregateRegistrationAnswer[P]>
  }




  export type RegistrationAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationAnswerWhereInput
    orderBy?: RegistrationAnswerOrderByWithAggregationInput | RegistrationAnswerOrderByWithAggregationInput[]
    by: RegistrationAnswerScalarFieldEnum[] | RegistrationAnswerScalarFieldEnum
    having?: RegistrationAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationAnswerCountAggregateInputType | true
    _min?: RegistrationAnswerMinAggregateInputType
    _max?: RegistrationAnswerMaxAggregateInputType
  }

  export type RegistrationAnswerGroupByOutputType = {
    id: string
    registrationId: string
    fieldId: string
    value: JsonValue
    createdAt: Date
    _count: RegistrationAnswerCountAggregateOutputType | null
    _min: RegistrationAnswerMinAggregateOutputType | null
    _max: RegistrationAnswerMaxAggregateOutputType | null
  }

  type GetRegistrationAnswerGroupByPayload<T extends RegistrationAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationAnswerGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationId?: boolean
    fieldId?: boolean
    value?: boolean
    createdAt?: boolean
    registration?: boolean | CompetitionRegistrationDefaultArgs<ExtArgs>
    field?: boolean | CompetitionFormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationAnswer"]>

  export type RegistrationAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationId?: boolean
    fieldId?: boolean
    value?: boolean
    createdAt?: boolean
    registration?: boolean | CompetitionRegistrationDefaultArgs<ExtArgs>
    field?: boolean | CompetitionFormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationAnswer"]>

  export type RegistrationAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationId?: boolean
    fieldId?: boolean
    value?: boolean
    createdAt?: boolean
    registration?: boolean | CompetitionRegistrationDefaultArgs<ExtArgs>
    field?: boolean | CompetitionFormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationAnswer"]>

  export type RegistrationAnswerSelectScalar = {
    id?: boolean
    registrationId?: boolean
    fieldId?: boolean
    value?: boolean
    createdAt?: boolean
  }

  export type RegistrationAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registrationId" | "fieldId" | "value" | "createdAt", ExtArgs["result"]["registrationAnswer"]>
  export type RegistrationAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registration?: boolean | CompetitionRegistrationDefaultArgs<ExtArgs>
    field?: boolean | CompetitionFormFieldDefaultArgs<ExtArgs>
  }
  export type RegistrationAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registration?: boolean | CompetitionRegistrationDefaultArgs<ExtArgs>
    field?: boolean | CompetitionFormFieldDefaultArgs<ExtArgs>
  }
  export type RegistrationAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registration?: boolean | CompetitionRegistrationDefaultArgs<ExtArgs>
    field?: boolean | CompetitionFormFieldDefaultArgs<ExtArgs>
  }

  export type $RegistrationAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistrationAnswer"
    objects: {
      registration: Prisma.$CompetitionRegistrationPayload<ExtArgs>
      field: Prisma.$CompetitionFormFieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      registrationId: string
      fieldId: string
      value: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["registrationAnswer"]>
    composites: {}
  }

  type RegistrationAnswerGetPayload<S extends boolean | null | undefined | RegistrationAnswerDefaultArgs> = $Result.GetResult<Prisma.$RegistrationAnswerPayload, S>

  type RegistrationAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationAnswerCountAggregateInputType | true
    }

  export interface RegistrationAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistrationAnswer'], meta: { name: 'RegistrationAnswer' } }
    /**
     * Find zero or one RegistrationAnswer that matches the filter.
     * @param {RegistrationAnswerFindUniqueArgs} args - Arguments to find a RegistrationAnswer
     * @example
     * // Get one RegistrationAnswer
     * const registrationAnswer = await prisma.registrationAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationAnswerFindUniqueArgs>(args: SelectSubset<T, RegistrationAnswerFindUniqueArgs<ExtArgs>>): Prisma__RegistrationAnswerClient<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistrationAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationAnswerFindUniqueOrThrowArgs} args - Arguments to find a RegistrationAnswer
     * @example
     * // Get one RegistrationAnswer
     * const registrationAnswer = await prisma.registrationAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationAnswerClient<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrationAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAnswerFindFirstArgs} args - Arguments to find a RegistrationAnswer
     * @example
     * // Get one RegistrationAnswer
     * const registrationAnswer = await prisma.registrationAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationAnswerFindFirstArgs>(args?: SelectSubset<T, RegistrationAnswerFindFirstArgs<ExtArgs>>): Prisma__RegistrationAnswerClient<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrationAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAnswerFindFirstOrThrowArgs} args - Arguments to find a RegistrationAnswer
     * @example
     * // Get one RegistrationAnswer
     * const registrationAnswer = await prisma.registrationAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationAnswerClient<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistrationAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistrationAnswers
     * const registrationAnswers = await prisma.registrationAnswer.findMany()
     * 
     * // Get first 10 RegistrationAnswers
     * const registrationAnswers = await prisma.registrationAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationAnswerWithIdOnly = await prisma.registrationAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationAnswerFindManyArgs>(args?: SelectSubset<T, RegistrationAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistrationAnswer.
     * @param {RegistrationAnswerCreateArgs} args - Arguments to create a RegistrationAnswer.
     * @example
     * // Create one RegistrationAnswer
     * const RegistrationAnswer = await prisma.registrationAnswer.create({
     *   data: {
     *     // ... data to create a RegistrationAnswer
     *   }
     * })
     * 
     */
    create<T extends RegistrationAnswerCreateArgs>(args: SelectSubset<T, RegistrationAnswerCreateArgs<ExtArgs>>): Prisma__RegistrationAnswerClient<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistrationAnswers.
     * @param {RegistrationAnswerCreateManyArgs} args - Arguments to create many RegistrationAnswers.
     * @example
     * // Create many RegistrationAnswers
     * const registrationAnswer = await prisma.registrationAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationAnswerCreateManyArgs>(args?: SelectSubset<T, RegistrationAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistrationAnswers and returns the data saved in the database.
     * @param {RegistrationAnswerCreateManyAndReturnArgs} args - Arguments to create many RegistrationAnswers.
     * @example
     * // Create many RegistrationAnswers
     * const registrationAnswer = await prisma.registrationAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistrationAnswers and only return the `id`
     * const registrationAnswerWithIdOnly = await prisma.registrationAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistrationAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistrationAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistrationAnswer.
     * @param {RegistrationAnswerDeleteArgs} args - Arguments to delete one RegistrationAnswer.
     * @example
     * // Delete one RegistrationAnswer
     * const RegistrationAnswer = await prisma.registrationAnswer.delete({
     *   where: {
     *     // ... filter to delete one RegistrationAnswer
     *   }
     * })
     * 
     */
    delete<T extends RegistrationAnswerDeleteArgs>(args: SelectSubset<T, RegistrationAnswerDeleteArgs<ExtArgs>>): Prisma__RegistrationAnswerClient<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistrationAnswer.
     * @param {RegistrationAnswerUpdateArgs} args - Arguments to update one RegistrationAnswer.
     * @example
     * // Update one RegistrationAnswer
     * const registrationAnswer = await prisma.registrationAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationAnswerUpdateArgs>(args: SelectSubset<T, RegistrationAnswerUpdateArgs<ExtArgs>>): Prisma__RegistrationAnswerClient<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistrationAnswers.
     * @param {RegistrationAnswerDeleteManyArgs} args - Arguments to filter RegistrationAnswers to delete.
     * @example
     * // Delete a few RegistrationAnswers
     * const { count } = await prisma.registrationAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationAnswerDeleteManyArgs>(args?: SelectSubset<T, RegistrationAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrationAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistrationAnswers
     * const registrationAnswer = await prisma.registrationAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationAnswerUpdateManyArgs>(args: SelectSubset<T, RegistrationAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrationAnswers and returns the data updated in the database.
     * @param {RegistrationAnswerUpdateManyAndReturnArgs} args - Arguments to update many RegistrationAnswers.
     * @example
     * // Update many RegistrationAnswers
     * const registrationAnswer = await prisma.registrationAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistrationAnswers and only return the `id`
     * const registrationAnswerWithIdOnly = await prisma.registrationAnswer.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegistrationAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistrationAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistrationAnswer.
     * @param {RegistrationAnswerUpsertArgs} args - Arguments to update or create a RegistrationAnswer.
     * @example
     * // Update or create a RegistrationAnswer
     * const registrationAnswer = await prisma.registrationAnswer.upsert({
     *   create: {
     *     // ... data to create a RegistrationAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistrationAnswer we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationAnswerUpsertArgs>(args: SelectSubset<T, RegistrationAnswerUpsertArgs<ExtArgs>>): Prisma__RegistrationAnswerClient<$Result.GetResult<Prisma.$RegistrationAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistrationAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAnswerCountArgs} args - Arguments to filter RegistrationAnswers to count.
     * @example
     * // Count the number of RegistrationAnswers
     * const count = await prisma.registrationAnswer.count({
     *   where: {
     *     // ... the filter for the RegistrationAnswers we want to count
     *   }
     * })
    **/
    count<T extends RegistrationAnswerCountArgs>(
      args?: Subset<T, RegistrationAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistrationAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationAnswerAggregateArgs>(args: Subset<T, RegistrationAnswerAggregateArgs>): Prisma.PrismaPromise<GetRegistrationAnswerAggregateType<T>>

    /**
     * Group by RegistrationAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAnswerGroupByArgs} args - Group by arguments.
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
      T extends RegistrationAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationAnswerGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistrationAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistrationAnswer model
   */
  readonly fields: RegistrationAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistrationAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registration<T extends CompetitionRegistrationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionRegistrationDefaultArgs<ExtArgs>>): Prisma__CompetitionRegistrationClient<$Result.GetResult<Prisma.$CompetitionRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends CompetitionFormFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionFormFieldDefaultArgs<ExtArgs>>): Prisma__CompetitionFormFieldClient<$Result.GetResult<Prisma.$CompetitionFormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegistrationAnswer model
   */
  interface RegistrationAnswerFieldRefs {
    readonly id: FieldRef<"RegistrationAnswer", 'String'>
    readonly registrationId: FieldRef<"RegistrationAnswer", 'String'>
    readonly fieldId: FieldRef<"RegistrationAnswer", 'String'>
    readonly value: FieldRef<"RegistrationAnswer", 'Json'>
    readonly createdAt: FieldRef<"RegistrationAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistrationAnswer findUnique
   */
  export type RegistrationAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationAnswer to fetch.
     */
    where: RegistrationAnswerWhereUniqueInput
  }

  /**
   * RegistrationAnswer findUniqueOrThrow
   */
  export type RegistrationAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationAnswer to fetch.
     */
    where: RegistrationAnswerWhereUniqueInput
  }

  /**
   * RegistrationAnswer findFirst
   */
  export type RegistrationAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationAnswer to fetch.
     */
    where?: RegistrationAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationAnswers to fetch.
     */
    orderBy?: RegistrationAnswerOrderByWithRelationInput | RegistrationAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationAnswers.
     */
    cursor?: RegistrationAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationAnswers.
     */
    distinct?: RegistrationAnswerScalarFieldEnum | RegistrationAnswerScalarFieldEnum[]
  }

  /**
   * RegistrationAnswer findFirstOrThrow
   */
  export type RegistrationAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationAnswer to fetch.
     */
    where?: RegistrationAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationAnswers to fetch.
     */
    orderBy?: RegistrationAnswerOrderByWithRelationInput | RegistrationAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationAnswers.
     */
    cursor?: RegistrationAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationAnswers.
     */
    distinct?: RegistrationAnswerScalarFieldEnum | RegistrationAnswerScalarFieldEnum[]
  }

  /**
   * RegistrationAnswer findMany
   */
  export type RegistrationAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationAnswers to fetch.
     */
    where?: RegistrationAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationAnswers to fetch.
     */
    orderBy?: RegistrationAnswerOrderByWithRelationInput | RegistrationAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistrationAnswers.
     */
    cursor?: RegistrationAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationAnswers.
     */
    skip?: number
    distinct?: RegistrationAnswerScalarFieldEnum | RegistrationAnswerScalarFieldEnum[]
  }

  /**
   * RegistrationAnswer create
   */
  export type RegistrationAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistrationAnswer.
     */
    data: XOR<RegistrationAnswerCreateInput, RegistrationAnswerUncheckedCreateInput>
  }

  /**
   * RegistrationAnswer createMany
   */
  export type RegistrationAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistrationAnswers.
     */
    data: RegistrationAnswerCreateManyInput | RegistrationAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistrationAnswer createManyAndReturn
   */
  export type RegistrationAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many RegistrationAnswers.
     */
    data: RegistrationAnswerCreateManyInput | RegistrationAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistrationAnswer update
   */
  export type RegistrationAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistrationAnswer.
     */
    data: XOR<RegistrationAnswerUpdateInput, RegistrationAnswerUncheckedUpdateInput>
    /**
     * Choose, which RegistrationAnswer to update.
     */
    where: RegistrationAnswerWhereUniqueInput
  }

  /**
   * RegistrationAnswer updateMany
   */
  export type RegistrationAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistrationAnswers.
     */
    data: XOR<RegistrationAnswerUpdateManyMutationInput, RegistrationAnswerUncheckedUpdateManyInput>
    /**
     * Filter which RegistrationAnswers to update
     */
    where?: RegistrationAnswerWhereInput
    /**
     * Limit how many RegistrationAnswers to update.
     */
    limit?: number
  }

  /**
   * RegistrationAnswer updateManyAndReturn
   */
  export type RegistrationAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * The data used to update RegistrationAnswers.
     */
    data: XOR<RegistrationAnswerUpdateManyMutationInput, RegistrationAnswerUncheckedUpdateManyInput>
    /**
     * Filter which RegistrationAnswers to update
     */
    where?: RegistrationAnswerWhereInput
    /**
     * Limit how many RegistrationAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistrationAnswer upsert
   */
  export type RegistrationAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistrationAnswer to update in case it exists.
     */
    where: RegistrationAnswerWhereUniqueInput
    /**
     * In case the RegistrationAnswer found by the `where` argument doesn't exist, create a new RegistrationAnswer with this data.
     */
    create: XOR<RegistrationAnswerCreateInput, RegistrationAnswerUncheckedCreateInput>
    /**
     * In case the RegistrationAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationAnswerUpdateInput, RegistrationAnswerUncheckedUpdateInput>
  }

  /**
   * RegistrationAnswer delete
   */
  export type RegistrationAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerInclude<ExtArgs> | null
    /**
     * Filter which RegistrationAnswer to delete.
     */
    where: RegistrationAnswerWhereUniqueInput
  }

  /**
   * RegistrationAnswer deleteMany
   */
  export type RegistrationAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationAnswers to delete
     */
    where?: RegistrationAnswerWhereInput
    /**
     * Limit how many RegistrationAnswers to delete.
     */
    limit?: number
  }

  /**
   * RegistrationAnswer without action
   */
  export type RegistrationAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationAnswer
     */
    select?: RegistrationAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationAnswer
     */
    omit?: RegistrationAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationAnswerInclude<ExtArgs> | null
  }


  /**
   * Model IndependentCompetitionSubmission
   */

  export type AggregateIndependentCompetitionSubmission = {
    _count: IndependentCompetitionSubmissionCountAggregateOutputType | null
    _min: IndependentCompetitionSubmissionMinAggregateOutputType | null
    _max: IndependentCompetitionSubmissionMaxAggregateOutputType | null
  }

  export type IndependentCompetitionSubmissionMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    title: string | null
    description: string | null
    documentUrl: string | null
    status: $Enums.SubmissionStatus | null
    rejectionNote: string | null
    recommendationLetter: string | null
    reviewedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndependentCompetitionSubmissionMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    title: string | null
    description: string | null
    documentUrl: string | null
    status: $Enums.SubmissionStatus | null
    rejectionNote: string | null
    recommendationLetter: string | null
    reviewedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndependentCompetitionSubmissionCountAggregateOutputType = {
    id: number
    studentId: number
    title: number
    description: number
    documentUrl: number
    status: number
    rejectionNote: number
    recommendationLetter: number
    reviewedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IndependentCompetitionSubmissionMinAggregateInputType = {
    id?: true
    studentId?: true
    title?: true
    description?: true
    documentUrl?: true
    status?: true
    rejectionNote?: true
    recommendationLetter?: true
    reviewedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndependentCompetitionSubmissionMaxAggregateInputType = {
    id?: true
    studentId?: true
    title?: true
    description?: true
    documentUrl?: true
    status?: true
    rejectionNote?: true
    recommendationLetter?: true
    reviewedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndependentCompetitionSubmissionCountAggregateInputType = {
    id?: true
    studentId?: true
    title?: true
    description?: true
    documentUrl?: true
    status?: true
    rejectionNote?: true
    recommendationLetter?: true
    reviewedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IndependentCompetitionSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndependentCompetitionSubmission to aggregate.
     */
    where?: IndependentCompetitionSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndependentCompetitionSubmissions to fetch.
     */
    orderBy?: IndependentCompetitionSubmissionOrderByWithRelationInput | IndependentCompetitionSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndependentCompetitionSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndependentCompetitionSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndependentCompetitionSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndependentCompetitionSubmissions
    **/
    _count?: true | IndependentCompetitionSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndependentCompetitionSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndependentCompetitionSubmissionMaxAggregateInputType
  }

  export type GetIndependentCompetitionSubmissionAggregateType<T extends IndependentCompetitionSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateIndependentCompetitionSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndependentCompetitionSubmission[P]>
      : GetScalarType<T[P], AggregateIndependentCompetitionSubmission[P]>
  }




  export type IndependentCompetitionSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndependentCompetitionSubmissionWhereInput
    orderBy?: IndependentCompetitionSubmissionOrderByWithAggregationInput | IndependentCompetitionSubmissionOrderByWithAggregationInput[]
    by: IndependentCompetitionSubmissionScalarFieldEnum[] | IndependentCompetitionSubmissionScalarFieldEnum
    having?: IndependentCompetitionSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndependentCompetitionSubmissionCountAggregateInputType | true
    _min?: IndependentCompetitionSubmissionMinAggregateInputType
    _max?: IndependentCompetitionSubmissionMaxAggregateInputType
  }

  export type IndependentCompetitionSubmissionGroupByOutputType = {
    id: string
    studentId: string
    title: string
    description: string | null
    documentUrl: string
    status: $Enums.SubmissionStatus
    rejectionNote: string | null
    recommendationLetter: string | null
    reviewedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: IndependentCompetitionSubmissionCountAggregateOutputType | null
    _min: IndependentCompetitionSubmissionMinAggregateOutputType | null
    _max: IndependentCompetitionSubmissionMaxAggregateOutputType | null
  }

  type GetIndependentCompetitionSubmissionGroupByPayload<T extends IndependentCompetitionSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndependentCompetitionSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndependentCompetitionSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndependentCompetitionSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], IndependentCompetitionSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type IndependentCompetitionSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    documentUrl?: boolean
    status?: boolean
    rejectionNote?: boolean
    recommendationLetter?: boolean
    reviewedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    guru?: boolean | IndependentCompetitionSubmission$guruArgs<ExtArgs>
  }, ExtArgs["result"]["independentCompetitionSubmission"]>

  export type IndependentCompetitionSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    documentUrl?: boolean
    status?: boolean
    rejectionNote?: boolean
    recommendationLetter?: boolean
    reviewedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    guru?: boolean | IndependentCompetitionSubmission$guruArgs<ExtArgs>
  }, ExtArgs["result"]["independentCompetitionSubmission"]>

  export type IndependentCompetitionSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    documentUrl?: boolean
    status?: boolean
    rejectionNote?: boolean
    recommendationLetter?: boolean
    reviewedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    guru?: boolean | IndependentCompetitionSubmission$guruArgs<ExtArgs>
  }, ExtArgs["result"]["independentCompetitionSubmission"]>

  export type IndependentCompetitionSubmissionSelectScalar = {
    id?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    documentUrl?: boolean
    status?: boolean
    rejectionNote?: boolean
    recommendationLetter?: boolean
    reviewedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IndependentCompetitionSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "title" | "description" | "documentUrl" | "status" | "rejectionNote" | "recommendationLetter" | "reviewedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["independentCompetitionSubmission"]>
  export type IndependentCompetitionSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    guru?: boolean | IndependentCompetitionSubmission$guruArgs<ExtArgs>
  }
  export type IndependentCompetitionSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    guru?: boolean | IndependentCompetitionSubmission$guruArgs<ExtArgs>
  }
  export type IndependentCompetitionSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    guru?: boolean | IndependentCompetitionSubmission$guruArgs<ExtArgs>
  }

  export type $IndependentCompetitionSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndependentCompetitionSubmission"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      guru: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      title: string
      description: string | null
      documentUrl: string
      status: $Enums.SubmissionStatus
      rejectionNote: string | null
      recommendationLetter: string | null
      reviewedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["independentCompetitionSubmission"]>
    composites: {}
  }

  type IndependentCompetitionSubmissionGetPayload<S extends boolean | null | undefined | IndependentCompetitionSubmissionDefaultArgs> = $Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload, S>

  type IndependentCompetitionSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndependentCompetitionSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndependentCompetitionSubmissionCountAggregateInputType | true
    }

  export interface IndependentCompetitionSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndependentCompetitionSubmission'], meta: { name: 'IndependentCompetitionSubmission' } }
    /**
     * Find zero or one IndependentCompetitionSubmission that matches the filter.
     * @param {IndependentCompetitionSubmissionFindUniqueArgs} args - Arguments to find a IndependentCompetitionSubmission
     * @example
     * // Get one IndependentCompetitionSubmission
     * const independentCompetitionSubmission = await prisma.independentCompetitionSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndependentCompetitionSubmissionFindUniqueArgs>(args: SelectSubset<T, IndependentCompetitionSubmissionFindUniqueArgs<ExtArgs>>): Prisma__IndependentCompetitionSubmissionClient<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndependentCompetitionSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndependentCompetitionSubmissionFindUniqueOrThrowArgs} args - Arguments to find a IndependentCompetitionSubmission
     * @example
     * // Get one IndependentCompetitionSubmission
     * const independentCompetitionSubmission = await prisma.independentCompetitionSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndependentCompetitionSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, IndependentCompetitionSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndependentCompetitionSubmissionClient<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndependentCompetitionSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentCompetitionSubmissionFindFirstArgs} args - Arguments to find a IndependentCompetitionSubmission
     * @example
     * // Get one IndependentCompetitionSubmission
     * const independentCompetitionSubmission = await prisma.independentCompetitionSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndependentCompetitionSubmissionFindFirstArgs>(args?: SelectSubset<T, IndependentCompetitionSubmissionFindFirstArgs<ExtArgs>>): Prisma__IndependentCompetitionSubmissionClient<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndependentCompetitionSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentCompetitionSubmissionFindFirstOrThrowArgs} args - Arguments to find a IndependentCompetitionSubmission
     * @example
     * // Get one IndependentCompetitionSubmission
     * const independentCompetitionSubmission = await prisma.independentCompetitionSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndependentCompetitionSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, IndependentCompetitionSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndependentCompetitionSubmissionClient<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndependentCompetitionSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentCompetitionSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndependentCompetitionSubmissions
     * const independentCompetitionSubmissions = await prisma.independentCompetitionSubmission.findMany()
     * 
     * // Get first 10 IndependentCompetitionSubmissions
     * const independentCompetitionSubmissions = await prisma.independentCompetitionSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const independentCompetitionSubmissionWithIdOnly = await prisma.independentCompetitionSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndependentCompetitionSubmissionFindManyArgs>(args?: SelectSubset<T, IndependentCompetitionSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndependentCompetitionSubmission.
     * @param {IndependentCompetitionSubmissionCreateArgs} args - Arguments to create a IndependentCompetitionSubmission.
     * @example
     * // Create one IndependentCompetitionSubmission
     * const IndependentCompetitionSubmission = await prisma.independentCompetitionSubmission.create({
     *   data: {
     *     // ... data to create a IndependentCompetitionSubmission
     *   }
     * })
     * 
     */
    create<T extends IndependentCompetitionSubmissionCreateArgs>(args: SelectSubset<T, IndependentCompetitionSubmissionCreateArgs<ExtArgs>>): Prisma__IndependentCompetitionSubmissionClient<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndependentCompetitionSubmissions.
     * @param {IndependentCompetitionSubmissionCreateManyArgs} args - Arguments to create many IndependentCompetitionSubmissions.
     * @example
     * // Create many IndependentCompetitionSubmissions
     * const independentCompetitionSubmission = await prisma.independentCompetitionSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndependentCompetitionSubmissionCreateManyArgs>(args?: SelectSubset<T, IndependentCompetitionSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndependentCompetitionSubmissions and returns the data saved in the database.
     * @param {IndependentCompetitionSubmissionCreateManyAndReturnArgs} args - Arguments to create many IndependentCompetitionSubmissions.
     * @example
     * // Create many IndependentCompetitionSubmissions
     * const independentCompetitionSubmission = await prisma.independentCompetitionSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndependentCompetitionSubmissions and only return the `id`
     * const independentCompetitionSubmissionWithIdOnly = await prisma.independentCompetitionSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndependentCompetitionSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, IndependentCompetitionSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndependentCompetitionSubmission.
     * @param {IndependentCompetitionSubmissionDeleteArgs} args - Arguments to delete one IndependentCompetitionSubmission.
     * @example
     * // Delete one IndependentCompetitionSubmission
     * const IndependentCompetitionSubmission = await prisma.independentCompetitionSubmission.delete({
     *   where: {
     *     // ... filter to delete one IndependentCompetitionSubmission
     *   }
     * })
     * 
     */
    delete<T extends IndependentCompetitionSubmissionDeleteArgs>(args: SelectSubset<T, IndependentCompetitionSubmissionDeleteArgs<ExtArgs>>): Prisma__IndependentCompetitionSubmissionClient<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndependentCompetitionSubmission.
     * @param {IndependentCompetitionSubmissionUpdateArgs} args - Arguments to update one IndependentCompetitionSubmission.
     * @example
     * // Update one IndependentCompetitionSubmission
     * const independentCompetitionSubmission = await prisma.independentCompetitionSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndependentCompetitionSubmissionUpdateArgs>(args: SelectSubset<T, IndependentCompetitionSubmissionUpdateArgs<ExtArgs>>): Prisma__IndependentCompetitionSubmissionClient<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndependentCompetitionSubmissions.
     * @param {IndependentCompetitionSubmissionDeleteManyArgs} args - Arguments to filter IndependentCompetitionSubmissions to delete.
     * @example
     * // Delete a few IndependentCompetitionSubmissions
     * const { count } = await prisma.independentCompetitionSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndependentCompetitionSubmissionDeleteManyArgs>(args?: SelectSubset<T, IndependentCompetitionSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndependentCompetitionSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentCompetitionSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndependentCompetitionSubmissions
     * const independentCompetitionSubmission = await prisma.independentCompetitionSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndependentCompetitionSubmissionUpdateManyArgs>(args: SelectSubset<T, IndependentCompetitionSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndependentCompetitionSubmissions and returns the data updated in the database.
     * @param {IndependentCompetitionSubmissionUpdateManyAndReturnArgs} args - Arguments to update many IndependentCompetitionSubmissions.
     * @example
     * // Update many IndependentCompetitionSubmissions
     * const independentCompetitionSubmission = await prisma.independentCompetitionSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndependentCompetitionSubmissions and only return the `id`
     * const independentCompetitionSubmissionWithIdOnly = await prisma.independentCompetitionSubmission.updateManyAndReturn({
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
    updateManyAndReturn<T extends IndependentCompetitionSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, IndependentCompetitionSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndependentCompetitionSubmission.
     * @param {IndependentCompetitionSubmissionUpsertArgs} args - Arguments to update or create a IndependentCompetitionSubmission.
     * @example
     * // Update or create a IndependentCompetitionSubmission
     * const independentCompetitionSubmission = await prisma.independentCompetitionSubmission.upsert({
     *   create: {
     *     // ... data to create a IndependentCompetitionSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndependentCompetitionSubmission we want to update
     *   }
     * })
     */
    upsert<T extends IndependentCompetitionSubmissionUpsertArgs>(args: SelectSubset<T, IndependentCompetitionSubmissionUpsertArgs<ExtArgs>>): Prisma__IndependentCompetitionSubmissionClient<$Result.GetResult<Prisma.$IndependentCompetitionSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndependentCompetitionSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentCompetitionSubmissionCountArgs} args - Arguments to filter IndependentCompetitionSubmissions to count.
     * @example
     * // Count the number of IndependentCompetitionSubmissions
     * const count = await prisma.independentCompetitionSubmission.count({
     *   where: {
     *     // ... the filter for the IndependentCompetitionSubmissions we want to count
     *   }
     * })
    **/
    count<T extends IndependentCompetitionSubmissionCountArgs>(
      args?: Subset<T, IndependentCompetitionSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndependentCompetitionSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndependentCompetitionSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentCompetitionSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndependentCompetitionSubmissionAggregateArgs>(args: Subset<T, IndependentCompetitionSubmissionAggregateArgs>): Prisma.PrismaPromise<GetIndependentCompetitionSubmissionAggregateType<T>>

    /**
     * Group by IndependentCompetitionSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentCompetitionSubmissionGroupByArgs} args - Group by arguments.
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
      T extends IndependentCompetitionSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndependentCompetitionSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: IndependentCompetitionSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IndependentCompetitionSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndependentCompetitionSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndependentCompetitionSubmission model
   */
  readonly fields: IndependentCompetitionSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndependentCompetitionSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndependentCompetitionSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guru<T extends IndependentCompetitionSubmission$guruArgs<ExtArgs> = {}>(args?: Subset<T, IndependentCompetitionSubmission$guruArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IndependentCompetitionSubmission model
   */
  interface IndependentCompetitionSubmissionFieldRefs {
    readonly id: FieldRef<"IndependentCompetitionSubmission", 'String'>
    readonly studentId: FieldRef<"IndependentCompetitionSubmission", 'String'>
    readonly title: FieldRef<"IndependentCompetitionSubmission", 'String'>
    readonly description: FieldRef<"IndependentCompetitionSubmission", 'String'>
    readonly documentUrl: FieldRef<"IndependentCompetitionSubmission", 'String'>
    readonly status: FieldRef<"IndependentCompetitionSubmission", 'SubmissionStatus'>
    readonly rejectionNote: FieldRef<"IndependentCompetitionSubmission", 'String'>
    readonly recommendationLetter: FieldRef<"IndependentCompetitionSubmission", 'String'>
    readonly reviewedBy: FieldRef<"IndependentCompetitionSubmission", 'String'>
    readonly createdAt: FieldRef<"IndependentCompetitionSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"IndependentCompetitionSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndependentCompetitionSubmission findUnique
   */
  export type IndependentCompetitionSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which IndependentCompetitionSubmission to fetch.
     */
    where: IndependentCompetitionSubmissionWhereUniqueInput
  }

  /**
   * IndependentCompetitionSubmission findUniqueOrThrow
   */
  export type IndependentCompetitionSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which IndependentCompetitionSubmission to fetch.
     */
    where: IndependentCompetitionSubmissionWhereUniqueInput
  }

  /**
   * IndependentCompetitionSubmission findFirst
   */
  export type IndependentCompetitionSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which IndependentCompetitionSubmission to fetch.
     */
    where?: IndependentCompetitionSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndependentCompetitionSubmissions to fetch.
     */
    orderBy?: IndependentCompetitionSubmissionOrderByWithRelationInput | IndependentCompetitionSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndependentCompetitionSubmissions.
     */
    cursor?: IndependentCompetitionSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndependentCompetitionSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndependentCompetitionSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndependentCompetitionSubmissions.
     */
    distinct?: IndependentCompetitionSubmissionScalarFieldEnum | IndependentCompetitionSubmissionScalarFieldEnum[]
  }

  /**
   * IndependentCompetitionSubmission findFirstOrThrow
   */
  export type IndependentCompetitionSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which IndependentCompetitionSubmission to fetch.
     */
    where?: IndependentCompetitionSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndependentCompetitionSubmissions to fetch.
     */
    orderBy?: IndependentCompetitionSubmissionOrderByWithRelationInput | IndependentCompetitionSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndependentCompetitionSubmissions.
     */
    cursor?: IndependentCompetitionSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndependentCompetitionSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndependentCompetitionSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndependentCompetitionSubmissions.
     */
    distinct?: IndependentCompetitionSubmissionScalarFieldEnum | IndependentCompetitionSubmissionScalarFieldEnum[]
  }

  /**
   * IndependentCompetitionSubmission findMany
   */
  export type IndependentCompetitionSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which IndependentCompetitionSubmissions to fetch.
     */
    where?: IndependentCompetitionSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndependentCompetitionSubmissions to fetch.
     */
    orderBy?: IndependentCompetitionSubmissionOrderByWithRelationInput | IndependentCompetitionSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndependentCompetitionSubmissions.
     */
    cursor?: IndependentCompetitionSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndependentCompetitionSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndependentCompetitionSubmissions.
     */
    skip?: number
    distinct?: IndependentCompetitionSubmissionScalarFieldEnum | IndependentCompetitionSubmissionScalarFieldEnum[]
  }

  /**
   * IndependentCompetitionSubmission create
   */
  export type IndependentCompetitionSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a IndependentCompetitionSubmission.
     */
    data: XOR<IndependentCompetitionSubmissionCreateInput, IndependentCompetitionSubmissionUncheckedCreateInput>
  }

  /**
   * IndependentCompetitionSubmission createMany
   */
  export type IndependentCompetitionSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndependentCompetitionSubmissions.
     */
    data: IndependentCompetitionSubmissionCreateManyInput | IndependentCompetitionSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndependentCompetitionSubmission createManyAndReturn
   */
  export type IndependentCompetitionSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many IndependentCompetitionSubmissions.
     */
    data: IndependentCompetitionSubmissionCreateManyInput | IndependentCompetitionSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndependentCompetitionSubmission update
   */
  export type IndependentCompetitionSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a IndependentCompetitionSubmission.
     */
    data: XOR<IndependentCompetitionSubmissionUpdateInput, IndependentCompetitionSubmissionUncheckedUpdateInput>
    /**
     * Choose, which IndependentCompetitionSubmission to update.
     */
    where: IndependentCompetitionSubmissionWhereUniqueInput
  }

  /**
   * IndependentCompetitionSubmission updateMany
   */
  export type IndependentCompetitionSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndependentCompetitionSubmissions.
     */
    data: XOR<IndependentCompetitionSubmissionUpdateManyMutationInput, IndependentCompetitionSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which IndependentCompetitionSubmissions to update
     */
    where?: IndependentCompetitionSubmissionWhereInput
    /**
     * Limit how many IndependentCompetitionSubmissions to update.
     */
    limit?: number
  }

  /**
   * IndependentCompetitionSubmission updateManyAndReturn
   */
  export type IndependentCompetitionSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update IndependentCompetitionSubmissions.
     */
    data: XOR<IndependentCompetitionSubmissionUpdateManyMutationInput, IndependentCompetitionSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which IndependentCompetitionSubmissions to update
     */
    where?: IndependentCompetitionSubmissionWhereInput
    /**
     * Limit how many IndependentCompetitionSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndependentCompetitionSubmission upsert
   */
  export type IndependentCompetitionSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the IndependentCompetitionSubmission to update in case it exists.
     */
    where: IndependentCompetitionSubmissionWhereUniqueInput
    /**
     * In case the IndependentCompetitionSubmission found by the `where` argument doesn't exist, create a new IndependentCompetitionSubmission with this data.
     */
    create: XOR<IndependentCompetitionSubmissionCreateInput, IndependentCompetitionSubmissionUncheckedCreateInput>
    /**
     * In case the IndependentCompetitionSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndependentCompetitionSubmissionUpdateInput, IndependentCompetitionSubmissionUncheckedUpdateInput>
  }

  /**
   * IndependentCompetitionSubmission delete
   */
  export type IndependentCompetitionSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionInclude<ExtArgs> | null
    /**
     * Filter which IndependentCompetitionSubmission to delete.
     */
    where: IndependentCompetitionSubmissionWhereUniqueInput
  }

  /**
   * IndependentCompetitionSubmission deleteMany
   */
  export type IndependentCompetitionSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndependentCompetitionSubmissions to delete
     */
    where?: IndependentCompetitionSubmissionWhereInput
    /**
     * Limit how many IndependentCompetitionSubmissions to delete.
     */
    limit?: number
  }

  /**
   * IndependentCompetitionSubmission.guru
   */
  export type IndependentCompetitionSubmission$guruArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * IndependentCompetitionSubmission without action
   */
  export type IndependentCompetitionSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentCompetitionSubmission
     */
    select?: IndependentCompetitionSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndependentCompetitionSubmission
     */
    omit?: IndependentCompetitionSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndependentCompetitionSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    isPublished: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    isPublished: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    content: number
    isPublished: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isPublished?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isPublished?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isPublished?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    title: string
    content: string
    isPublished: boolean
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isPublished?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guru?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isPublished?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guru?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isPublished?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guru?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    isPublished?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "isPublished" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["announcement"]>
  export type AnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guru?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guru?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guru?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {
      guru: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      isPublished: boolean
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guru<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly content: FieldRef<"Announcement", 'String'>
    readonly isPublished: FieldRef<"Announcement", 'Boolean'>
    readonly createdBy: FieldRef<"Announcement", 'String'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
    readonly updatedAt: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    competitionName: string | null
    result: string | null
    certificate: string | null
    status: $Enums.AchievementStatus | null
    verifiedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    competitionName: string | null
    result: string | null
    certificate: string | null
    status: $Enums.AchievementStatus | null
    verifiedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    studentId: number
    competitionName: number
    result: number
    certificate: number
    status: number
    verifiedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AchievementMinAggregateInputType = {
    id?: true
    studentId?: true
    competitionName?: true
    result?: true
    certificate?: true
    status?: true
    verifiedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    studentId?: true
    competitionName?: true
    result?: true
    certificate?: true
    status?: true
    verifiedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    studentId?: true
    competitionName?: true
    result?: true
    certificate?: true
    status?: true
    verifiedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: string
    studentId: string
    competitionName: string
    result: string
    certificate: string | null
    status: $Enums.AchievementStatus
    verifiedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: AchievementCountAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    competitionName?: boolean
    result?: boolean
    certificate?: boolean
    status?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    guru?: boolean | Achievement$guruArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    competitionName?: boolean
    result?: boolean
    certificate?: boolean
    status?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    guru?: boolean | Achievement$guruArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    competitionName?: boolean
    result?: boolean
    certificate?: boolean
    status?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    guru?: boolean | Achievement$guruArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    studentId?: boolean
    competitionName?: boolean
    result?: boolean
    certificate?: boolean
    status?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "competitionName" | "result" | "certificate" | "status" | "verifiedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["achievement"]>
  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    guru?: boolean | Achievement$guruArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    guru?: boolean | Achievement$guruArgs<ExtArgs>
  }
  export type AchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    guru?: boolean | Achievement$guruArgs<ExtArgs>
  }

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      guru: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      competitionName: string
      result: string
      certificate: string | null
      status: $Enums.AchievementStatus
      verifiedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
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
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
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
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guru<T extends Achievement$guruArgs<ExtArgs> = {}>(args?: Subset<T, Achievement$guruArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'String'>
    readonly studentId: FieldRef<"Achievement", 'String'>
    readonly competitionName: FieldRef<"Achievement", 'String'>
    readonly result: FieldRef<"Achievement", 'String'>
    readonly certificate: FieldRef<"Achievement", 'String'>
    readonly status: FieldRef<"Achievement", 'AchievementStatus'>
    readonly verifiedBy: FieldRef<"Achievement", 'String'>
    readonly createdAt: FieldRef<"Achievement", 'DateTime'>
    readonly updatedAt: FieldRef<"Achievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement.guru
   */
  export type Achievement$guruArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model AcademicScore
   */

  export type AggregateAcademicScore = {
    _count: AcademicScoreCountAggregateOutputType | null
    _avg: AcademicScoreAvgAggregateOutputType | null
    _sum: AcademicScoreSumAggregateOutputType | null
    _min: AcademicScoreMinAggregateOutputType | null
    _max: AcademicScoreMaxAggregateOutputType | null
  }

  export type AcademicScoreAvgAggregateOutputType = {
    score: number | null
    year: number | null
  }

  export type AcademicScoreSumAggregateOutputType = {
    score: number | null
    year: number | null
  }

  export type AcademicScoreMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    subject: string | null
    score: number | null
    semester: string | null
    year: number | null
    createdAt: Date | null
  }

  export type AcademicScoreMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    subject: string | null
    score: number | null
    semester: string | null
    year: number | null
    createdAt: Date | null
  }

  export type AcademicScoreCountAggregateOutputType = {
    id: number
    studentId: number
    subject: number
    score: number
    semester: number
    year: number
    createdAt: number
    _all: number
  }


  export type AcademicScoreAvgAggregateInputType = {
    score?: true
    year?: true
  }

  export type AcademicScoreSumAggregateInputType = {
    score?: true
    year?: true
  }

  export type AcademicScoreMinAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    score?: true
    semester?: true
    year?: true
    createdAt?: true
  }

  export type AcademicScoreMaxAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    score?: true
    semester?: true
    year?: true
    createdAt?: true
  }

  export type AcademicScoreCountAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    score?: true
    semester?: true
    year?: true
    createdAt?: true
    _all?: true
  }

  export type AcademicScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicScore to aggregate.
     */
    where?: AcademicScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicScores to fetch.
     */
    orderBy?: AcademicScoreOrderByWithRelationInput | AcademicScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademicScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcademicScores
    **/
    _count?: true | AcademicScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcademicScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcademicScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicScoreMaxAggregateInputType
  }

  export type GetAcademicScoreAggregateType<T extends AcademicScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademicScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademicScore[P]>
      : GetScalarType<T[P], AggregateAcademicScore[P]>
  }




  export type AcademicScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicScoreWhereInput
    orderBy?: AcademicScoreOrderByWithAggregationInput | AcademicScoreOrderByWithAggregationInput[]
    by: AcademicScoreScalarFieldEnum[] | AcademicScoreScalarFieldEnum
    having?: AcademicScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicScoreCountAggregateInputType | true
    _avg?: AcademicScoreAvgAggregateInputType
    _sum?: AcademicScoreSumAggregateInputType
    _min?: AcademicScoreMinAggregateInputType
    _max?: AcademicScoreMaxAggregateInputType
  }

  export type AcademicScoreGroupByOutputType = {
    id: string
    studentId: string
    subject: string
    score: number
    semester: string
    year: number
    createdAt: Date
    _count: AcademicScoreCountAggregateOutputType | null
    _avg: AcademicScoreAvgAggregateOutputType | null
    _sum: AcademicScoreSumAggregateOutputType | null
    _min: AcademicScoreMinAggregateOutputType | null
    _max: AcademicScoreMaxAggregateOutputType | null
  }

  type GetAcademicScoreGroupByPayload<T extends AcademicScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicScoreGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicScoreGroupByOutputType[P]>
        }
      >
    >


  export type AcademicScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    score?: boolean
    semester?: boolean
    year?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicScore"]>

  export type AcademicScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    score?: boolean
    semester?: boolean
    year?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicScore"]>

  export type AcademicScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    score?: boolean
    semester?: boolean
    year?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicScore"]>

  export type AcademicScoreSelectScalar = {
    id?: boolean
    studentId?: boolean
    subject?: boolean
    score?: boolean
    semester?: boolean
    year?: boolean
    createdAt?: boolean
  }

  export type AcademicScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "subject" | "score" | "semester" | "year" | "createdAt", ExtArgs["result"]["academicScore"]>
  export type AcademicScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type AcademicScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type AcademicScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $AcademicScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcademicScore"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      subject: string
      score: number
      semester: string
      year: number
      createdAt: Date
    }, ExtArgs["result"]["academicScore"]>
    composites: {}
  }

  type AcademicScoreGetPayload<S extends boolean | null | undefined | AcademicScoreDefaultArgs> = $Result.GetResult<Prisma.$AcademicScorePayload, S>

  type AcademicScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcademicScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcademicScoreCountAggregateInputType | true
    }

  export interface AcademicScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcademicScore'], meta: { name: 'AcademicScore' } }
    /**
     * Find zero or one AcademicScore that matches the filter.
     * @param {AcademicScoreFindUniqueArgs} args - Arguments to find a AcademicScore
     * @example
     * // Get one AcademicScore
     * const academicScore = await prisma.academicScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicScoreFindUniqueArgs>(args: SelectSubset<T, AcademicScoreFindUniqueArgs<ExtArgs>>): Prisma__AcademicScoreClient<$Result.GetResult<Prisma.$AcademicScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcademicScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcademicScoreFindUniqueOrThrowArgs} args - Arguments to find a AcademicScore
     * @example
     * // Get one AcademicScore
     * const academicScore = await prisma.academicScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademicScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademicScoreClient<$Result.GetResult<Prisma.$AcademicScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicScoreFindFirstArgs} args - Arguments to find a AcademicScore
     * @example
     * // Get one AcademicScore
     * const academicScore = await prisma.academicScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicScoreFindFirstArgs>(args?: SelectSubset<T, AcademicScoreFindFirstArgs<ExtArgs>>): Prisma__AcademicScoreClient<$Result.GetResult<Prisma.$AcademicScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicScoreFindFirstOrThrowArgs} args - Arguments to find a AcademicScore
     * @example
     * // Get one AcademicScore
     * const academicScore = await prisma.academicScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademicScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademicScoreClient<$Result.GetResult<Prisma.$AcademicScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcademicScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcademicScores
     * const academicScores = await prisma.academicScore.findMany()
     * 
     * // Get first 10 AcademicScores
     * const academicScores = await prisma.academicScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academicScoreWithIdOnly = await prisma.academicScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcademicScoreFindManyArgs>(args?: SelectSubset<T, AcademicScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcademicScore.
     * @param {AcademicScoreCreateArgs} args - Arguments to create a AcademicScore.
     * @example
     * // Create one AcademicScore
     * const AcademicScore = await prisma.academicScore.create({
     *   data: {
     *     // ... data to create a AcademicScore
     *   }
     * })
     * 
     */
    create<T extends AcademicScoreCreateArgs>(args: SelectSubset<T, AcademicScoreCreateArgs<ExtArgs>>): Prisma__AcademicScoreClient<$Result.GetResult<Prisma.$AcademicScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcademicScores.
     * @param {AcademicScoreCreateManyArgs} args - Arguments to create many AcademicScores.
     * @example
     * // Create many AcademicScores
     * const academicScore = await prisma.academicScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademicScoreCreateManyArgs>(args?: SelectSubset<T, AcademicScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AcademicScores and returns the data saved in the database.
     * @param {AcademicScoreCreateManyAndReturnArgs} args - Arguments to create many AcademicScores.
     * @example
     * // Create many AcademicScores
     * const academicScore = await prisma.academicScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AcademicScores and only return the `id`
     * const academicScoreWithIdOnly = await prisma.academicScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcademicScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, AcademicScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AcademicScore.
     * @param {AcademicScoreDeleteArgs} args - Arguments to delete one AcademicScore.
     * @example
     * // Delete one AcademicScore
     * const AcademicScore = await prisma.academicScore.delete({
     *   where: {
     *     // ... filter to delete one AcademicScore
     *   }
     * })
     * 
     */
    delete<T extends AcademicScoreDeleteArgs>(args: SelectSubset<T, AcademicScoreDeleteArgs<ExtArgs>>): Prisma__AcademicScoreClient<$Result.GetResult<Prisma.$AcademicScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcademicScore.
     * @param {AcademicScoreUpdateArgs} args - Arguments to update one AcademicScore.
     * @example
     * // Update one AcademicScore
     * const academicScore = await prisma.academicScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademicScoreUpdateArgs>(args: SelectSubset<T, AcademicScoreUpdateArgs<ExtArgs>>): Prisma__AcademicScoreClient<$Result.GetResult<Prisma.$AcademicScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcademicScores.
     * @param {AcademicScoreDeleteManyArgs} args - Arguments to filter AcademicScores to delete.
     * @example
     * // Delete a few AcademicScores
     * const { count } = await prisma.academicScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademicScoreDeleteManyArgs>(args?: SelectSubset<T, AcademicScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcademicScores
     * const academicScore = await prisma.academicScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademicScoreUpdateManyArgs>(args: SelectSubset<T, AcademicScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicScores and returns the data updated in the database.
     * @param {AcademicScoreUpdateManyAndReturnArgs} args - Arguments to update many AcademicScores.
     * @example
     * // Update many AcademicScores
     * const academicScore = await prisma.academicScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AcademicScores and only return the `id`
     * const academicScoreWithIdOnly = await prisma.academicScore.updateManyAndReturn({
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
    updateManyAndReturn<T extends AcademicScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, AcademicScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AcademicScore.
     * @param {AcademicScoreUpsertArgs} args - Arguments to update or create a AcademicScore.
     * @example
     * // Update or create a AcademicScore
     * const academicScore = await prisma.academicScore.upsert({
     *   create: {
     *     // ... data to create a AcademicScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcademicScore we want to update
     *   }
     * })
     */
    upsert<T extends AcademicScoreUpsertArgs>(args: SelectSubset<T, AcademicScoreUpsertArgs<ExtArgs>>): Prisma__AcademicScoreClient<$Result.GetResult<Prisma.$AcademicScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcademicScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicScoreCountArgs} args - Arguments to filter AcademicScores to count.
     * @example
     * // Count the number of AcademicScores
     * const count = await prisma.academicScore.count({
     *   where: {
     *     // ... the filter for the AcademicScores we want to count
     *   }
     * })
    **/
    count<T extends AcademicScoreCountArgs>(
      args?: Subset<T, AcademicScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcademicScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcademicScoreAggregateArgs>(args: Subset<T, AcademicScoreAggregateArgs>): Prisma.PrismaPromise<GetAcademicScoreAggregateType<T>>

    /**
     * Group by AcademicScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicScoreGroupByArgs} args - Group by arguments.
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
      T extends AcademicScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademicScoreGroupByArgs['orderBy'] }
        : { orderBy?: AcademicScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcademicScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcademicScore model
   */
  readonly fields: AcademicScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcademicScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademicScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AcademicScore model
   */
  interface AcademicScoreFieldRefs {
    readonly id: FieldRef<"AcademicScore", 'String'>
    readonly studentId: FieldRef<"AcademicScore", 'String'>
    readonly subject: FieldRef<"AcademicScore", 'String'>
    readonly score: FieldRef<"AcademicScore", 'Float'>
    readonly semester: FieldRef<"AcademicScore", 'String'>
    readonly year: FieldRef<"AcademicScore", 'Int'>
    readonly createdAt: FieldRef<"AcademicScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcademicScore findUnique
   */
  export type AcademicScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreInclude<ExtArgs> | null
    /**
     * Filter, which AcademicScore to fetch.
     */
    where: AcademicScoreWhereUniqueInput
  }

  /**
   * AcademicScore findUniqueOrThrow
   */
  export type AcademicScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreInclude<ExtArgs> | null
    /**
     * Filter, which AcademicScore to fetch.
     */
    where: AcademicScoreWhereUniqueInput
  }

  /**
   * AcademicScore findFirst
   */
  export type AcademicScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreInclude<ExtArgs> | null
    /**
     * Filter, which AcademicScore to fetch.
     */
    where?: AcademicScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicScores to fetch.
     */
    orderBy?: AcademicScoreOrderByWithRelationInput | AcademicScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicScores.
     */
    cursor?: AcademicScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicScores.
     */
    distinct?: AcademicScoreScalarFieldEnum | AcademicScoreScalarFieldEnum[]
  }

  /**
   * AcademicScore findFirstOrThrow
   */
  export type AcademicScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreInclude<ExtArgs> | null
    /**
     * Filter, which AcademicScore to fetch.
     */
    where?: AcademicScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicScores to fetch.
     */
    orderBy?: AcademicScoreOrderByWithRelationInput | AcademicScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicScores.
     */
    cursor?: AcademicScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicScores.
     */
    distinct?: AcademicScoreScalarFieldEnum | AcademicScoreScalarFieldEnum[]
  }

  /**
   * AcademicScore findMany
   */
  export type AcademicScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreInclude<ExtArgs> | null
    /**
     * Filter, which AcademicScores to fetch.
     */
    where?: AcademicScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicScores to fetch.
     */
    orderBy?: AcademicScoreOrderByWithRelationInput | AcademicScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcademicScores.
     */
    cursor?: AcademicScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicScores.
     */
    skip?: number
    distinct?: AcademicScoreScalarFieldEnum | AcademicScoreScalarFieldEnum[]
  }

  /**
   * AcademicScore create
   */
  export type AcademicScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a AcademicScore.
     */
    data: XOR<AcademicScoreCreateInput, AcademicScoreUncheckedCreateInput>
  }

  /**
   * AcademicScore createMany
   */
  export type AcademicScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcademicScores.
     */
    data: AcademicScoreCreateManyInput | AcademicScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicScore createManyAndReturn
   */
  export type AcademicScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * The data used to create many AcademicScores.
     */
    data: AcademicScoreCreateManyInput | AcademicScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AcademicScore update
   */
  export type AcademicScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a AcademicScore.
     */
    data: XOR<AcademicScoreUpdateInput, AcademicScoreUncheckedUpdateInput>
    /**
     * Choose, which AcademicScore to update.
     */
    where: AcademicScoreWhereUniqueInput
  }

  /**
   * AcademicScore updateMany
   */
  export type AcademicScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcademicScores.
     */
    data: XOR<AcademicScoreUpdateManyMutationInput, AcademicScoreUncheckedUpdateManyInput>
    /**
     * Filter which AcademicScores to update
     */
    where?: AcademicScoreWhereInput
    /**
     * Limit how many AcademicScores to update.
     */
    limit?: number
  }

  /**
   * AcademicScore updateManyAndReturn
   */
  export type AcademicScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * The data used to update AcademicScores.
     */
    data: XOR<AcademicScoreUpdateManyMutationInput, AcademicScoreUncheckedUpdateManyInput>
    /**
     * Filter which AcademicScores to update
     */
    where?: AcademicScoreWhereInput
    /**
     * Limit how many AcademicScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AcademicScore upsert
   */
  export type AcademicScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the AcademicScore to update in case it exists.
     */
    where: AcademicScoreWhereUniqueInput
    /**
     * In case the AcademicScore found by the `where` argument doesn't exist, create a new AcademicScore with this data.
     */
    create: XOR<AcademicScoreCreateInput, AcademicScoreUncheckedCreateInput>
    /**
     * In case the AcademicScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademicScoreUpdateInput, AcademicScoreUncheckedUpdateInput>
  }

  /**
   * AcademicScore delete
   */
  export type AcademicScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreInclude<ExtArgs> | null
    /**
     * Filter which AcademicScore to delete.
     */
    where: AcademicScoreWhereUniqueInput
  }

  /**
   * AcademicScore deleteMany
   */
  export type AcademicScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicScores to delete
     */
    where?: AcademicScoreWhereInput
    /**
     * Limit how many AcademicScores to delete.
     */
    limit?: number
  }

  /**
   * AcademicScore without action
   */
  export type AcademicScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicScore
     */
    select?: AcademicScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicScore
     */
    omit?: AcademicScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicScoreInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    nisn: 'nisn',
    password: 'password',
    name: 'name',
    kelas: 'kelas',
    angkatan: 'angkatan',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const CompetitionCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompetitionCategoryScalarFieldEnum = (typeof CompetitionCategoryScalarFieldEnum)[keyof typeof CompetitionCategoryScalarFieldEnum]


  export const CompetitionLevelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompetitionLevelScalarFieldEnum = (typeof CompetitionLevelScalarFieldEnum)[keyof typeof CompetitionLevelScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    thumbnail: 'thumbnail',
    isPublished: 'isPublished',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const CompetitionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    thumbnail: 'thumbnail',
    isActive: 'isActive',
    startDate: 'startDate',
    endDate: 'endDate',
    categoryId: 'categoryId',
    levelId: 'levelId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const CompetitionRegistrationScalarFieldEnum: {
    id: 'id',
    competitionId: 'competitionId',
    studentId: 'studentId',
    status: 'status',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompetitionRegistrationScalarFieldEnum = (typeof CompetitionRegistrationScalarFieldEnum)[keyof typeof CompetitionRegistrationScalarFieldEnum]


  export const CompetitionFormFieldScalarFieldEnum: {
    id: 'id',
    competitionId: 'competitionId',
    label: 'label',
    fieldType: 'fieldType',
    isRequired: 'isRequired',
    options: 'options',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type CompetitionFormFieldScalarFieldEnum = (typeof CompetitionFormFieldScalarFieldEnum)[keyof typeof CompetitionFormFieldScalarFieldEnum]


  export const RegistrationAnswerScalarFieldEnum: {
    id: 'id',
    registrationId: 'registrationId',
    fieldId: 'fieldId',
    value: 'value',
    createdAt: 'createdAt'
  };

  export type RegistrationAnswerScalarFieldEnum = (typeof RegistrationAnswerScalarFieldEnum)[keyof typeof RegistrationAnswerScalarFieldEnum]


  export const IndependentCompetitionSubmissionScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    title: 'title',
    description: 'description',
    documentUrl: 'documentUrl',
    status: 'status',
    rejectionNote: 'rejectionNote',
    recommendationLetter: 'recommendationLetter',
    reviewedBy: 'reviewedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IndependentCompetitionSubmissionScalarFieldEnum = (typeof IndependentCompetitionSubmissionScalarFieldEnum)[keyof typeof IndependentCompetitionSubmissionScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    isPublished: 'isPublished',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    competitionName: 'competitionName',
    result: 'result',
    certificate: 'certificate',
    status: 'status',
    verifiedBy: 'verifiedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const AcademicScoreScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    subject: 'subject',
    score: 'score',
    semester: 'semester',
    year: 'year',
    createdAt: 'createdAt'
  };

  export type AcademicScoreScalarFieldEnum = (typeof AcademicScoreScalarFieldEnum)[keyof typeof AcademicScoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RegistrationStatus'
   */
  export type EnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus'>
    


  /**
   * Reference to a field of type 'RegistrationStatus[]'
   */
  export type ListEnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus[]'>
    


  /**
   * Reference to a field of type 'FieldType'
   */
  export type EnumFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FieldType'>
    


  /**
   * Reference to a field of type 'FieldType[]'
   */
  export type ListEnumFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FieldType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'SubmissionStatus[]'
   */
  export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>
    


  /**
   * Reference to a field of type 'AchievementStatus'
   */
  export type EnumAchievementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementStatus'>
    


  /**
   * Reference to a field of type 'AchievementStatus[]'
   */
  export type ListEnumAchievementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    news?: NewsListRelationFilter
    competitions?: CompetitionListRelationFilter
    reviewedSubmissions?: IndependentCompetitionSubmissionListRelationFilter
    announcements?: AnnouncementListRelationFilter
    verifiedAchievements?: AchievementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    news?: NewsOrderByRelationAggregateInput
    competitions?: CompetitionOrderByRelationAggregateInput
    reviewedSubmissions?: IndependentCompetitionSubmissionOrderByRelationAggregateInput
    announcements?: AnnouncementOrderByRelationAggregateInput
    verifiedAchievements?: AchievementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    news?: NewsListRelationFilter
    competitions?: CompetitionListRelationFilter
    reviewedSubmissions?: IndependentCompetitionSubmissionListRelationFilter
    announcements?: AnnouncementListRelationFilter
    verifiedAchievements?: AchievementListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    nisn?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    kelas?: StringFilter<"Student"> | string
    angkatan?: IntFilter<"Student"> | number
    isActive?: BoolFilter<"Student"> | boolean
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    registrations?: CompetitionRegistrationListRelationFilter
    submissions?: IndependentCompetitionSubmissionListRelationFilter
    achievements?: AchievementListRelationFilter
    academicScores?: AcademicScoreListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    nisn?: SortOrder
    password?: SortOrder
    name?: SortOrder
    kelas?: SortOrder
    angkatan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    registrations?: CompetitionRegistrationOrderByRelationAggregateInput
    submissions?: IndependentCompetitionSubmissionOrderByRelationAggregateInput
    achievements?: AchievementOrderByRelationAggregateInput
    academicScores?: AcademicScoreOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nisn?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    password?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    kelas?: StringFilter<"Student"> | string
    angkatan?: IntFilter<"Student"> | number
    isActive?: BoolFilter<"Student"> | boolean
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    registrations?: CompetitionRegistrationListRelationFilter
    submissions?: IndependentCompetitionSubmissionListRelationFilter
    achievements?: AchievementListRelationFilter
    academicScores?: AcademicScoreListRelationFilter
  }, "id" | "nisn">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    nisn?: SortOrder
    password?: SortOrder
    name?: SortOrder
    kelas?: SortOrder
    angkatan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    nisn?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    kelas?: StringWithAggregatesFilter<"Student"> | string
    angkatan?: IntWithAggregatesFilter<"Student"> | number
    isActive?: BoolWithAggregatesFilter<"Student"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type CompetitionCategoryWhereInput = {
    AND?: CompetitionCategoryWhereInput | CompetitionCategoryWhereInput[]
    OR?: CompetitionCategoryWhereInput[]
    NOT?: CompetitionCategoryWhereInput | CompetitionCategoryWhereInput[]
    id?: StringFilter<"CompetitionCategory"> | string
    name?: StringFilter<"CompetitionCategory"> | string
    isActive?: BoolFilter<"CompetitionCategory"> | boolean
    createdAt?: DateTimeFilter<"CompetitionCategory"> | Date | string
    updatedAt?: DateTimeFilter<"CompetitionCategory"> | Date | string
    competitions?: CompetitionListRelationFilter
  }

  export type CompetitionCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    competitions?: CompetitionOrderByRelationAggregateInput
  }

  export type CompetitionCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompetitionCategoryWhereInput | CompetitionCategoryWhereInput[]
    OR?: CompetitionCategoryWhereInput[]
    NOT?: CompetitionCategoryWhereInput | CompetitionCategoryWhereInput[]
    name?: StringFilter<"CompetitionCategory"> | string
    isActive?: BoolFilter<"CompetitionCategory"> | boolean
    createdAt?: DateTimeFilter<"CompetitionCategory"> | Date | string
    updatedAt?: DateTimeFilter<"CompetitionCategory"> | Date | string
    competitions?: CompetitionListRelationFilter
  }, "id">

  export type CompetitionCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompetitionCategoryCountOrderByAggregateInput
    _max?: CompetitionCategoryMaxOrderByAggregateInput
    _min?: CompetitionCategoryMinOrderByAggregateInput
  }

  export type CompetitionCategoryScalarWhereWithAggregatesInput = {
    AND?: CompetitionCategoryScalarWhereWithAggregatesInput | CompetitionCategoryScalarWhereWithAggregatesInput[]
    OR?: CompetitionCategoryScalarWhereWithAggregatesInput[]
    NOT?: CompetitionCategoryScalarWhereWithAggregatesInput | CompetitionCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompetitionCategory"> | string
    name?: StringWithAggregatesFilter<"CompetitionCategory"> | string
    isActive?: BoolWithAggregatesFilter<"CompetitionCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CompetitionCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompetitionCategory"> | Date | string
  }

  export type CompetitionLevelWhereInput = {
    AND?: CompetitionLevelWhereInput | CompetitionLevelWhereInput[]
    OR?: CompetitionLevelWhereInput[]
    NOT?: CompetitionLevelWhereInput | CompetitionLevelWhereInput[]
    id?: StringFilter<"CompetitionLevel"> | string
    name?: StringFilter<"CompetitionLevel"> | string
    order?: IntFilter<"CompetitionLevel"> | number
    isActive?: BoolFilter<"CompetitionLevel"> | boolean
    createdAt?: DateTimeFilter<"CompetitionLevel"> | Date | string
    updatedAt?: DateTimeFilter<"CompetitionLevel"> | Date | string
    competitions?: CompetitionListRelationFilter
  }

  export type CompetitionLevelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    competitions?: CompetitionOrderByRelationAggregateInput
  }

  export type CompetitionLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompetitionLevelWhereInput | CompetitionLevelWhereInput[]
    OR?: CompetitionLevelWhereInput[]
    NOT?: CompetitionLevelWhereInput | CompetitionLevelWhereInput[]
    name?: StringFilter<"CompetitionLevel"> | string
    order?: IntFilter<"CompetitionLevel"> | number
    isActive?: BoolFilter<"CompetitionLevel"> | boolean
    createdAt?: DateTimeFilter<"CompetitionLevel"> | Date | string
    updatedAt?: DateTimeFilter<"CompetitionLevel"> | Date | string
    competitions?: CompetitionListRelationFilter
  }, "id">

  export type CompetitionLevelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompetitionLevelCountOrderByAggregateInput
    _avg?: CompetitionLevelAvgOrderByAggregateInput
    _max?: CompetitionLevelMaxOrderByAggregateInput
    _min?: CompetitionLevelMinOrderByAggregateInput
    _sum?: CompetitionLevelSumOrderByAggregateInput
  }

  export type CompetitionLevelScalarWhereWithAggregatesInput = {
    AND?: CompetitionLevelScalarWhereWithAggregatesInput | CompetitionLevelScalarWhereWithAggregatesInput[]
    OR?: CompetitionLevelScalarWhereWithAggregatesInput[]
    NOT?: CompetitionLevelScalarWhereWithAggregatesInput | CompetitionLevelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompetitionLevel"> | string
    name?: StringWithAggregatesFilter<"CompetitionLevel"> | string
    order?: IntWithAggregatesFilter<"CompetitionLevel"> | number
    isActive?: BoolWithAggregatesFilter<"CompetitionLevel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CompetitionLevel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompetitionLevel"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    thumbnail?: StringNullableFilter<"News"> | string | null
    isPublished?: BoolFilter<"News"> | boolean
    createdBy?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: UserOrderByWithRelationInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    thumbnail?: StringNullableFilter<"News"> | string | null
    isPublished?: BoolFilter<"News"> | boolean
    createdBy?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    title?: StringWithAggregatesFilter<"News"> | string
    content?: StringWithAggregatesFilter<"News"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"News"> | string | null
    isPublished?: BoolWithAggregatesFilter<"News"> | boolean
    createdBy?: StringWithAggregatesFilter<"News"> | string
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type CompetitionWhereInput = {
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    id?: StringFilter<"Competition"> | string
    title?: StringFilter<"Competition"> | string
    description?: StringNullableFilter<"Competition"> | string | null
    thumbnail?: StringNullableFilter<"Competition"> | string | null
    isActive?: BoolFilter<"Competition"> | boolean
    startDate?: DateTimeFilter<"Competition"> | Date | string
    endDate?: DateTimeFilter<"Competition"> | Date | string
    categoryId?: StringFilter<"Competition"> | string
    levelId?: StringFilter<"Competition"> | string
    createdBy?: StringFilter<"Competition"> | string
    createdAt?: DateTimeFilter<"Competition"> | Date | string
    updatedAt?: DateTimeFilter<"Competition"> | Date | string
    category?: XOR<CompetitionCategoryScalarRelationFilter, CompetitionCategoryWhereInput>
    level?: XOR<CompetitionLevelScalarRelationFilter, CompetitionLevelWhereInput>
    guru?: XOR<UserScalarRelationFilter, UserWhereInput>
    registrations?: CompetitionRegistrationListRelationFilter
    CompetitionFormField?: CompetitionFormFieldListRelationFilter
  }

  export type CompetitionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    categoryId?: SortOrder
    levelId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CompetitionCategoryOrderByWithRelationInput
    level?: CompetitionLevelOrderByWithRelationInput
    guru?: UserOrderByWithRelationInput
    registrations?: CompetitionRegistrationOrderByRelationAggregateInput
    CompetitionFormField?: CompetitionFormFieldOrderByRelationAggregateInput
  }

  export type CompetitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    title?: StringFilter<"Competition"> | string
    description?: StringNullableFilter<"Competition"> | string | null
    thumbnail?: StringNullableFilter<"Competition"> | string | null
    isActive?: BoolFilter<"Competition"> | boolean
    startDate?: DateTimeFilter<"Competition"> | Date | string
    endDate?: DateTimeFilter<"Competition"> | Date | string
    categoryId?: StringFilter<"Competition"> | string
    levelId?: StringFilter<"Competition"> | string
    createdBy?: StringFilter<"Competition"> | string
    createdAt?: DateTimeFilter<"Competition"> | Date | string
    updatedAt?: DateTimeFilter<"Competition"> | Date | string
    category?: XOR<CompetitionCategoryScalarRelationFilter, CompetitionCategoryWhereInput>
    level?: XOR<CompetitionLevelScalarRelationFilter, CompetitionLevelWhereInput>
    guru?: XOR<UserScalarRelationFilter, UserWhereInput>
    registrations?: CompetitionRegistrationListRelationFilter
    CompetitionFormField?: CompetitionFormFieldListRelationFilter
  }, "id">

  export type CompetitionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    categoryId?: SortOrder
    levelId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompetitionCountOrderByAggregateInput
    _max?: CompetitionMaxOrderByAggregateInput
    _min?: CompetitionMinOrderByAggregateInput
  }

  export type CompetitionScalarWhereWithAggregatesInput = {
    AND?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    OR?: CompetitionScalarWhereWithAggregatesInput[]
    NOT?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Competition"> | string
    title?: StringWithAggregatesFilter<"Competition"> | string
    description?: StringNullableWithAggregatesFilter<"Competition"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Competition"> | string | null
    isActive?: BoolWithAggregatesFilter<"Competition"> | boolean
    startDate?: DateTimeWithAggregatesFilter<"Competition"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Competition"> | Date | string
    categoryId?: StringWithAggregatesFilter<"Competition"> | string
    levelId?: StringWithAggregatesFilter<"Competition"> | string
    createdBy?: StringWithAggregatesFilter<"Competition"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Competition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Competition"> | Date | string
  }

  export type CompetitionRegistrationWhereInput = {
    AND?: CompetitionRegistrationWhereInput | CompetitionRegistrationWhereInput[]
    OR?: CompetitionRegistrationWhereInput[]
    NOT?: CompetitionRegistrationWhereInput | CompetitionRegistrationWhereInput[]
    id?: StringFilter<"CompetitionRegistration"> | string
    competitionId?: StringFilter<"CompetitionRegistration"> | string
    studentId?: StringFilter<"CompetitionRegistration"> | string
    status?: EnumRegistrationStatusFilter<"CompetitionRegistration"> | $Enums.RegistrationStatus
    note?: StringNullableFilter<"CompetitionRegistration"> | string | null
    createdAt?: DateTimeFilter<"CompetitionRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"CompetitionRegistration"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    answers?: RegistrationAnswerListRelationFilter
  }

  export type CompetitionRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    competitionId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    competition?: CompetitionOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    answers?: RegistrationAnswerOrderByRelationAggregateInput
  }

  export type CompetitionRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompetitionRegistrationWhereInput | CompetitionRegistrationWhereInput[]
    OR?: CompetitionRegistrationWhereInput[]
    NOT?: CompetitionRegistrationWhereInput | CompetitionRegistrationWhereInput[]
    competitionId?: StringFilter<"CompetitionRegistration"> | string
    studentId?: StringFilter<"CompetitionRegistration"> | string
    status?: EnumRegistrationStatusFilter<"CompetitionRegistration"> | $Enums.RegistrationStatus
    note?: StringNullableFilter<"CompetitionRegistration"> | string | null
    createdAt?: DateTimeFilter<"CompetitionRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"CompetitionRegistration"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    answers?: RegistrationAnswerListRelationFilter
  }, "id">

  export type CompetitionRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    competitionId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompetitionRegistrationCountOrderByAggregateInput
    _max?: CompetitionRegistrationMaxOrderByAggregateInput
    _min?: CompetitionRegistrationMinOrderByAggregateInput
  }

  export type CompetitionRegistrationScalarWhereWithAggregatesInput = {
    AND?: CompetitionRegistrationScalarWhereWithAggregatesInput | CompetitionRegistrationScalarWhereWithAggregatesInput[]
    OR?: CompetitionRegistrationScalarWhereWithAggregatesInput[]
    NOT?: CompetitionRegistrationScalarWhereWithAggregatesInput | CompetitionRegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompetitionRegistration"> | string
    competitionId?: StringWithAggregatesFilter<"CompetitionRegistration"> | string
    studentId?: StringWithAggregatesFilter<"CompetitionRegistration"> | string
    status?: EnumRegistrationStatusWithAggregatesFilter<"CompetitionRegistration"> | $Enums.RegistrationStatus
    note?: StringNullableWithAggregatesFilter<"CompetitionRegistration"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CompetitionRegistration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompetitionRegistration"> | Date | string
  }

  export type CompetitionFormFieldWhereInput = {
    AND?: CompetitionFormFieldWhereInput | CompetitionFormFieldWhereInput[]
    OR?: CompetitionFormFieldWhereInput[]
    NOT?: CompetitionFormFieldWhereInput | CompetitionFormFieldWhereInput[]
    id?: StringFilter<"CompetitionFormField"> | string
    competitionId?: StringFilter<"CompetitionFormField"> | string
    label?: StringFilter<"CompetitionFormField"> | string
    fieldType?: EnumFieldTypeFilter<"CompetitionFormField"> | $Enums.FieldType
    isRequired?: BoolFilter<"CompetitionFormField"> | boolean
    options?: JsonNullableFilter<"CompetitionFormField">
    order?: IntFilter<"CompetitionFormField"> | number
    createdAt?: DateTimeFilter<"CompetitionFormField"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    registrationAnswer?: RegistrationAnswerListRelationFilter
  }

  export type CompetitionFormFieldOrderByWithRelationInput = {
    id?: SortOrder
    competitionId?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    isRequired?: SortOrder
    options?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    competition?: CompetitionOrderByWithRelationInput
    registrationAnswer?: RegistrationAnswerOrderByRelationAggregateInput
  }

  export type CompetitionFormFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompetitionFormFieldWhereInput | CompetitionFormFieldWhereInput[]
    OR?: CompetitionFormFieldWhereInput[]
    NOT?: CompetitionFormFieldWhereInput | CompetitionFormFieldWhereInput[]
    competitionId?: StringFilter<"CompetitionFormField"> | string
    label?: StringFilter<"CompetitionFormField"> | string
    fieldType?: EnumFieldTypeFilter<"CompetitionFormField"> | $Enums.FieldType
    isRequired?: BoolFilter<"CompetitionFormField"> | boolean
    options?: JsonNullableFilter<"CompetitionFormField">
    order?: IntFilter<"CompetitionFormField"> | number
    createdAt?: DateTimeFilter<"CompetitionFormField"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    registrationAnswer?: RegistrationAnswerListRelationFilter
  }, "id">

  export type CompetitionFormFieldOrderByWithAggregationInput = {
    id?: SortOrder
    competitionId?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    isRequired?: SortOrder
    options?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: CompetitionFormFieldCountOrderByAggregateInput
    _avg?: CompetitionFormFieldAvgOrderByAggregateInput
    _max?: CompetitionFormFieldMaxOrderByAggregateInput
    _min?: CompetitionFormFieldMinOrderByAggregateInput
    _sum?: CompetitionFormFieldSumOrderByAggregateInput
  }

  export type CompetitionFormFieldScalarWhereWithAggregatesInput = {
    AND?: CompetitionFormFieldScalarWhereWithAggregatesInput | CompetitionFormFieldScalarWhereWithAggregatesInput[]
    OR?: CompetitionFormFieldScalarWhereWithAggregatesInput[]
    NOT?: CompetitionFormFieldScalarWhereWithAggregatesInput | CompetitionFormFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompetitionFormField"> | string
    competitionId?: StringWithAggregatesFilter<"CompetitionFormField"> | string
    label?: StringWithAggregatesFilter<"CompetitionFormField"> | string
    fieldType?: EnumFieldTypeWithAggregatesFilter<"CompetitionFormField"> | $Enums.FieldType
    isRequired?: BoolWithAggregatesFilter<"CompetitionFormField"> | boolean
    options?: JsonNullableWithAggregatesFilter<"CompetitionFormField">
    order?: IntWithAggregatesFilter<"CompetitionFormField"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CompetitionFormField"> | Date | string
  }

  export type RegistrationAnswerWhereInput = {
    AND?: RegistrationAnswerWhereInput | RegistrationAnswerWhereInput[]
    OR?: RegistrationAnswerWhereInput[]
    NOT?: RegistrationAnswerWhereInput | RegistrationAnswerWhereInput[]
    id?: StringFilter<"RegistrationAnswer"> | string
    registrationId?: StringFilter<"RegistrationAnswer"> | string
    fieldId?: StringFilter<"RegistrationAnswer"> | string
    value?: JsonFilter<"RegistrationAnswer">
    createdAt?: DateTimeFilter<"RegistrationAnswer"> | Date | string
    registration?: XOR<CompetitionRegistrationScalarRelationFilter, CompetitionRegistrationWhereInput>
    field?: XOR<CompetitionFormFieldScalarRelationFilter, CompetitionFormFieldWhereInput>
  }

  export type RegistrationAnswerOrderByWithRelationInput = {
    id?: SortOrder
    registrationId?: SortOrder
    fieldId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    registration?: CompetitionRegistrationOrderByWithRelationInput
    field?: CompetitionFormFieldOrderByWithRelationInput
  }

  export type RegistrationAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistrationAnswerWhereInput | RegistrationAnswerWhereInput[]
    OR?: RegistrationAnswerWhereInput[]
    NOT?: RegistrationAnswerWhereInput | RegistrationAnswerWhereInput[]
    registrationId?: StringFilter<"RegistrationAnswer"> | string
    fieldId?: StringFilter<"RegistrationAnswer"> | string
    value?: JsonFilter<"RegistrationAnswer">
    createdAt?: DateTimeFilter<"RegistrationAnswer"> | Date | string
    registration?: XOR<CompetitionRegistrationScalarRelationFilter, CompetitionRegistrationWhereInput>
    field?: XOR<CompetitionFormFieldScalarRelationFilter, CompetitionFormFieldWhereInput>
  }, "id">

  export type RegistrationAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    registrationId?: SortOrder
    fieldId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    _count?: RegistrationAnswerCountOrderByAggregateInput
    _max?: RegistrationAnswerMaxOrderByAggregateInput
    _min?: RegistrationAnswerMinOrderByAggregateInput
  }

  export type RegistrationAnswerScalarWhereWithAggregatesInput = {
    AND?: RegistrationAnswerScalarWhereWithAggregatesInput | RegistrationAnswerScalarWhereWithAggregatesInput[]
    OR?: RegistrationAnswerScalarWhereWithAggregatesInput[]
    NOT?: RegistrationAnswerScalarWhereWithAggregatesInput | RegistrationAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistrationAnswer"> | string
    registrationId?: StringWithAggregatesFilter<"RegistrationAnswer"> | string
    fieldId?: StringWithAggregatesFilter<"RegistrationAnswer"> | string
    value?: JsonWithAggregatesFilter<"RegistrationAnswer">
    createdAt?: DateTimeWithAggregatesFilter<"RegistrationAnswer"> | Date | string
  }

  export type IndependentCompetitionSubmissionWhereInput = {
    AND?: IndependentCompetitionSubmissionWhereInput | IndependentCompetitionSubmissionWhereInput[]
    OR?: IndependentCompetitionSubmissionWhereInput[]
    NOT?: IndependentCompetitionSubmissionWhereInput | IndependentCompetitionSubmissionWhereInput[]
    id?: StringFilter<"IndependentCompetitionSubmission"> | string
    studentId?: StringFilter<"IndependentCompetitionSubmission"> | string
    title?: StringFilter<"IndependentCompetitionSubmission"> | string
    description?: StringNullableFilter<"IndependentCompetitionSubmission"> | string | null
    documentUrl?: StringFilter<"IndependentCompetitionSubmission"> | string
    status?: EnumSubmissionStatusFilter<"IndependentCompetitionSubmission"> | $Enums.SubmissionStatus
    rejectionNote?: StringNullableFilter<"IndependentCompetitionSubmission"> | string | null
    recommendationLetter?: StringNullableFilter<"IndependentCompetitionSubmission"> | string | null
    reviewedBy?: StringNullableFilter<"IndependentCompetitionSubmission"> | string | null
    createdAt?: DateTimeFilter<"IndependentCompetitionSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"IndependentCompetitionSubmission"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    guru?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type IndependentCompetitionSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    rejectionNote?: SortOrderInput | SortOrder
    recommendationLetter?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    guru?: UserOrderByWithRelationInput
  }

  export type IndependentCompetitionSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IndependentCompetitionSubmissionWhereInput | IndependentCompetitionSubmissionWhereInput[]
    OR?: IndependentCompetitionSubmissionWhereInput[]
    NOT?: IndependentCompetitionSubmissionWhereInput | IndependentCompetitionSubmissionWhereInput[]
    studentId?: StringFilter<"IndependentCompetitionSubmission"> | string
    title?: StringFilter<"IndependentCompetitionSubmission"> | string
    description?: StringNullableFilter<"IndependentCompetitionSubmission"> | string | null
    documentUrl?: StringFilter<"IndependentCompetitionSubmission"> | string
    status?: EnumSubmissionStatusFilter<"IndependentCompetitionSubmission"> | $Enums.SubmissionStatus
    rejectionNote?: StringNullableFilter<"IndependentCompetitionSubmission"> | string | null
    recommendationLetter?: StringNullableFilter<"IndependentCompetitionSubmission"> | string | null
    reviewedBy?: StringNullableFilter<"IndependentCompetitionSubmission"> | string | null
    createdAt?: DateTimeFilter<"IndependentCompetitionSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"IndependentCompetitionSubmission"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    guru?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type IndependentCompetitionSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    rejectionNote?: SortOrderInput | SortOrder
    recommendationLetter?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IndependentCompetitionSubmissionCountOrderByAggregateInput
    _max?: IndependentCompetitionSubmissionMaxOrderByAggregateInput
    _min?: IndependentCompetitionSubmissionMinOrderByAggregateInput
  }

  export type IndependentCompetitionSubmissionScalarWhereWithAggregatesInput = {
    AND?: IndependentCompetitionSubmissionScalarWhereWithAggregatesInput | IndependentCompetitionSubmissionScalarWhereWithAggregatesInput[]
    OR?: IndependentCompetitionSubmissionScalarWhereWithAggregatesInput[]
    NOT?: IndependentCompetitionSubmissionScalarWhereWithAggregatesInput | IndependentCompetitionSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IndependentCompetitionSubmission"> | string
    studentId?: StringWithAggregatesFilter<"IndependentCompetitionSubmission"> | string
    title?: StringWithAggregatesFilter<"IndependentCompetitionSubmission"> | string
    description?: StringNullableWithAggregatesFilter<"IndependentCompetitionSubmission"> | string | null
    documentUrl?: StringWithAggregatesFilter<"IndependentCompetitionSubmission"> | string
    status?: EnumSubmissionStatusWithAggregatesFilter<"IndependentCompetitionSubmission"> | $Enums.SubmissionStatus
    rejectionNote?: StringNullableWithAggregatesFilter<"IndependentCompetitionSubmission"> | string | null
    recommendationLetter?: StringNullableWithAggregatesFilter<"IndependentCompetitionSubmission"> | string | null
    reviewedBy?: StringNullableWithAggregatesFilter<"IndependentCompetitionSubmission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IndependentCompetitionSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IndependentCompetitionSubmission"> | Date | string
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    isPublished?: BoolFilter<"Announcement"> | boolean
    createdBy?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
    guru?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guru?: UserOrderByWithRelationInput
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    isPublished?: BoolFilter<"Announcement"> | boolean
    createdBy?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
    guru?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Announcement"> | string
    title?: StringWithAggregatesFilter<"Announcement"> | string
    content?: StringWithAggregatesFilter<"Announcement"> | string
    isPublished?: BoolWithAggregatesFilter<"Announcement"> | boolean
    createdBy?: StringWithAggregatesFilter<"Announcement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: StringFilter<"Achievement"> | string
    studentId?: StringFilter<"Achievement"> | string
    competitionName?: StringFilter<"Achievement"> | string
    result?: StringFilter<"Achievement"> | string
    certificate?: StringNullableFilter<"Achievement"> | string | null
    status?: EnumAchievementStatusFilter<"Achievement"> | $Enums.AchievementStatus
    verifiedBy?: StringNullableFilter<"Achievement"> | string | null
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeFilter<"Achievement"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    guru?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    competitionName?: SortOrder
    result?: SortOrder
    certificate?: SortOrderInput | SortOrder
    status?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    guru?: UserOrderByWithRelationInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    studentId?: StringFilter<"Achievement"> | string
    competitionName?: StringFilter<"Achievement"> | string
    result?: StringFilter<"Achievement"> | string
    certificate?: StringNullableFilter<"Achievement"> | string | null
    status?: EnumAchievementStatusFilter<"Achievement"> | $Enums.AchievementStatus
    verifiedBy?: StringNullableFilter<"Achievement"> | string | null
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeFilter<"Achievement"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    guru?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    competitionName?: SortOrder
    result?: SortOrder
    certificate?: SortOrderInput | SortOrder
    status?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievement"> | string
    studentId?: StringWithAggregatesFilter<"Achievement"> | string
    competitionName?: StringWithAggregatesFilter<"Achievement"> | string
    result?: StringWithAggregatesFilter<"Achievement"> | string
    certificate?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    status?: EnumAchievementStatusWithAggregatesFilter<"Achievement"> | $Enums.AchievementStatus
    verifiedBy?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
  }

  export type AcademicScoreWhereInput = {
    AND?: AcademicScoreWhereInput | AcademicScoreWhereInput[]
    OR?: AcademicScoreWhereInput[]
    NOT?: AcademicScoreWhereInput | AcademicScoreWhereInput[]
    id?: StringFilter<"AcademicScore"> | string
    studentId?: StringFilter<"AcademicScore"> | string
    subject?: StringFilter<"AcademicScore"> | string
    score?: FloatFilter<"AcademicScore"> | number
    semester?: StringFilter<"AcademicScore"> | string
    year?: IntFilter<"AcademicScore"> | number
    createdAt?: DateTimeFilter<"AcademicScore"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type AcademicScoreOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    score?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type AcademicScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AcademicScoreWhereInput | AcademicScoreWhereInput[]
    OR?: AcademicScoreWhereInput[]
    NOT?: AcademicScoreWhereInput | AcademicScoreWhereInput[]
    studentId?: StringFilter<"AcademicScore"> | string
    subject?: StringFilter<"AcademicScore"> | string
    score?: FloatFilter<"AcademicScore"> | number
    semester?: StringFilter<"AcademicScore"> | string
    year?: IntFilter<"AcademicScore"> | number
    createdAt?: DateTimeFilter<"AcademicScore"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type AcademicScoreOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    score?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    _count?: AcademicScoreCountOrderByAggregateInput
    _avg?: AcademicScoreAvgOrderByAggregateInput
    _max?: AcademicScoreMaxOrderByAggregateInput
    _min?: AcademicScoreMinOrderByAggregateInput
    _sum?: AcademicScoreSumOrderByAggregateInput
  }

  export type AcademicScoreScalarWhereWithAggregatesInput = {
    AND?: AcademicScoreScalarWhereWithAggregatesInput | AcademicScoreScalarWhereWithAggregatesInput[]
    OR?: AcademicScoreScalarWhereWithAggregatesInput[]
    NOT?: AcademicScoreScalarWhereWithAggregatesInput | AcademicScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AcademicScore"> | string
    studentId?: StringWithAggregatesFilter<"AcademicScore"> | string
    subject?: StringWithAggregatesFilter<"AcademicScore"> | string
    score?: FloatWithAggregatesFilter<"AcademicScore"> | number
    semester?: StringWithAggregatesFilter<"AcademicScore"> | string
    year?: IntWithAggregatesFilter<"AcademicScore"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AcademicScore"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAdminInput
    competitions?: CompetitionCreateNestedManyWithoutGuruInput
    reviewedSubmissions?: IndependentCompetitionSubmissionCreateNestedManyWithoutGuruInput
    announcements?: AnnouncementCreateNestedManyWithoutGuruInput
    verifiedAchievements?: AchievementCreateNestedManyWithoutGuruInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAdminInput
    competitions?: CompetitionUncheckedCreateNestedManyWithoutGuruInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUncheckedCreateNestedManyWithoutGuruInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutGuruInput
    verifiedAchievements?: AchievementUncheckedCreateNestedManyWithoutGuruInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAdminNestedInput
    competitions?: CompetitionUpdateManyWithoutGuruNestedInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUpdateManyWithoutGuruNestedInput
    announcements?: AnnouncementUpdateManyWithoutGuruNestedInput
    verifiedAchievements?: AchievementUpdateManyWithoutGuruNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAdminNestedInput
    competitions?: CompetitionUncheckedUpdateManyWithoutGuruNestedInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUncheckedUpdateManyWithoutGuruNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutGuruNestedInput
    verifiedAchievements?: AchievementUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    nisn: string
    password: string
    name: string
    kelas: string
    angkatan: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationCreateNestedManyWithoutStudentInput
    submissions?: IndependentCompetitionSubmissionCreateNestedManyWithoutStudentInput
    achievements?: AchievementCreateNestedManyWithoutStudentInput
    academicScores?: AcademicScoreCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    nisn: string
    password: string
    name: string
    kelas: string
    angkatan: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationUncheckedCreateNestedManyWithoutStudentInput
    submissions?: IndependentCompetitionSubmissionUncheckedCreateNestedManyWithoutStudentInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutStudentInput
    academicScores?: AcademicScoreUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUpdateManyWithoutStudentNestedInput
    submissions?: IndependentCompetitionSubmissionUpdateManyWithoutStudentNestedInput
    achievements?: AchievementUpdateManyWithoutStudentNestedInput
    academicScores?: AcademicScoreUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: IndependentCompetitionSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutStudentNestedInput
    academicScores?: AcademicScoreUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    nisn: string
    password: string
    name: string
    kelas: string
    angkatan: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionCategoryCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    competitions?: CompetitionCreateNestedManyWithoutCategoryInput
  }

  export type CompetitionCategoryUncheckedCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    competitions?: CompetitionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CompetitionCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitions?: CompetitionUpdateManyWithoutCategoryNestedInput
  }

  export type CompetitionCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitions?: CompetitionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CompetitionCategoryCreateManyInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionLevelCreateInput = {
    id?: string
    name: string
    order: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    competitions?: CompetitionCreateNestedManyWithoutLevelInput
  }

  export type CompetitionLevelUncheckedCreateInput = {
    id?: string
    name: string
    order: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    competitions?: CompetitionUncheckedCreateNestedManyWithoutLevelInput
  }

  export type CompetitionLevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitions?: CompetitionUpdateManyWithoutLevelNestedInput
  }

  export type CompetitionLevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitions?: CompetitionUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type CompetitionLevelCreateManyInput = {
    id?: string
    name: string
    order: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionLevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionLevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    content: string
    thumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    thumbnail?: string | null
    isPublished?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyInput = {
    id?: string
    title: string
    content: string
    thumbnail?: string | null
    isPublished?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionCreateInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CompetitionCategoryCreateNestedOneWithoutCompetitionsInput
    level: CompetitionLevelCreateNestedOneWithoutCompetitionsInput
    guru: UserCreateNestedOneWithoutCompetitionsInput
    registrations?: CompetitionRegistrationCreateNestedManyWithoutCompetitionInput
    CompetitionFormField?: CompetitionFormFieldCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    categoryId: string
    levelId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationUncheckedCreateNestedManyWithoutCompetitionInput
    CompetitionFormField?: CompetitionFormFieldUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CompetitionCategoryUpdateOneRequiredWithoutCompetitionsNestedInput
    level?: CompetitionLevelUpdateOneRequiredWithoutCompetitionsNestedInput
    guru?: UserUpdateOneRequiredWithoutCompetitionsNestedInput
    registrations?: CompetitionRegistrationUpdateManyWithoutCompetitionNestedInput
    CompetitionFormField?: CompetitionFormFieldUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUncheckedUpdateManyWithoutCompetitionNestedInput
    CompetitionFormField?: CompetitionFormFieldUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    categoryId: string
    levelId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionRegistrationCreateInput = {
    id?: string
    status?: $Enums.RegistrationStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutRegistrationsInput
    student: StudentCreateNestedOneWithoutRegistrationsInput
    answers?: RegistrationAnswerCreateNestedManyWithoutRegistrationInput
  }

  export type CompetitionRegistrationUncheckedCreateInput = {
    id?: string
    competitionId: string
    studentId: string
    status?: $Enums.RegistrationStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: RegistrationAnswerUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type CompetitionRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutRegistrationsNestedInput
    student?: StudentUpdateOneRequiredWithoutRegistrationsNestedInput
    answers?: RegistrationAnswerUpdateManyWithoutRegistrationNestedInput
  }

  export type CompetitionRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: RegistrationAnswerUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type CompetitionRegistrationCreateManyInput = {
    id?: string
    competitionId: string
    studentId: string
    status?: $Enums.RegistrationStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionFormFieldCreateInput = {
    id?: string
    label: string
    fieldType: $Enums.FieldType
    isRequired?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutCompetitionFormFieldInput
    registrationAnswer?: RegistrationAnswerCreateNestedManyWithoutFieldInput
  }

  export type CompetitionFormFieldUncheckedCreateInput = {
    id?: string
    competitionId: string
    label: string
    fieldType: $Enums.FieldType
    isRequired?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    registrationAnswer?: RegistrationAnswerUncheckedCreateNestedManyWithoutFieldInput
  }

  export type CompetitionFormFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutCompetitionFormFieldNestedInput
    registrationAnswer?: RegistrationAnswerUpdateManyWithoutFieldNestedInput
  }

  export type CompetitionFormFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationAnswer?: RegistrationAnswerUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type CompetitionFormFieldCreateManyInput = {
    id?: string
    competitionId: string
    label: string
    fieldType: $Enums.FieldType
    isRequired?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
  }

  export type CompetitionFormFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionFormFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationAnswerCreateInput = {
    id?: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    registration: CompetitionRegistrationCreateNestedOneWithoutAnswersInput
    field: CompetitionFormFieldCreateNestedOneWithoutRegistrationAnswerInput
  }

  export type RegistrationAnswerUncheckedCreateInput = {
    id?: string
    registrationId: string
    fieldId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RegistrationAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registration?: CompetitionRegistrationUpdateOneRequiredWithoutAnswersNestedInput
    field?: CompetitionFormFieldUpdateOneRequiredWithoutRegistrationAnswerNestedInput
  }

  export type RegistrationAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationAnswerCreateManyInput = {
    id?: string
    registrationId: string
    fieldId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RegistrationAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndependentCompetitionSubmissionCreateInput = {
    id?: string
    title: string
    description?: string | null
    documentUrl: string
    status?: $Enums.SubmissionStatus
    rejectionNote?: string | null
    recommendationLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutSubmissionsInput
    guru?: UserCreateNestedOneWithoutReviewedSubmissionsInput
  }

  export type IndependentCompetitionSubmissionUncheckedCreateInput = {
    id?: string
    studentId: string
    title: string
    description?: string | null
    documentUrl: string
    status?: $Enums.SubmissionStatus
    rejectionNote?: string | null
    recommendationLetter?: string | null
    reviewedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndependentCompetitionSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null
    recommendationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSubmissionsNestedInput
    guru?: UserUpdateOneWithoutReviewedSubmissionsNestedInput
  }

  export type IndependentCompetitionSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null
    recommendationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndependentCompetitionSubmissionCreateManyInput = {
    id?: string
    studentId: string
    title: string
    description?: string | null
    documentUrl: string
    status?: $Enums.SubmissionStatus
    rejectionNote?: string | null
    recommendationLetter?: string | null
    reviewedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndependentCompetitionSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null
    recommendationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndependentCompetitionSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null
    recommendationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateInput = {
    id?: string
    title: string
    content: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guru: UserCreateNestedOneWithoutAnnouncementsInput
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    isPublished?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guru?: UserUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    title: string
    content: string
    isPublished?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementCreateInput = {
    id?: string
    competitionName: string
    result: string
    certificate?: string | null
    status?: $Enums.AchievementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAchievementsInput
    guru?: UserCreateNestedOneWithoutVerifiedAchievementsInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: string
    studentId: string
    competitionName: string
    result: string
    certificate?: string | null
    status?: $Enums.AchievementStatus
    verifiedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAchievementsNestedInput
    guru?: UserUpdateOneWithoutVerifiedAchievementsNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    competitionName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementCreateManyInput = {
    id?: string
    studentId: string
    competitionName: string
    result: string
    certificate?: string | null
    status?: $Enums.AchievementStatus
    verifiedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    competitionName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicScoreCreateInput = {
    id?: string
    subject: string
    score: number
    semester: string
    year: number
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutAcademicScoresInput
  }

  export type AcademicScoreUncheckedCreateInput = {
    id?: string
    studentId: string
    subject: string
    score: number
    semester: string
    year: number
    createdAt?: Date | string
  }

  export type AcademicScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAcademicScoresNestedInput
  }

  export type AcademicScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicScoreCreateManyInput = {
    id?: string
    studentId: string
    subject: string
    score: number
    semester: string
    year: number
    createdAt?: Date | string
  }

  export type AcademicScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type CompetitionListRelationFilter = {
    every?: CompetitionWhereInput
    some?: CompetitionWhereInput
    none?: CompetitionWhereInput
  }

  export type IndependentCompetitionSubmissionListRelationFilter = {
    every?: IndependentCompetitionSubmissionWhereInput
    some?: IndependentCompetitionSubmissionWhereInput
    none?: IndependentCompetitionSubmissionWhereInput
  }

  export type AnnouncementListRelationFilter = {
    every?: AnnouncementWhereInput
    some?: AnnouncementWhereInput
    none?: AnnouncementWhereInput
  }

  export type AchievementListRelationFilter = {
    every?: AchievementWhereInput
    some?: AchievementWhereInput
    none?: AchievementWhereInput
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndependentCompetitionSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CompetitionRegistrationListRelationFilter = {
    every?: CompetitionRegistrationWhereInput
    some?: CompetitionRegistrationWhereInput
    none?: CompetitionRegistrationWhereInput
  }

  export type AcademicScoreListRelationFilter = {
    every?: AcademicScoreWhereInput
    some?: AcademicScoreWhereInput
    none?: AcademicScoreWhereInput
  }

  export type CompetitionRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcademicScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    nisn?: SortOrder
    password?: SortOrder
    name?: SortOrder
    kelas?: SortOrder
    angkatan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    angkatan?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    nisn?: SortOrder
    password?: SortOrder
    name?: SortOrder
    kelas?: SortOrder
    angkatan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    nisn?: SortOrder
    password?: SortOrder
    name?: SortOrder
    kelas?: SortOrder
    angkatan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    angkatan?: SortOrder
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

  export type CompetitionCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitionCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitionCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitionLevelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitionLevelAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CompetitionLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitionLevelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitionLevelSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type CompetitionCategoryScalarRelationFilter = {
    is?: CompetitionCategoryWhereInput
    isNot?: CompetitionCategoryWhereInput
  }

  export type CompetitionLevelScalarRelationFilter = {
    is?: CompetitionLevelWhereInput
    isNot?: CompetitionLevelWhereInput
  }

  export type CompetitionFormFieldListRelationFilter = {
    every?: CompetitionFormFieldWhereInput
    some?: CompetitionFormFieldWhereInput
    none?: CompetitionFormFieldWhereInput
  }

  export type CompetitionFormFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    categoryId?: SortOrder
    levelId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    categoryId?: SortOrder
    levelId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    categoryId?: SortOrder
    levelId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type CompetitionScalarRelationFilter = {
    is?: CompetitionWhereInput
    isNot?: CompetitionWhereInput
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type RegistrationAnswerListRelationFilter = {
    every?: RegistrationAnswerWhereInput
    some?: RegistrationAnswerWhereInput
    none?: RegistrationAnswerWhereInput
  }

  export type RegistrationAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitionRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitionRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitionRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type EnumFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeFilter<$PrismaModel> | $Enums.FieldType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CompetitionFormFieldCountOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    isRequired?: SortOrder
    options?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionFormFieldAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CompetitionFormFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    isRequired?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionFormFieldMinOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    isRequired?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionFormFieldSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.FieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumFieldTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CompetitionRegistrationScalarRelationFilter = {
    is?: CompetitionRegistrationWhereInput
    isNot?: CompetitionRegistrationWhereInput
  }

  export type CompetitionFormFieldScalarRelationFilter = {
    is?: CompetitionFormFieldWhereInput
    isNot?: CompetitionFormFieldWhereInput
  }

  export type RegistrationAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    fieldId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistrationAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistrationAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type IndependentCompetitionSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    rejectionNote?: SortOrder
    recommendationLetter?: SortOrder
    reviewedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndependentCompetitionSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    rejectionNote?: SortOrder
    recommendationLetter?: SortOrder
    reviewedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndependentCompetitionSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    rejectionNote?: SortOrder
    recommendationLetter?: SortOrder
    reviewedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAchievementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementStatus | EnumAchievementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementStatusFilter<$PrismaModel> | $Enums.AchievementStatus
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    competitionName?: SortOrder
    result?: SortOrder
    certificate?: SortOrder
    status?: SortOrder
    verifiedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    competitionName?: SortOrder
    result?: SortOrder
    certificate?: SortOrder
    status?: SortOrder
    verifiedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    competitionName?: SortOrder
    result?: SortOrder
    certificate?: SortOrder
    status?: SortOrder
    verifiedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAchievementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementStatus | EnumAchievementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementStatusWithAggregatesFilter<$PrismaModel> | $Enums.AchievementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementStatusFilter<$PrismaModel>
    _max?: NestedEnumAchievementStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AcademicScoreCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    score?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type AcademicScoreAvgOrderByAggregateInput = {
    score?: SortOrder
    year?: SortOrder
  }

  export type AcademicScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    score?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type AcademicScoreMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    score?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type AcademicScoreSumOrderByAggregateInput = {
    score?: SortOrder
    year?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NewsCreateNestedManyWithoutAdminInput = {
    create?: XOR<NewsCreateWithoutAdminInput, NewsUncheckedCreateWithoutAdminInput> | NewsCreateWithoutAdminInput[] | NewsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAdminInput | NewsCreateOrConnectWithoutAdminInput[]
    createMany?: NewsCreateManyAdminInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type CompetitionCreateNestedManyWithoutGuruInput = {
    create?: XOR<CompetitionCreateWithoutGuruInput, CompetitionUncheckedCreateWithoutGuruInput> | CompetitionCreateWithoutGuruInput[] | CompetitionUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutGuruInput | CompetitionCreateOrConnectWithoutGuruInput[]
    createMany?: CompetitionCreateManyGuruInputEnvelope
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
  }

  export type IndependentCompetitionSubmissionCreateNestedManyWithoutGuruInput = {
    create?: XOR<IndependentCompetitionSubmissionCreateWithoutGuruInput, IndependentCompetitionSubmissionUncheckedCreateWithoutGuruInput> | IndependentCompetitionSubmissionCreateWithoutGuruInput[] | IndependentCompetitionSubmissionUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: IndependentCompetitionSubmissionCreateOrConnectWithoutGuruInput | IndependentCompetitionSubmissionCreateOrConnectWithoutGuruInput[]
    createMany?: IndependentCompetitionSubmissionCreateManyGuruInputEnvelope
    connect?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutGuruInput = {
    create?: XOR<AnnouncementCreateWithoutGuruInput, AnnouncementUncheckedCreateWithoutGuruInput> | AnnouncementCreateWithoutGuruInput[] | AnnouncementUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutGuruInput | AnnouncementCreateOrConnectWithoutGuruInput[]
    createMany?: AnnouncementCreateManyGuruInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type AchievementCreateNestedManyWithoutGuruInput = {
    create?: XOR<AchievementCreateWithoutGuruInput, AchievementUncheckedCreateWithoutGuruInput> | AchievementCreateWithoutGuruInput[] | AchievementUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutGuruInput | AchievementCreateOrConnectWithoutGuruInput[]
    createMany?: AchievementCreateManyGuruInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<NewsCreateWithoutAdminInput, NewsUncheckedCreateWithoutAdminInput> | NewsCreateWithoutAdminInput[] | NewsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAdminInput | NewsCreateOrConnectWithoutAdminInput[]
    createMany?: NewsCreateManyAdminInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type CompetitionUncheckedCreateNestedManyWithoutGuruInput = {
    create?: XOR<CompetitionCreateWithoutGuruInput, CompetitionUncheckedCreateWithoutGuruInput> | CompetitionCreateWithoutGuruInput[] | CompetitionUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutGuruInput | CompetitionCreateOrConnectWithoutGuruInput[]
    createMany?: CompetitionCreateManyGuruInputEnvelope
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
  }

  export type IndependentCompetitionSubmissionUncheckedCreateNestedManyWithoutGuruInput = {
    create?: XOR<IndependentCompetitionSubmissionCreateWithoutGuruInput, IndependentCompetitionSubmissionUncheckedCreateWithoutGuruInput> | IndependentCompetitionSubmissionCreateWithoutGuruInput[] | IndependentCompetitionSubmissionUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: IndependentCompetitionSubmissionCreateOrConnectWithoutGuruInput | IndependentCompetitionSubmissionCreateOrConnectWithoutGuruInput[]
    createMany?: IndependentCompetitionSubmissionCreateManyGuruInputEnvelope
    connect?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutGuruInput = {
    create?: XOR<AnnouncementCreateWithoutGuruInput, AnnouncementUncheckedCreateWithoutGuruInput> | AnnouncementCreateWithoutGuruInput[] | AnnouncementUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutGuruInput | AnnouncementCreateOrConnectWithoutGuruInput[]
    createMany?: AnnouncementCreateManyGuruInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type AchievementUncheckedCreateNestedManyWithoutGuruInput = {
    create?: XOR<AchievementCreateWithoutGuruInput, AchievementUncheckedCreateWithoutGuruInput> | AchievementCreateWithoutGuruInput[] | AchievementUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutGuruInput | AchievementCreateOrConnectWithoutGuruInput[]
    createMany?: AchievementCreateManyGuruInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NewsUpdateManyWithoutAdminNestedInput = {
    create?: XOR<NewsCreateWithoutAdminInput, NewsUncheckedCreateWithoutAdminInput> | NewsCreateWithoutAdminInput[] | NewsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAdminInput | NewsCreateOrConnectWithoutAdminInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAdminInput | NewsUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: NewsCreateManyAdminInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAdminInput | NewsUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAdminInput | NewsUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type CompetitionUpdateManyWithoutGuruNestedInput = {
    create?: XOR<CompetitionCreateWithoutGuruInput, CompetitionUncheckedCreateWithoutGuruInput> | CompetitionCreateWithoutGuruInput[] | CompetitionUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutGuruInput | CompetitionCreateOrConnectWithoutGuruInput[]
    upsert?: CompetitionUpsertWithWhereUniqueWithoutGuruInput | CompetitionUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: CompetitionCreateManyGuruInputEnvelope
    set?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    disconnect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    delete?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    update?: CompetitionUpdateWithWhereUniqueWithoutGuruInput | CompetitionUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: CompetitionUpdateManyWithWhereWithoutGuruInput | CompetitionUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
  }

  export type IndependentCompetitionSubmissionUpdateManyWithoutGuruNestedInput = {
    create?: XOR<IndependentCompetitionSubmissionCreateWithoutGuruInput, IndependentCompetitionSubmissionUncheckedCreateWithoutGuruInput> | IndependentCompetitionSubmissionCreateWithoutGuruInput[] | IndependentCompetitionSubmissionUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: IndependentCompetitionSubmissionCreateOrConnectWithoutGuruInput | IndependentCompetitionSubmissionCreateOrConnectWithoutGuruInput[]
    upsert?: IndependentCompetitionSubmissionUpsertWithWhereUniqueWithoutGuruInput | IndependentCompetitionSubmissionUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: IndependentCompetitionSubmissionCreateManyGuruInputEnvelope
    set?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    disconnect?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    delete?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    connect?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    update?: IndependentCompetitionSubmissionUpdateWithWhereUniqueWithoutGuruInput | IndependentCompetitionSubmissionUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: IndependentCompetitionSubmissionUpdateManyWithWhereWithoutGuruInput | IndependentCompetitionSubmissionUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: IndependentCompetitionSubmissionScalarWhereInput | IndependentCompetitionSubmissionScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutGuruNestedInput = {
    create?: XOR<AnnouncementCreateWithoutGuruInput, AnnouncementUncheckedCreateWithoutGuruInput> | AnnouncementCreateWithoutGuruInput[] | AnnouncementUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutGuruInput | AnnouncementCreateOrConnectWithoutGuruInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutGuruInput | AnnouncementUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: AnnouncementCreateManyGuruInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutGuruInput | AnnouncementUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutGuruInput | AnnouncementUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type AchievementUpdateManyWithoutGuruNestedInput = {
    create?: XOR<AchievementCreateWithoutGuruInput, AchievementUncheckedCreateWithoutGuruInput> | AchievementCreateWithoutGuruInput[] | AchievementUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutGuruInput | AchievementCreateOrConnectWithoutGuruInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutGuruInput | AchievementUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: AchievementCreateManyGuruInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutGuruInput | AchievementUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutGuruInput | AchievementUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<NewsCreateWithoutAdminInput, NewsUncheckedCreateWithoutAdminInput> | NewsCreateWithoutAdminInput[] | NewsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAdminInput | NewsCreateOrConnectWithoutAdminInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAdminInput | NewsUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: NewsCreateManyAdminInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAdminInput | NewsUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAdminInput | NewsUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type CompetitionUncheckedUpdateManyWithoutGuruNestedInput = {
    create?: XOR<CompetitionCreateWithoutGuruInput, CompetitionUncheckedCreateWithoutGuruInput> | CompetitionCreateWithoutGuruInput[] | CompetitionUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutGuruInput | CompetitionCreateOrConnectWithoutGuruInput[]
    upsert?: CompetitionUpsertWithWhereUniqueWithoutGuruInput | CompetitionUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: CompetitionCreateManyGuruInputEnvelope
    set?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    disconnect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    delete?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    update?: CompetitionUpdateWithWhereUniqueWithoutGuruInput | CompetitionUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: CompetitionUpdateManyWithWhereWithoutGuruInput | CompetitionUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
  }

  export type IndependentCompetitionSubmissionUncheckedUpdateManyWithoutGuruNestedInput = {
    create?: XOR<IndependentCompetitionSubmissionCreateWithoutGuruInput, IndependentCompetitionSubmissionUncheckedCreateWithoutGuruInput> | IndependentCompetitionSubmissionCreateWithoutGuruInput[] | IndependentCompetitionSubmissionUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: IndependentCompetitionSubmissionCreateOrConnectWithoutGuruInput | IndependentCompetitionSubmissionCreateOrConnectWithoutGuruInput[]
    upsert?: IndependentCompetitionSubmissionUpsertWithWhereUniqueWithoutGuruInput | IndependentCompetitionSubmissionUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: IndependentCompetitionSubmissionCreateManyGuruInputEnvelope
    set?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    disconnect?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    delete?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    connect?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    update?: IndependentCompetitionSubmissionUpdateWithWhereUniqueWithoutGuruInput | IndependentCompetitionSubmissionUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: IndependentCompetitionSubmissionUpdateManyWithWhereWithoutGuruInput | IndependentCompetitionSubmissionUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: IndependentCompetitionSubmissionScalarWhereInput | IndependentCompetitionSubmissionScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutGuruNestedInput = {
    create?: XOR<AnnouncementCreateWithoutGuruInput, AnnouncementUncheckedCreateWithoutGuruInput> | AnnouncementCreateWithoutGuruInput[] | AnnouncementUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutGuruInput | AnnouncementCreateOrConnectWithoutGuruInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutGuruInput | AnnouncementUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: AnnouncementCreateManyGuruInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutGuruInput | AnnouncementUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutGuruInput | AnnouncementUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type AchievementUncheckedUpdateManyWithoutGuruNestedInput = {
    create?: XOR<AchievementCreateWithoutGuruInput, AchievementUncheckedCreateWithoutGuruInput> | AchievementCreateWithoutGuruInput[] | AchievementUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutGuruInput | AchievementCreateOrConnectWithoutGuruInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutGuruInput | AchievementUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: AchievementCreateManyGuruInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutGuruInput | AchievementUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutGuruInput | AchievementUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type CompetitionRegistrationCreateNestedManyWithoutStudentInput = {
    create?: XOR<CompetitionRegistrationCreateWithoutStudentInput, CompetitionRegistrationUncheckedCreateWithoutStudentInput> | CompetitionRegistrationCreateWithoutStudentInput[] | CompetitionRegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompetitionRegistrationCreateOrConnectWithoutStudentInput | CompetitionRegistrationCreateOrConnectWithoutStudentInput[]
    createMany?: CompetitionRegistrationCreateManyStudentInputEnvelope
    connect?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
  }

  export type IndependentCompetitionSubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<IndependentCompetitionSubmissionCreateWithoutStudentInput, IndependentCompetitionSubmissionUncheckedCreateWithoutStudentInput> | IndependentCompetitionSubmissionCreateWithoutStudentInput[] | IndependentCompetitionSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: IndependentCompetitionSubmissionCreateOrConnectWithoutStudentInput | IndependentCompetitionSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: IndependentCompetitionSubmissionCreateManyStudentInputEnvelope
    connect?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
  }

  export type AchievementCreateNestedManyWithoutStudentInput = {
    create?: XOR<AchievementCreateWithoutStudentInput, AchievementUncheckedCreateWithoutStudentInput> | AchievementCreateWithoutStudentInput[] | AchievementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutStudentInput | AchievementCreateOrConnectWithoutStudentInput[]
    createMany?: AchievementCreateManyStudentInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type AcademicScoreCreateNestedManyWithoutStudentInput = {
    create?: XOR<AcademicScoreCreateWithoutStudentInput, AcademicScoreUncheckedCreateWithoutStudentInput> | AcademicScoreCreateWithoutStudentInput[] | AcademicScoreUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AcademicScoreCreateOrConnectWithoutStudentInput | AcademicScoreCreateOrConnectWithoutStudentInput[]
    createMany?: AcademicScoreCreateManyStudentInputEnvelope
    connect?: AcademicScoreWhereUniqueInput | AcademicScoreWhereUniqueInput[]
  }

  export type CompetitionRegistrationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<CompetitionRegistrationCreateWithoutStudentInput, CompetitionRegistrationUncheckedCreateWithoutStudentInput> | CompetitionRegistrationCreateWithoutStudentInput[] | CompetitionRegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompetitionRegistrationCreateOrConnectWithoutStudentInput | CompetitionRegistrationCreateOrConnectWithoutStudentInput[]
    createMany?: CompetitionRegistrationCreateManyStudentInputEnvelope
    connect?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
  }

  export type IndependentCompetitionSubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<IndependentCompetitionSubmissionCreateWithoutStudentInput, IndependentCompetitionSubmissionUncheckedCreateWithoutStudentInput> | IndependentCompetitionSubmissionCreateWithoutStudentInput[] | IndependentCompetitionSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: IndependentCompetitionSubmissionCreateOrConnectWithoutStudentInput | IndependentCompetitionSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: IndependentCompetitionSubmissionCreateManyStudentInputEnvelope
    connect?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
  }

  export type AchievementUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AchievementCreateWithoutStudentInput, AchievementUncheckedCreateWithoutStudentInput> | AchievementCreateWithoutStudentInput[] | AchievementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutStudentInput | AchievementCreateOrConnectWithoutStudentInput[]
    createMany?: AchievementCreateManyStudentInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type AcademicScoreUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AcademicScoreCreateWithoutStudentInput, AcademicScoreUncheckedCreateWithoutStudentInput> | AcademicScoreCreateWithoutStudentInput[] | AcademicScoreUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AcademicScoreCreateOrConnectWithoutStudentInput | AcademicScoreCreateOrConnectWithoutStudentInput[]
    createMany?: AcademicScoreCreateManyStudentInputEnvelope
    connect?: AcademicScoreWhereUniqueInput | AcademicScoreWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompetitionRegistrationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CompetitionRegistrationCreateWithoutStudentInput, CompetitionRegistrationUncheckedCreateWithoutStudentInput> | CompetitionRegistrationCreateWithoutStudentInput[] | CompetitionRegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompetitionRegistrationCreateOrConnectWithoutStudentInput | CompetitionRegistrationCreateOrConnectWithoutStudentInput[]
    upsert?: CompetitionRegistrationUpsertWithWhereUniqueWithoutStudentInput | CompetitionRegistrationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CompetitionRegistrationCreateManyStudentInputEnvelope
    set?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    disconnect?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    delete?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    connect?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    update?: CompetitionRegistrationUpdateWithWhereUniqueWithoutStudentInput | CompetitionRegistrationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CompetitionRegistrationUpdateManyWithWhereWithoutStudentInput | CompetitionRegistrationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CompetitionRegistrationScalarWhereInput | CompetitionRegistrationScalarWhereInput[]
  }

  export type IndependentCompetitionSubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<IndependentCompetitionSubmissionCreateWithoutStudentInput, IndependentCompetitionSubmissionUncheckedCreateWithoutStudentInput> | IndependentCompetitionSubmissionCreateWithoutStudentInput[] | IndependentCompetitionSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: IndependentCompetitionSubmissionCreateOrConnectWithoutStudentInput | IndependentCompetitionSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: IndependentCompetitionSubmissionUpsertWithWhereUniqueWithoutStudentInput | IndependentCompetitionSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: IndependentCompetitionSubmissionCreateManyStudentInputEnvelope
    set?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    disconnect?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    delete?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    connect?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    update?: IndependentCompetitionSubmissionUpdateWithWhereUniqueWithoutStudentInput | IndependentCompetitionSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: IndependentCompetitionSubmissionUpdateManyWithWhereWithoutStudentInput | IndependentCompetitionSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: IndependentCompetitionSubmissionScalarWhereInput | IndependentCompetitionSubmissionScalarWhereInput[]
  }

  export type AchievementUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AchievementCreateWithoutStudentInput, AchievementUncheckedCreateWithoutStudentInput> | AchievementCreateWithoutStudentInput[] | AchievementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutStudentInput | AchievementCreateOrConnectWithoutStudentInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutStudentInput | AchievementUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AchievementCreateManyStudentInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutStudentInput | AchievementUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutStudentInput | AchievementUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type AcademicScoreUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AcademicScoreCreateWithoutStudentInput, AcademicScoreUncheckedCreateWithoutStudentInput> | AcademicScoreCreateWithoutStudentInput[] | AcademicScoreUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AcademicScoreCreateOrConnectWithoutStudentInput | AcademicScoreCreateOrConnectWithoutStudentInput[]
    upsert?: AcademicScoreUpsertWithWhereUniqueWithoutStudentInput | AcademicScoreUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AcademicScoreCreateManyStudentInputEnvelope
    set?: AcademicScoreWhereUniqueInput | AcademicScoreWhereUniqueInput[]
    disconnect?: AcademicScoreWhereUniqueInput | AcademicScoreWhereUniqueInput[]
    delete?: AcademicScoreWhereUniqueInput | AcademicScoreWhereUniqueInput[]
    connect?: AcademicScoreWhereUniqueInput | AcademicScoreWhereUniqueInput[]
    update?: AcademicScoreUpdateWithWhereUniqueWithoutStudentInput | AcademicScoreUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AcademicScoreUpdateManyWithWhereWithoutStudentInput | AcademicScoreUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AcademicScoreScalarWhereInput | AcademicScoreScalarWhereInput[]
  }

  export type CompetitionRegistrationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CompetitionRegistrationCreateWithoutStudentInput, CompetitionRegistrationUncheckedCreateWithoutStudentInput> | CompetitionRegistrationCreateWithoutStudentInput[] | CompetitionRegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompetitionRegistrationCreateOrConnectWithoutStudentInput | CompetitionRegistrationCreateOrConnectWithoutStudentInput[]
    upsert?: CompetitionRegistrationUpsertWithWhereUniqueWithoutStudentInput | CompetitionRegistrationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CompetitionRegistrationCreateManyStudentInputEnvelope
    set?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    disconnect?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    delete?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    connect?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    update?: CompetitionRegistrationUpdateWithWhereUniqueWithoutStudentInput | CompetitionRegistrationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CompetitionRegistrationUpdateManyWithWhereWithoutStudentInput | CompetitionRegistrationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CompetitionRegistrationScalarWhereInput | CompetitionRegistrationScalarWhereInput[]
  }

  export type IndependentCompetitionSubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<IndependentCompetitionSubmissionCreateWithoutStudentInput, IndependentCompetitionSubmissionUncheckedCreateWithoutStudentInput> | IndependentCompetitionSubmissionCreateWithoutStudentInput[] | IndependentCompetitionSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: IndependentCompetitionSubmissionCreateOrConnectWithoutStudentInput | IndependentCompetitionSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: IndependentCompetitionSubmissionUpsertWithWhereUniqueWithoutStudentInput | IndependentCompetitionSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: IndependentCompetitionSubmissionCreateManyStudentInputEnvelope
    set?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    disconnect?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    delete?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    connect?: IndependentCompetitionSubmissionWhereUniqueInput | IndependentCompetitionSubmissionWhereUniqueInput[]
    update?: IndependentCompetitionSubmissionUpdateWithWhereUniqueWithoutStudentInput | IndependentCompetitionSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: IndependentCompetitionSubmissionUpdateManyWithWhereWithoutStudentInput | IndependentCompetitionSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: IndependentCompetitionSubmissionScalarWhereInput | IndependentCompetitionSubmissionScalarWhereInput[]
  }

  export type AchievementUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AchievementCreateWithoutStudentInput, AchievementUncheckedCreateWithoutStudentInput> | AchievementCreateWithoutStudentInput[] | AchievementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutStudentInput | AchievementCreateOrConnectWithoutStudentInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutStudentInput | AchievementUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AchievementCreateManyStudentInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutStudentInput | AchievementUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutStudentInput | AchievementUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type AcademicScoreUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AcademicScoreCreateWithoutStudentInput, AcademicScoreUncheckedCreateWithoutStudentInput> | AcademicScoreCreateWithoutStudentInput[] | AcademicScoreUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AcademicScoreCreateOrConnectWithoutStudentInput | AcademicScoreCreateOrConnectWithoutStudentInput[]
    upsert?: AcademicScoreUpsertWithWhereUniqueWithoutStudentInput | AcademicScoreUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AcademicScoreCreateManyStudentInputEnvelope
    set?: AcademicScoreWhereUniqueInput | AcademicScoreWhereUniqueInput[]
    disconnect?: AcademicScoreWhereUniqueInput | AcademicScoreWhereUniqueInput[]
    delete?: AcademicScoreWhereUniqueInput | AcademicScoreWhereUniqueInput[]
    connect?: AcademicScoreWhereUniqueInput | AcademicScoreWhereUniqueInput[]
    update?: AcademicScoreUpdateWithWhereUniqueWithoutStudentInput | AcademicScoreUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AcademicScoreUpdateManyWithWhereWithoutStudentInput | AcademicScoreUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AcademicScoreScalarWhereInput | AcademicScoreScalarWhereInput[]
  }

  export type CompetitionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CompetitionCreateWithoutCategoryInput, CompetitionUncheckedCreateWithoutCategoryInput> | CompetitionCreateWithoutCategoryInput[] | CompetitionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutCategoryInput | CompetitionCreateOrConnectWithoutCategoryInput[]
    createMany?: CompetitionCreateManyCategoryInputEnvelope
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
  }

  export type CompetitionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CompetitionCreateWithoutCategoryInput, CompetitionUncheckedCreateWithoutCategoryInput> | CompetitionCreateWithoutCategoryInput[] | CompetitionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutCategoryInput | CompetitionCreateOrConnectWithoutCategoryInput[]
    createMany?: CompetitionCreateManyCategoryInputEnvelope
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
  }

  export type CompetitionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CompetitionCreateWithoutCategoryInput, CompetitionUncheckedCreateWithoutCategoryInput> | CompetitionCreateWithoutCategoryInput[] | CompetitionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutCategoryInput | CompetitionCreateOrConnectWithoutCategoryInput[]
    upsert?: CompetitionUpsertWithWhereUniqueWithoutCategoryInput | CompetitionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CompetitionCreateManyCategoryInputEnvelope
    set?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    disconnect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    delete?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    update?: CompetitionUpdateWithWhereUniqueWithoutCategoryInput | CompetitionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CompetitionUpdateManyWithWhereWithoutCategoryInput | CompetitionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
  }

  export type CompetitionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CompetitionCreateWithoutCategoryInput, CompetitionUncheckedCreateWithoutCategoryInput> | CompetitionCreateWithoutCategoryInput[] | CompetitionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutCategoryInput | CompetitionCreateOrConnectWithoutCategoryInput[]
    upsert?: CompetitionUpsertWithWhereUniqueWithoutCategoryInput | CompetitionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CompetitionCreateManyCategoryInputEnvelope
    set?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    disconnect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    delete?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    update?: CompetitionUpdateWithWhereUniqueWithoutCategoryInput | CompetitionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CompetitionUpdateManyWithWhereWithoutCategoryInput | CompetitionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
  }

  export type CompetitionCreateNestedManyWithoutLevelInput = {
    create?: XOR<CompetitionCreateWithoutLevelInput, CompetitionUncheckedCreateWithoutLevelInput> | CompetitionCreateWithoutLevelInput[] | CompetitionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutLevelInput | CompetitionCreateOrConnectWithoutLevelInput[]
    createMany?: CompetitionCreateManyLevelInputEnvelope
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
  }

  export type CompetitionUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<CompetitionCreateWithoutLevelInput, CompetitionUncheckedCreateWithoutLevelInput> | CompetitionCreateWithoutLevelInput[] | CompetitionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutLevelInput | CompetitionCreateOrConnectWithoutLevelInput[]
    createMany?: CompetitionCreateManyLevelInputEnvelope
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
  }

  export type CompetitionUpdateManyWithoutLevelNestedInput = {
    create?: XOR<CompetitionCreateWithoutLevelInput, CompetitionUncheckedCreateWithoutLevelInput> | CompetitionCreateWithoutLevelInput[] | CompetitionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutLevelInput | CompetitionCreateOrConnectWithoutLevelInput[]
    upsert?: CompetitionUpsertWithWhereUniqueWithoutLevelInput | CompetitionUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: CompetitionCreateManyLevelInputEnvelope
    set?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    disconnect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    delete?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    update?: CompetitionUpdateWithWhereUniqueWithoutLevelInput | CompetitionUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: CompetitionUpdateManyWithWhereWithoutLevelInput | CompetitionUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
  }

  export type CompetitionUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<CompetitionCreateWithoutLevelInput, CompetitionUncheckedCreateWithoutLevelInput> | CompetitionCreateWithoutLevelInput[] | CompetitionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutLevelInput | CompetitionCreateOrConnectWithoutLevelInput[]
    upsert?: CompetitionUpsertWithWhereUniqueWithoutLevelInput | CompetitionUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: CompetitionCreateManyLevelInputEnvelope
    set?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    disconnect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    delete?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    update?: CompetitionUpdateWithWhereUniqueWithoutLevelInput | CompetitionUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: CompetitionUpdateManyWithWhereWithoutLevelInput | CompetitionUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNewsInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    upsert?: UserUpsertWithoutNewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsInput, UserUpdateWithoutNewsInput>, UserUncheckedUpdateWithoutNewsInput>
  }

  export type CompetitionCategoryCreateNestedOneWithoutCompetitionsInput = {
    create?: XOR<CompetitionCategoryCreateWithoutCompetitionsInput, CompetitionCategoryUncheckedCreateWithoutCompetitionsInput>
    connectOrCreate?: CompetitionCategoryCreateOrConnectWithoutCompetitionsInput
    connect?: CompetitionCategoryWhereUniqueInput
  }

  export type CompetitionLevelCreateNestedOneWithoutCompetitionsInput = {
    create?: XOR<CompetitionLevelCreateWithoutCompetitionsInput, CompetitionLevelUncheckedCreateWithoutCompetitionsInput>
    connectOrCreate?: CompetitionLevelCreateOrConnectWithoutCompetitionsInput
    connect?: CompetitionLevelWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCompetitionsInput = {
    create?: XOR<UserCreateWithoutCompetitionsInput, UserUncheckedCreateWithoutCompetitionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompetitionsInput
    connect?: UserWhereUniqueInput
  }

  export type CompetitionRegistrationCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<CompetitionRegistrationCreateWithoutCompetitionInput, CompetitionRegistrationUncheckedCreateWithoutCompetitionInput> | CompetitionRegistrationCreateWithoutCompetitionInput[] | CompetitionRegistrationUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionRegistrationCreateOrConnectWithoutCompetitionInput | CompetitionRegistrationCreateOrConnectWithoutCompetitionInput[]
    createMany?: CompetitionRegistrationCreateManyCompetitionInputEnvelope
    connect?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
  }

  export type CompetitionFormFieldCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<CompetitionFormFieldCreateWithoutCompetitionInput, CompetitionFormFieldUncheckedCreateWithoutCompetitionInput> | CompetitionFormFieldCreateWithoutCompetitionInput[] | CompetitionFormFieldUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionFormFieldCreateOrConnectWithoutCompetitionInput | CompetitionFormFieldCreateOrConnectWithoutCompetitionInput[]
    createMany?: CompetitionFormFieldCreateManyCompetitionInputEnvelope
    connect?: CompetitionFormFieldWhereUniqueInput | CompetitionFormFieldWhereUniqueInput[]
  }

  export type CompetitionRegistrationUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<CompetitionRegistrationCreateWithoutCompetitionInput, CompetitionRegistrationUncheckedCreateWithoutCompetitionInput> | CompetitionRegistrationCreateWithoutCompetitionInput[] | CompetitionRegistrationUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionRegistrationCreateOrConnectWithoutCompetitionInput | CompetitionRegistrationCreateOrConnectWithoutCompetitionInput[]
    createMany?: CompetitionRegistrationCreateManyCompetitionInputEnvelope
    connect?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
  }

  export type CompetitionFormFieldUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<CompetitionFormFieldCreateWithoutCompetitionInput, CompetitionFormFieldUncheckedCreateWithoutCompetitionInput> | CompetitionFormFieldCreateWithoutCompetitionInput[] | CompetitionFormFieldUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionFormFieldCreateOrConnectWithoutCompetitionInput | CompetitionFormFieldCreateOrConnectWithoutCompetitionInput[]
    createMany?: CompetitionFormFieldCreateManyCompetitionInputEnvelope
    connect?: CompetitionFormFieldWhereUniqueInput | CompetitionFormFieldWhereUniqueInput[]
  }

  export type CompetitionCategoryUpdateOneRequiredWithoutCompetitionsNestedInput = {
    create?: XOR<CompetitionCategoryCreateWithoutCompetitionsInput, CompetitionCategoryUncheckedCreateWithoutCompetitionsInput>
    connectOrCreate?: CompetitionCategoryCreateOrConnectWithoutCompetitionsInput
    upsert?: CompetitionCategoryUpsertWithoutCompetitionsInput
    connect?: CompetitionCategoryWhereUniqueInput
    update?: XOR<XOR<CompetitionCategoryUpdateToOneWithWhereWithoutCompetitionsInput, CompetitionCategoryUpdateWithoutCompetitionsInput>, CompetitionCategoryUncheckedUpdateWithoutCompetitionsInput>
  }

  export type CompetitionLevelUpdateOneRequiredWithoutCompetitionsNestedInput = {
    create?: XOR<CompetitionLevelCreateWithoutCompetitionsInput, CompetitionLevelUncheckedCreateWithoutCompetitionsInput>
    connectOrCreate?: CompetitionLevelCreateOrConnectWithoutCompetitionsInput
    upsert?: CompetitionLevelUpsertWithoutCompetitionsInput
    connect?: CompetitionLevelWhereUniqueInput
    update?: XOR<XOR<CompetitionLevelUpdateToOneWithWhereWithoutCompetitionsInput, CompetitionLevelUpdateWithoutCompetitionsInput>, CompetitionLevelUncheckedUpdateWithoutCompetitionsInput>
  }

  export type UserUpdateOneRequiredWithoutCompetitionsNestedInput = {
    create?: XOR<UserCreateWithoutCompetitionsInput, UserUncheckedCreateWithoutCompetitionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompetitionsInput
    upsert?: UserUpsertWithoutCompetitionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompetitionsInput, UserUpdateWithoutCompetitionsInput>, UserUncheckedUpdateWithoutCompetitionsInput>
  }

  export type CompetitionRegistrationUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<CompetitionRegistrationCreateWithoutCompetitionInput, CompetitionRegistrationUncheckedCreateWithoutCompetitionInput> | CompetitionRegistrationCreateWithoutCompetitionInput[] | CompetitionRegistrationUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionRegistrationCreateOrConnectWithoutCompetitionInput | CompetitionRegistrationCreateOrConnectWithoutCompetitionInput[]
    upsert?: CompetitionRegistrationUpsertWithWhereUniqueWithoutCompetitionInput | CompetitionRegistrationUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: CompetitionRegistrationCreateManyCompetitionInputEnvelope
    set?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    disconnect?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    delete?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    connect?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    update?: CompetitionRegistrationUpdateWithWhereUniqueWithoutCompetitionInput | CompetitionRegistrationUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: CompetitionRegistrationUpdateManyWithWhereWithoutCompetitionInput | CompetitionRegistrationUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: CompetitionRegistrationScalarWhereInput | CompetitionRegistrationScalarWhereInput[]
  }

  export type CompetitionFormFieldUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<CompetitionFormFieldCreateWithoutCompetitionInput, CompetitionFormFieldUncheckedCreateWithoutCompetitionInput> | CompetitionFormFieldCreateWithoutCompetitionInput[] | CompetitionFormFieldUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionFormFieldCreateOrConnectWithoutCompetitionInput | CompetitionFormFieldCreateOrConnectWithoutCompetitionInput[]
    upsert?: CompetitionFormFieldUpsertWithWhereUniqueWithoutCompetitionInput | CompetitionFormFieldUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: CompetitionFormFieldCreateManyCompetitionInputEnvelope
    set?: CompetitionFormFieldWhereUniqueInput | CompetitionFormFieldWhereUniqueInput[]
    disconnect?: CompetitionFormFieldWhereUniqueInput | CompetitionFormFieldWhereUniqueInput[]
    delete?: CompetitionFormFieldWhereUniqueInput | CompetitionFormFieldWhereUniqueInput[]
    connect?: CompetitionFormFieldWhereUniqueInput | CompetitionFormFieldWhereUniqueInput[]
    update?: CompetitionFormFieldUpdateWithWhereUniqueWithoutCompetitionInput | CompetitionFormFieldUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: CompetitionFormFieldUpdateManyWithWhereWithoutCompetitionInput | CompetitionFormFieldUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: CompetitionFormFieldScalarWhereInput | CompetitionFormFieldScalarWhereInput[]
  }

  export type CompetitionRegistrationUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<CompetitionRegistrationCreateWithoutCompetitionInput, CompetitionRegistrationUncheckedCreateWithoutCompetitionInput> | CompetitionRegistrationCreateWithoutCompetitionInput[] | CompetitionRegistrationUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionRegistrationCreateOrConnectWithoutCompetitionInput | CompetitionRegistrationCreateOrConnectWithoutCompetitionInput[]
    upsert?: CompetitionRegistrationUpsertWithWhereUniqueWithoutCompetitionInput | CompetitionRegistrationUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: CompetitionRegistrationCreateManyCompetitionInputEnvelope
    set?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    disconnect?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    delete?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    connect?: CompetitionRegistrationWhereUniqueInput | CompetitionRegistrationWhereUniqueInput[]
    update?: CompetitionRegistrationUpdateWithWhereUniqueWithoutCompetitionInput | CompetitionRegistrationUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: CompetitionRegistrationUpdateManyWithWhereWithoutCompetitionInput | CompetitionRegistrationUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: CompetitionRegistrationScalarWhereInput | CompetitionRegistrationScalarWhereInput[]
  }

  export type CompetitionFormFieldUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<CompetitionFormFieldCreateWithoutCompetitionInput, CompetitionFormFieldUncheckedCreateWithoutCompetitionInput> | CompetitionFormFieldCreateWithoutCompetitionInput[] | CompetitionFormFieldUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionFormFieldCreateOrConnectWithoutCompetitionInput | CompetitionFormFieldCreateOrConnectWithoutCompetitionInput[]
    upsert?: CompetitionFormFieldUpsertWithWhereUniqueWithoutCompetitionInput | CompetitionFormFieldUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: CompetitionFormFieldCreateManyCompetitionInputEnvelope
    set?: CompetitionFormFieldWhereUniqueInput | CompetitionFormFieldWhereUniqueInput[]
    disconnect?: CompetitionFormFieldWhereUniqueInput | CompetitionFormFieldWhereUniqueInput[]
    delete?: CompetitionFormFieldWhereUniqueInput | CompetitionFormFieldWhereUniqueInput[]
    connect?: CompetitionFormFieldWhereUniqueInput | CompetitionFormFieldWhereUniqueInput[]
    update?: CompetitionFormFieldUpdateWithWhereUniqueWithoutCompetitionInput | CompetitionFormFieldUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: CompetitionFormFieldUpdateManyWithWhereWithoutCompetitionInput | CompetitionFormFieldUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: CompetitionFormFieldScalarWhereInput | CompetitionFormFieldScalarWhereInput[]
  }

  export type CompetitionCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<CompetitionCreateWithoutRegistrationsInput, CompetitionUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutRegistrationsInput
    connect?: CompetitionWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<StudentCreateWithoutRegistrationsInput, StudentUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRegistrationsInput
    connect?: StudentWhereUniqueInput
  }

  export type RegistrationAnswerCreateNestedManyWithoutRegistrationInput = {
    create?: XOR<RegistrationAnswerCreateWithoutRegistrationInput, RegistrationAnswerUncheckedCreateWithoutRegistrationInput> | RegistrationAnswerCreateWithoutRegistrationInput[] | RegistrationAnswerUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: RegistrationAnswerCreateOrConnectWithoutRegistrationInput | RegistrationAnswerCreateOrConnectWithoutRegistrationInput[]
    createMany?: RegistrationAnswerCreateManyRegistrationInputEnvelope
    connect?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
  }

  export type RegistrationAnswerUncheckedCreateNestedManyWithoutRegistrationInput = {
    create?: XOR<RegistrationAnswerCreateWithoutRegistrationInput, RegistrationAnswerUncheckedCreateWithoutRegistrationInput> | RegistrationAnswerCreateWithoutRegistrationInput[] | RegistrationAnswerUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: RegistrationAnswerCreateOrConnectWithoutRegistrationInput | RegistrationAnswerCreateOrConnectWithoutRegistrationInput[]
    createMany?: RegistrationAnswerCreateManyRegistrationInputEnvelope
    connect?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
  }

  export type EnumRegistrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationStatus
  }

  export type CompetitionUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<CompetitionCreateWithoutRegistrationsInput, CompetitionUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutRegistrationsInput
    upsert?: CompetitionUpsertWithoutRegistrationsInput
    connect?: CompetitionWhereUniqueInput
    update?: XOR<XOR<CompetitionUpdateToOneWithWhereWithoutRegistrationsInput, CompetitionUpdateWithoutRegistrationsInput>, CompetitionUncheckedUpdateWithoutRegistrationsInput>
  }

  export type StudentUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<StudentCreateWithoutRegistrationsInput, StudentUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRegistrationsInput
    upsert?: StudentUpsertWithoutRegistrationsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutRegistrationsInput, StudentUpdateWithoutRegistrationsInput>, StudentUncheckedUpdateWithoutRegistrationsInput>
  }

  export type RegistrationAnswerUpdateManyWithoutRegistrationNestedInput = {
    create?: XOR<RegistrationAnswerCreateWithoutRegistrationInput, RegistrationAnswerUncheckedCreateWithoutRegistrationInput> | RegistrationAnswerCreateWithoutRegistrationInput[] | RegistrationAnswerUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: RegistrationAnswerCreateOrConnectWithoutRegistrationInput | RegistrationAnswerCreateOrConnectWithoutRegistrationInput[]
    upsert?: RegistrationAnswerUpsertWithWhereUniqueWithoutRegistrationInput | RegistrationAnswerUpsertWithWhereUniqueWithoutRegistrationInput[]
    createMany?: RegistrationAnswerCreateManyRegistrationInputEnvelope
    set?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    disconnect?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    delete?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    connect?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    update?: RegistrationAnswerUpdateWithWhereUniqueWithoutRegistrationInput | RegistrationAnswerUpdateWithWhereUniqueWithoutRegistrationInput[]
    updateMany?: RegistrationAnswerUpdateManyWithWhereWithoutRegistrationInput | RegistrationAnswerUpdateManyWithWhereWithoutRegistrationInput[]
    deleteMany?: RegistrationAnswerScalarWhereInput | RegistrationAnswerScalarWhereInput[]
  }

  export type RegistrationAnswerUncheckedUpdateManyWithoutRegistrationNestedInput = {
    create?: XOR<RegistrationAnswerCreateWithoutRegistrationInput, RegistrationAnswerUncheckedCreateWithoutRegistrationInput> | RegistrationAnswerCreateWithoutRegistrationInput[] | RegistrationAnswerUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: RegistrationAnswerCreateOrConnectWithoutRegistrationInput | RegistrationAnswerCreateOrConnectWithoutRegistrationInput[]
    upsert?: RegistrationAnswerUpsertWithWhereUniqueWithoutRegistrationInput | RegistrationAnswerUpsertWithWhereUniqueWithoutRegistrationInput[]
    createMany?: RegistrationAnswerCreateManyRegistrationInputEnvelope
    set?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    disconnect?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    delete?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    connect?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    update?: RegistrationAnswerUpdateWithWhereUniqueWithoutRegistrationInput | RegistrationAnswerUpdateWithWhereUniqueWithoutRegistrationInput[]
    updateMany?: RegistrationAnswerUpdateManyWithWhereWithoutRegistrationInput | RegistrationAnswerUpdateManyWithWhereWithoutRegistrationInput[]
    deleteMany?: RegistrationAnswerScalarWhereInput | RegistrationAnswerScalarWhereInput[]
  }

  export type CompetitionCreateNestedOneWithoutCompetitionFormFieldInput = {
    create?: XOR<CompetitionCreateWithoutCompetitionFormFieldInput, CompetitionUncheckedCreateWithoutCompetitionFormFieldInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutCompetitionFormFieldInput
    connect?: CompetitionWhereUniqueInput
  }

  export type RegistrationAnswerCreateNestedManyWithoutFieldInput = {
    create?: XOR<RegistrationAnswerCreateWithoutFieldInput, RegistrationAnswerUncheckedCreateWithoutFieldInput> | RegistrationAnswerCreateWithoutFieldInput[] | RegistrationAnswerUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: RegistrationAnswerCreateOrConnectWithoutFieldInput | RegistrationAnswerCreateOrConnectWithoutFieldInput[]
    createMany?: RegistrationAnswerCreateManyFieldInputEnvelope
    connect?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
  }

  export type RegistrationAnswerUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<RegistrationAnswerCreateWithoutFieldInput, RegistrationAnswerUncheckedCreateWithoutFieldInput> | RegistrationAnswerCreateWithoutFieldInput[] | RegistrationAnswerUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: RegistrationAnswerCreateOrConnectWithoutFieldInput | RegistrationAnswerCreateOrConnectWithoutFieldInput[]
    createMany?: RegistrationAnswerCreateManyFieldInputEnvelope
    connect?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
  }

  export type EnumFieldTypeFieldUpdateOperationsInput = {
    set?: $Enums.FieldType
  }

  export type CompetitionUpdateOneRequiredWithoutCompetitionFormFieldNestedInput = {
    create?: XOR<CompetitionCreateWithoutCompetitionFormFieldInput, CompetitionUncheckedCreateWithoutCompetitionFormFieldInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutCompetitionFormFieldInput
    upsert?: CompetitionUpsertWithoutCompetitionFormFieldInput
    connect?: CompetitionWhereUniqueInput
    update?: XOR<XOR<CompetitionUpdateToOneWithWhereWithoutCompetitionFormFieldInput, CompetitionUpdateWithoutCompetitionFormFieldInput>, CompetitionUncheckedUpdateWithoutCompetitionFormFieldInput>
  }

  export type RegistrationAnswerUpdateManyWithoutFieldNestedInput = {
    create?: XOR<RegistrationAnswerCreateWithoutFieldInput, RegistrationAnswerUncheckedCreateWithoutFieldInput> | RegistrationAnswerCreateWithoutFieldInput[] | RegistrationAnswerUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: RegistrationAnswerCreateOrConnectWithoutFieldInput | RegistrationAnswerCreateOrConnectWithoutFieldInput[]
    upsert?: RegistrationAnswerUpsertWithWhereUniqueWithoutFieldInput | RegistrationAnswerUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: RegistrationAnswerCreateManyFieldInputEnvelope
    set?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    disconnect?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    delete?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    connect?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    update?: RegistrationAnswerUpdateWithWhereUniqueWithoutFieldInput | RegistrationAnswerUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: RegistrationAnswerUpdateManyWithWhereWithoutFieldInput | RegistrationAnswerUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: RegistrationAnswerScalarWhereInput | RegistrationAnswerScalarWhereInput[]
  }

  export type RegistrationAnswerUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<RegistrationAnswerCreateWithoutFieldInput, RegistrationAnswerUncheckedCreateWithoutFieldInput> | RegistrationAnswerCreateWithoutFieldInput[] | RegistrationAnswerUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: RegistrationAnswerCreateOrConnectWithoutFieldInput | RegistrationAnswerCreateOrConnectWithoutFieldInput[]
    upsert?: RegistrationAnswerUpsertWithWhereUniqueWithoutFieldInput | RegistrationAnswerUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: RegistrationAnswerCreateManyFieldInputEnvelope
    set?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    disconnect?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    delete?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    connect?: RegistrationAnswerWhereUniqueInput | RegistrationAnswerWhereUniqueInput[]
    update?: RegistrationAnswerUpdateWithWhereUniqueWithoutFieldInput | RegistrationAnswerUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: RegistrationAnswerUpdateManyWithWhereWithoutFieldInput | RegistrationAnswerUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: RegistrationAnswerScalarWhereInput | RegistrationAnswerScalarWhereInput[]
  }

  export type CompetitionRegistrationCreateNestedOneWithoutAnswersInput = {
    create?: XOR<CompetitionRegistrationCreateWithoutAnswersInput, CompetitionRegistrationUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: CompetitionRegistrationCreateOrConnectWithoutAnswersInput
    connect?: CompetitionRegistrationWhereUniqueInput
  }

  export type CompetitionFormFieldCreateNestedOneWithoutRegistrationAnswerInput = {
    create?: XOR<CompetitionFormFieldCreateWithoutRegistrationAnswerInput, CompetitionFormFieldUncheckedCreateWithoutRegistrationAnswerInput>
    connectOrCreate?: CompetitionFormFieldCreateOrConnectWithoutRegistrationAnswerInput
    connect?: CompetitionFormFieldWhereUniqueInput
  }

  export type CompetitionRegistrationUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<CompetitionRegistrationCreateWithoutAnswersInput, CompetitionRegistrationUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: CompetitionRegistrationCreateOrConnectWithoutAnswersInput
    upsert?: CompetitionRegistrationUpsertWithoutAnswersInput
    connect?: CompetitionRegistrationWhereUniqueInput
    update?: XOR<XOR<CompetitionRegistrationUpdateToOneWithWhereWithoutAnswersInput, CompetitionRegistrationUpdateWithoutAnswersInput>, CompetitionRegistrationUncheckedUpdateWithoutAnswersInput>
  }

  export type CompetitionFormFieldUpdateOneRequiredWithoutRegistrationAnswerNestedInput = {
    create?: XOR<CompetitionFormFieldCreateWithoutRegistrationAnswerInput, CompetitionFormFieldUncheckedCreateWithoutRegistrationAnswerInput>
    connectOrCreate?: CompetitionFormFieldCreateOrConnectWithoutRegistrationAnswerInput
    upsert?: CompetitionFormFieldUpsertWithoutRegistrationAnswerInput
    connect?: CompetitionFormFieldWhereUniqueInput
    update?: XOR<XOR<CompetitionFormFieldUpdateToOneWithWhereWithoutRegistrationAnswerInput, CompetitionFormFieldUpdateWithoutRegistrationAnswerInput>, CompetitionFormFieldUncheckedUpdateWithoutRegistrationAnswerInput>
  }

  export type StudentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<StudentCreateWithoutSubmissionsInput, StudentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubmissionsInput
    connect?: StudentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewedSubmissionsInput = {
    create?: XOR<UserCreateWithoutReviewedSubmissionsInput, UserUncheckedCreateWithoutReviewedSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type StudentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<StudentCreateWithoutSubmissionsInput, StudentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubmissionsInput
    upsert?: StudentUpsertWithoutSubmissionsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSubmissionsInput, StudentUpdateWithoutSubmissionsInput>, StudentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneWithoutReviewedSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutReviewedSubmissionsInput, UserUncheckedCreateWithoutReviewedSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedSubmissionsInput
    upsert?: UserUpsertWithoutReviewedSubmissionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewedSubmissionsInput, UserUpdateWithoutReviewedSubmissionsInput>, UserUncheckedUpdateWithoutReviewedSubmissionsInput>
  }

  export type UserCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsInput
    upsert?: UserUpsertWithoutAnnouncementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnouncementsInput, UserUpdateWithoutAnnouncementsInput>, UserUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type StudentCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<StudentCreateWithoutAchievementsInput, StudentUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAchievementsInput
    connect?: StudentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVerifiedAchievementsInput = {
    create?: XOR<UserCreateWithoutVerifiedAchievementsInput, UserUncheckedCreateWithoutVerifiedAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedAchievementsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAchievementStatusFieldUpdateOperationsInput = {
    set?: $Enums.AchievementStatus
  }

  export type StudentUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<StudentCreateWithoutAchievementsInput, StudentUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAchievementsInput
    upsert?: StudentUpsertWithoutAchievementsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAchievementsInput, StudentUpdateWithoutAchievementsInput>, StudentUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserUpdateOneWithoutVerifiedAchievementsNestedInput = {
    create?: XOR<UserCreateWithoutVerifiedAchievementsInput, UserUncheckedCreateWithoutVerifiedAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedAchievementsInput
    upsert?: UserUpsertWithoutVerifiedAchievementsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerifiedAchievementsInput, UserUpdateWithoutVerifiedAchievementsInput>, UserUncheckedUpdateWithoutVerifiedAchievementsInput>
  }

  export type StudentCreateNestedOneWithoutAcademicScoresInput = {
    create?: XOR<StudentCreateWithoutAcademicScoresInput, StudentUncheckedCreateWithoutAcademicScoresInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAcademicScoresInput
    connect?: StudentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdateOneRequiredWithoutAcademicScoresNestedInput = {
    create?: XOR<StudentCreateWithoutAcademicScoresInput, StudentUncheckedCreateWithoutAcademicScoresInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAcademicScoresInput
    upsert?: StudentUpsertWithoutAcademicScoresInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAcademicScoresInput, StudentUpdateWithoutAcademicScoresInput>, StudentUncheckedUpdateWithoutAcademicScoresInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type NestedEnumFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeFilter<$PrismaModel> | $Enums.FieldType
  }

  export type NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.FieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumFieldTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type NestedEnumAchievementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementStatus | EnumAchievementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementStatusFilter<$PrismaModel> | $Enums.AchievementStatus
  }

  export type NestedEnumAchievementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementStatus | EnumAchievementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementStatusWithAggregatesFilter<$PrismaModel> | $Enums.AchievementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementStatusFilter<$PrismaModel>
    _max?: NestedEnumAchievementStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NewsCreateWithoutAdminInput = {
    id?: string
    title: string
    content: string
    thumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUncheckedCreateWithoutAdminInput = {
    id?: string
    title: string
    content: string
    thumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCreateOrConnectWithoutAdminInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutAdminInput, NewsUncheckedCreateWithoutAdminInput>
  }

  export type NewsCreateManyAdminInputEnvelope = {
    data: NewsCreateManyAdminInput | NewsCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionCreateWithoutGuruInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CompetitionCategoryCreateNestedOneWithoutCompetitionsInput
    level: CompetitionLevelCreateNestedOneWithoutCompetitionsInput
    registrations?: CompetitionRegistrationCreateNestedManyWithoutCompetitionInput
    CompetitionFormField?: CompetitionFormFieldCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutGuruInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    categoryId: string
    levelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationUncheckedCreateNestedManyWithoutCompetitionInput
    CompetitionFormField?: CompetitionFormFieldUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutGuruInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutGuruInput, CompetitionUncheckedCreateWithoutGuruInput>
  }

  export type CompetitionCreateManyGuruInputEnvelope = {
    data: CompetitionCreateManyGuruInput | CompetitionCreateManyGuruInput[]
    skipDuplicates?: boolean
  }

  export type IndependentCompetitionSubmissionCreateWithoutGuruInput = {
    id?: string
    title: string
    description?: string | null
    documentUrl: string
    status?: $Enums.SubmissionStatus
    rejectionNote?: string | null
    recommendationLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutSubmissionsInput
  }

  export type IndependentCompetitionSubmissionUncheckedCreateWithoutGuruInput = {
    id?: string
    studentId: string
    title: string
    description?: string | null
    documentUrl: string
    status?: $Enums.SubmissionStatus
    rejectionNote?: string | null
    recommendationLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndependentCompetitionSubmissionCreateOrConnectWithoutGuruInput = {
    where: IndependentCompetitionSubmissionWhereUniqueInput
    create: XOR<IndependentCompetitionSubmissionCreateWithoutGuruInput, IndependentCompetitionSubmissionUncheckedCreateWithoutGuruInput>
  }

  export type IndependentCompetitionSubmissionCreateManyGuruInputEnvelope = {
    data: IndependentCompetitionSubmissionCreateManyGuruInput | IndependentCompetitionSubmissionCreateManyGuruInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCreateWithoutGuruInput = {
    id?: string
    title: string
    content: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUncheckedCreateWithoutGuruInput = {
    id?: string
    title: string
    content: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementCreateOrConnectWithoutGuruInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutGuruInput, AnnouncementUncheckedCreateWithoutGuruInput>
  }

  export type AnnouncementCreateManyGuruInputEnvelope = {
    data: AnnouncementCreateManyGuruInput | AnnouncementCreateManyGuruInput[]
    skipDuplicates?: boolean
  }

  export type AchievementCreateWithoutGuruInput = {
    id?: string
    competitionName: string
    result: string
    certificate?: string | null
    status?: $Enums.AchievementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAchievementsInput
  }

  export type AchievementUncheckedCreateWithoutGuruInput = {
    id?: string
    studentId: string
    competitionName: string
    result: string
    certificate?: string | null
    status?: $Enums.AchievementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementCreateOrConnectWithoutGuruInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutGuruInput, AchievementUncheckedCreateWithoutGuruInput>
  }

  export type AchievementCreateManyGuruInputEnvelope = {
    data: AchievementCreateManyGuruInput | AchievementCreateManyGuruInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithWhereUniqueWithoutAdminInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutAdminInput, NewsUncheckedUpdateWithoutAdminInput>
    create: XOR<NewsCreateWithoutAdminInput, NewsUncheckedCreateWithoutAdminInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutAdminInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutAdminInput, NewsUncheckedUpdateWithoutAdminInput>
  }

  export type NewsUpdateManyWithWhereWithoutAdminInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutAdminInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    thumbnail?: StringNullableFilter<"News"> | string | null
    isPublished?: BoolFilter<"News"> | boolean
    createdBy?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }

  export type CompetitionUpsertWithWhereUniqueWithoutGuruInput = {
    where: CompetitionWhereUniqueInput
    update: XOR<CompetitionUpdateWithoutGuruInput, CompetitionUncheckedUpdateWithoutGuruInput>
    create: XOR<CompetitionCreateWithoutGuruInput, CompetitionUncheckedCreateWithoutGuruInput>
  }

  export type CompetitionUpdateWithWhereUniqueWithoutGuruInput = {
    where: CompetitionWhereUniqueInput
    data: XOR<CompetitionUpdateWithoutGuruInput, CompetitionUncheckedUpdateWithoutGuruInput>
  }

  export type CompetitionUpdateManyWithWhereWithoutGuruInput = {
    where: CompetitionScalarWhereInput
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyWithoutGuruInput>
  }

  export type CompetitionScalarWhereInput = {
    AND?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
    OR?: CompetitionScalarWhereInput[]
    NOT?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
    id?: StringFilter<"Competition"> | string
    title?: StringFilter<"Competition"> | string
    description?: StringNullableFilter<"Competition"> | string | null
    thumbnail?: StringNullableFilter<"Competition"> | string | null
    isActive?: BoolFilter<"Competition"> | boolean
    startDate?: DateTimeFilter<"Competition"> | Date | string
    endDate?: DateTimeFilter<"Competition"> | Date | string
    categoryId?: StringFilter<"Competition"> | string
    levelId?: StringFilter<"Competition"> | string
    createdBy?: StringFilter<"Competition"> | string
    createdAt?: DateTimeFilter<"Competition"> | Date | string
    updatedAt?: DateTimeFilter<"Competition"> | Date | string
  }

  export type IndependentCompetitionSubmissionUpsertWithWhereUniqueWithoutGuruInput = {
    where: IndependentCompetitionSubmissionWhereUniqueInput
    update: XOR<IndependentCompetitionSubmissionUpdateWithoutGuruInput, IndependentCompetitionSubmissionUncheckedUpdateWithoutGuruInput>
    create: XOR<IndependentCompetitionSubmissionCreateWithoutGuruInput, IndependentCompetitionSubmissionUncheckedCreateWithoutGuruInput>
  }

  export type IndependentCompetitionSubmissionUpdateWithWhereUniqueWithoutGuruInput = {
    where: IndependentCompetitionSubmissionWhereUniqueInput
    data: XOR<IndependentCompetitionSubmissionUpdateWithoutGuruInput, IndependentCompetitionSubmissionUncheckedUpdateWithoutGuruInput>
  }

  export type IndependentCompetitionSubmissionUpdateManyWithWhereWithoutGuruInput = {
    where: IndependentCompetitionSubmissionScalarWhereInput
    data: XOR<IndependentCompetitionSubmissionUpdateManyMutationInput, IndependentCompetitionSubmissionUncheckedUpdateManyWithoutGuruInput>
  }

  export type IndependentCompetitionSubmissionScalarWhereInput = {
    AND?: IndependentCompetitionSubmissionScalarWhereInput | IndependentCompetitionSubmissionScalarWhereInput[]
    OR?: IndependentCompetitionSubmissionScalarWhereInput[]
    NOT?: IndependentCompetitionSubmissionScalarWhereInput | IndependentCompetitionSubmissionScalarWhereInput[]
    id?: StringFilter<"IndependentCompetitionSubmission"> | string
    studentId?: StringFilter<"IndependentCompetitionSubmission"> | string
    title?: StringFilter<"IndependentCompetitionSubmission"> | string
    description?: StringNullableFilter<"IndependentCompetitionSubmission"> | string | null
    documentUrl?: StringFilter<"IndependentCompetitionSubmission"> | string
    status?: EnumSubmissionStatusFilter<"IndependentCompetitionSubmission"> | $Enums.SubmissionStatus
    rejectionNote?: StringNullableFilter<"IndependentCompetitionSubmission"> | string | null
    recommendationLetter?: StringNullableFilter<"IndependentCompetitionSubmission"> | string | null
    reviewedBy?: StringNullableFilter<"IndependentCompetitionSubmission"> | string | null
    createdAt?: DateTimeFilter<"IndependentCompetitionSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"IndependentCompetitionSubmission"> | Date | string
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutGuruInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutGuruInput, AnnouncementUncheckedUpdateWithoutGuruInput>
    create: XOR<AnnouncementCreateWithoutGuruInput, AnnouncementUncheckedCreateWithoutGuruInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutGuruInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutGuruInput, AnnouncementUncheckedUpdateWithoutGuruInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutGuruInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutGuruInput>
  }

  export type AnnouncementScalarWhereInput = {
    AND?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    OR?: AnnouncementScalarWhereInput[]
    NOT?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    id?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    isPublished?: BoolFilter<"Announcement"> | boolean
    createdBy?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
  }

  export type AchievementUpsertWithWhereUniqueWithoutGuruInput = {
    where: AchievementWhereUniqueInput
    update: XOR<AchievementUpdateWithoutGuruInput, AchievementUncheckedUpdateWithoutGuruInput>
    create: XOR<AchievementCreateWithoutGuruInput, AchievementUncheckedCreateWithoutGuruInput>
  }

  export type AchievementUpdateWithWhereUniqueWithoutGuruInput = {
    where: AchievementWhereUniqueInput
    data: XOR<AchievementUpdateWithoutGuruInput, AchievementUncheckedUpdateWithoutGuruInput>
  }

  export type AchievementUpdateManyWithWhereWithoutGuruInput = {
    where: AchievementScalarWhereInput
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyWithoutGuruInput>
  }

  export type AchievementScalarWhereInput = {
    AND?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    OR?: AchievementScalarWhereInput[]
    NOT?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    id?: StringFilter<"Achievement"> | string
    studentId?: StringFilter<"Achievement"> | string
    competitionName?: StringFilter<"Achievement"> | string
    result?: StringFilter<"Achievement"> | string
    certificate?: StringNullableFilter<"Achievement"> | string | null
    status?: EnumAchievementStatusFilter<"Achievement"> | $Enums.AchievementStatus
    verifiedBy?: StringNullableFilter<"Achievement"> | string | null
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeFilter<"Achievement"> | Date | string
  }

  export type CompetitionRegistrationCreateWithoutStudentInput = {
    id?: string
    status?: $Enums.RegistrationStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutRegistrationsInput
    answers?: RegistrationAnswerCreateNestedManyWithoutRegistrationInput
  }

  export type CompetitionRegistrationUncheckedCreateWithoutStudentInput = {
    id?: string
    competitionId: string
    status?: $Enums.RegistrationStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: RegistrationAnswerUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type CompetitionRegistrationCreateOrConnectWithoutStudentInput = {
    where: CompetitionRegistrationWhereUniqueInput
    create: XOR<CompetitionRegistrationCreateWithoutStudentInput, CompetitionRegistrationUncheckedCreateWithoutStudentInput>
  }

  export type CompetitionRegistrationCreateManyStudentInputEnvelope = {
    data: CompetitionRegistrationCreateManyStudentInput | CompetitionRegistrationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type IndependentCompetitionSubmissionCreateWithoutStudentInput = {
    id?: string
    title: string
    description?: string | null
    documentUrl: string
    status?: $Enums.SubmissionStatus
    rejectionNote?: string | null
    recommendationLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guru?: UserCreateNestedOneWithoutReviewedSubmissionsInput
  }

  export type IndependentCompetitionSubmissionUncheckedCreateWithoutStudentInput = {
    id?: string
    title: string
    description?: string | null
    documentUrl: string
    status?: $Enums.SubmissionStatus
    rejectionNote?: string | null
    recommendationLetter?: string | null
    reviewedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndependentCompetitionSubmissionCreateOrConnectWithoutStudentInput = {
    where: IndependentCompetitionSubmissionWhereUniqueInput
    create: XOR<IndependentCompetitionSubmissionCreateWithoutStudentInput, IndependentCompetitionSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type IndependentCompetitionSubmissionCreateManyStudentInputEnvelope = {
    data: IndependentCompetitionSubmissionCreateManyStudentInput | IndependentCompetitionSubmissionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AchievementCreateWithoutStudentInput = {
    id?: string
    competitionName: string
    result: string
    certificate?: string | null
    status?: $Enums.AchievementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guru?: UserCreateNestedOneWithoutVerifiedAchievementsInput
  }

  export type AchievementUncheckedCreateWithoutStudentInput = {
    id?: string
    competitionName: string
    result: string
    certificate?: string | null
    status?: $Enums.AchievementStatus
    verifiedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementCreateOrConnectWithoutStudentInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutStudentInput, AchievementUncheckedCreateWithoutStudentInput>
  }

  export type AchievementCreateManyStudentInputEnvelope = {
    data: AchievementCreateManyStudentInput | AchievementCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AcademicScoreCreateWithoutStudentInput = {
    id?: string
    subject: string
    score: number
    semester: string
    year: number
    createdAt?: Date | string
  }

  export type AcademicScoreUncheckedCreateWithoutStudentInput = {
    id?: string
    subject: string
    score: number
    semester: string
    year: number
    createdAt?: Date | string
  }

  export type AcademicScoreCreateOrConnectWithoutStudentInput = {
    where: AcademicScoreWhereUniqueInput
    create: XOR<AcademicScoreCreateWithoutStudentInput, AcademicScoreUncheckedCreateWithoutStudentInput>
  }

  export type AcademicScoreCreateManyStudentInputEnvelope = {
    data: AcademicScoreCreateManyStudentInput | AcademicScoreCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionRegistrationUpsertWithWhereUniqueWithoutStudentInput = {
    where: CompetitionRegistrationWhereUniqueInput
    update: XOR<CompetitionRegistrationUpdateWithoutStudentInput, CompetitionRegistrationUncheckedUpdateWithoutStudentInput>
    create: XOR<CompetitionRegistrationCreateWithoutStudentInput, CompetitionRegistrationUncheckedCreateWithoutStudentInput>
  }

  export type CompetitionRegistrationUpdateWithWhereUniqueWithoutStudentInput = {
    where: CompetitionRegistrationWhereUniqueInput
    data: XOR<CompetitionRegistrationUpdateWithoutStudentInput, CompetitionRegistrationUncheckedUpdateWithoutStudentInput>
  }

  export type CompetitionRegistrationUpdateManyWithWhereWithoutStudentInput = {
    where: CompetitionRegistrationScalarWhereInput
    data: XOR<CompetitionRegistrationUpdateManyMutationInput, CompetitionRegistrationUncheckedUpdateManyWithoutStudentInput>
  }

  export type CompetitionRegistrationScalarWhereInput = {
    AND?: CompetitionRegistrationScalarWhereInput | CompetitionRegistrationScalarWhereInput[]
    OR?: CompetitionRegistrationScalarWhereInput[]
    NOT?: CompetitionRegistrationScalarWhereInput | CompetitionRegistrationScalarWhereInput[]
    id?: StringFilter<"CompetitionRegistration"> | string
    competitionId?: StringFilter<"CompetitionRegistration"> | string
    studentId?: StringFilter<"CompetitionRegistration"> | string
    status?: EnumRegistrationStatusFilter<"CompetitionRegistration"> | $Enums.RegistrationStatus
    note?: StringNullableFilter<"CompetitionRegistration"> | string | null
    createdAt?: DateTimeFilter<"CompetitionRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"CompetitionRegistration"> | Date | string
  }

  export type IndependentCompetitionSubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: IndependentCompetitionSubmissionWhereUniqueInput
    update: XOR<IndependentCompetitionSubmissionUpdateWithoutStudentInput, IndependentCompetitionSubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<IndependentCompetitionSubmissionCreateWithoutStudentInput, IndependentCompetitionSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type IndependentCompetitionSubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: IndependentCompetitionSubmissionWhereUniqueInput
    data: XOR<IndependentCompetitionSubmissionUpdateWithoutStudentInput, IndependentCompetitionSubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type IndependentCompetitionSubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: IndependentCompetitionSubmissionScalarWhereInput
    data: XOR<IndependentCompetitionSubmissionUpdateManyMutationInput, IndependentCompetitionSubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type AchievementUpsertWithWhereUniqueWithoutStudentInput = {
    where: AchievementWhereUniqueInput
    update: XOR<AchievementUpdateWithoutStudentInput, AchievementUncheckedUpdateWithoutStudentInput>
    create: XOR<AchievementCreateWithoutStudentInput, AchievementUncheckedCreateWithoutStudentInput>
  }

  export type AchievementUpdateWithWhereUniqueWithoutStudentInput = {
    where: AchievementWhereUniqueInput
    data: XOR<AchievementUpdateWithoutStudentInput, AchievementUncheckedUpdateWithoutStudentInput>
  }

  export type AchievementUpdateManyWithWhereWithoutStudentInput = {
    where: AchievementScalarWhereInput
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyWithoutStudentInput>
  }

  export type AcademicScoreUpsertWithWhereUniqueWithoutStudentInput = {
    where: AcademicScoreWhereUniqueInput
    update: XOR<AcademicScoreUpdateWithoutStudentInput, AcademicScoreUncheckedUpdateWithoutStudentInput>
    create: XOR<AcademicScoreCreateWithoutStudentInput, AcademicScoreUncheckedCreateWithoutStudentInput>
  }

  export type AcademicScoreUpdateWithWhereUniqueWithoutStudentInput = {
    where: AcademicScoreWhereUniqueInput
    data: XOR<AcademicScoreUpdateWithoutStudentInput, AcademicScoreUncheckedUpdateWithoutStudentInput>
  }

  export type AcademicScoreUpdateManyWithWhereWithoutStudentInput = {
    where: AcademicScoreScalarWhereInput
    data: XOR<AcademicScoreUpdateManyMutationInput, AcademicScoreUncheckedUpdateManyWithoutStudentInput>
  }

  export type AcademicScoreScalarWhereInput = {
    AND?: AcademicScoreScalarWhereInput | AcademicScoreScalarWhereInput[]
    OR?: AcademicScoreScalarWhereInput[]
    NOT?: AcademicScoreScalarWhereInput | AcademicScoreScalarWhereInput[]
    id?: StringFilter<"AcademicScore"> | string
    studentId?: StringFilter<"AcademicScore"> | string
    subject?: StringFilter<"AcademicScore"> | string
    score?: FloatFilter<"AcademicScore"> | number
    semester?: StringFilter<"AcademicScore"> | string
    year?: IntFilter<"AcademicScore"> | number
    createdAt?: DateTimeFilter<"AcademicScore"> | Date | string
  }

  export type CompetitionCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    level: CompetitionLevelCreateNestedOneWithoutCompetitionsInput
    guru: UserCreateNestedOneWithoutCompetitionsInput
    registrations?: CompetitionRegistrationCreateNestedManyWithoutCompetitionInput
    CompetitionFormField?: CompetitionFormFieldCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    levelId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationUncheckedCreateNestedManyWithoutCompetitionInput
    CompetitionFormField?: CompetitionFormFieldUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutCategoryInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutCategoryInput, CompetitionUncheckedCreateWithoutCategoryInput>
  }

  export type CompetitionCreateManyCategoryInputEnvelope = {
    data: CompetitionCreateManyCategoryInput | CompetitionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CompetitionWhereUniqueInput
    update: XOR<CompetitionUpdateWithoutCategoryInput, CompetitionUncheckedUpdateWithoutCategoryInput>
    create: XOR<CompetitionCreateWithoutCategoryInput, CompetitionUncheckedCreateWithoutCategoryInput>
  }

  export type CompetitionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CompetitionWhereUniqueInput
    data: XOR<CompetitionUpdateWithoutCategoryInput, CompetitionUncheckedUpdateWithoutCategoryInput>
  }

  export type CompetitionUpdateManyWithWhereWithoutCategoryInput = {
    where: CompetitionScalarWhereInput
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CompetitionCreateWithoutLevelInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CompetitionCategoryCreateNestedOneWithoutCompetitionsInput
    guru: UserCreateNestedOneWithoutCompetitionsInput
    registrations?: CompetitionRegistrationCreateNestedManyWithoutCompetitionInput
    CompetitionFormField?: CompetitionFormFieldCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutLevelInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    categoryId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationUncheckedCreateNestedManyWithoutCompetitionInput
    CompetitionFormField?: CompetitionFormFieldUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutLevelInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutLevelInput, CompetitionUncheckedCreateWithoutLevelInput>
  }

  export type CompetitionCreateManyLevelInputEnvelope = {
    data: CompetitionCreateManyLevelInput | CompetitionCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionUpsertWithWhereUniqueWithoutLevelInput = {
    where: CompetitionWhereUniqueInput
    update: XOR<CompetitionUpdateWithoutLevelInput, CompetitionUncheckedUpdateWithoutLevelInput>
    create: XOR<CompetitionCreateWithoutLevelInput, CompetitionUncheckedCreateWithoutLevelInput>
  }

  export type CompetitionUpdateWithWhereUniqueWithoutLevelInput = {
    where: CompetitionWhereUniqueInput
    data: XOR<CompetitionUpdateWithoutLevelInput, CompetitionUncheckedUpdateWithoutLevelInput>
  }

  export type CompetitionUpdateManyWithWhereWithoutLevelInput = {
    where: CompetitionScalarWhereInput
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyWithoutLevelInput>
  }

  export type UserCreateWithoutNewsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    competitions?: CompetitionCreateNestedManyWithoutGuruInput
    reviewedSubmissions?: IndependentCompetitionSubmissionCreateNestedManyWithoutGuruInput
    announcements?: AnnouncementCreateNestedManyWithoutGuruInput
    verifiedAchievements?: AchievementCreateNestedManyWithoutGuruInput
  }

  export type UserUncheckedCreateWithoutNewsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    competitions?: CompetitionUncheckedCreateNestedManyWithoutGuruInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUncheckedCreateNestedManyWithoutGuruInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutGuruInput
    verifiedAchievements?: AchievementUncheckedCreateNestedManyWithoutGuruInput
  }

  export type UserCreateOrConnectWithoutNewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
  }

  export type UserUpsertWithoutNewsInput = {
    update: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitions?: CompetitionUpdateManyWithoutGuruNestedInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUpdateManyWithoutGuruNestedInput
    announcements?: AnnouncementUpdateManyWithoutGuruNestedInput
    verifiedAchievements?: AchievementUpdateManyWithoutGuruNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitions?: CompetitionUncheckedUpdateManyWithoutGuruNestedInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUncheckedUpdateManyWithoutGuruNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutGuruNestedInput
    verifiedAchievements?: AchievementUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type CompetitionCategoryCreateWithoutCompetitionsInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionCategoryUncheckedCreateWithoutCompetitionsInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionCategoryCreateOrConnectWithoutCompetitionsInput = {
    where: CompetitionCategoryWhereUniqueInput
    create: XOR<CompetitionCategoryCreateWithoutCompetitionsInput, CompetitionCategoryUncheckedCreateWithoutCompetitionsInput>
  }

  export type CompetitionLevelCreateWithoutCompetitionsInput = {
    id?: string
    name: string
    order: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionLevelUncheckedCreateWithoutCompetitionsInput = {
    id?: string
    name: string
    order: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionLevelCreateOrConnectWithoutCompetitionsInput = {
    where: CompetitionLevelWhereUniqueInput
    create: XOR<CompetitionLevelCreateWithoutCompetitionsInput, CompetitionLevelUncheckedCreateWithoutCompetitionsInput>
  }

  export type UserCreateWithoutCompetitionsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAdminInput
    reviewedSubmissions?: IndependentCompetitionSubmissionCreateNestedManyWithoutGuruInput
    announcements?: AnnouncementCreateNestedManyWithoutGuruInput
    verifiedAchievements?: AchievementCreateNestedManyWithoutGuruInput
  }

  export type UserUncheckedCreateWithoutCompetitionsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAdminInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUncheckedCreateNestedManyWithoutGuruInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutGuruInput
    verifiedAchievements?: AchievementUncheckedCreateNestedManyWithoutGuruInput
  }

  export type UserCreateOrConnectWithoutCompetitionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompetitionsInput, UserUncheckedCreateWithoutCompetitionsInput>
  }

  export type CompetitionRegistrationCreateWithoutCompetitionInput = {
    id?: string
    status?: $Enums.RegistrationStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutRegistrationsInput
    answers?: RegistrationAnswerCreateNestedManyWithoutRegistrationInput
  }

  export type CompetitionRegistrationUncheckedCreateWithoutCompetitionInput = {
    id?: string
    studentId: string
    status?: $Enums.RegistrationStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: RegistrationAnswerUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type CompetitionRegistrationCreateOrConnectWithoutCompetitionInput = {
    where: CompetitionRegistrationWhereUniqueInput
    create: XOR<CompetitionRegistrationCreateWithoutCompetitionInput, CompetitionRegistrationUncheckedCreateWithoutCompetitionInput>
  }

  export type CompetitionRegistrationCreateManyCompetitionInputEnvelope = {
    data: CompetitionRegistrationCreateManyCompetitionInput | CompetitionRegistrationCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionFormFieldCreateWithoutCompetitionInput = {
    id?: string
    label: string
    fieldType: $Enums.FieldType
    isRequired?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    registrationAnswer?: RegistrationAnswerCreateNestedManyWithoutFieldInput
  }

  export type CompetitionFormFieldUncheckedCreateWithoutCompetitionInput = {
    id?: string
    label: string
    fieldType: $Enums.FieldType
    isRequired?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    registrationAnswer?: RegistrationAnswerUncheckedCreateNestedManyWithoutFieldInput
  }

  export type CompetitionFormFieldCreateOrConnectWithoutCompetitionInput = {
    where: CompetitionFormFieldWhereUniqueInput
    create: XOR<CompetitionFormFieldCreateWithoutCompetitionInput, CompetitionFormFieldUncheckedCreateWithoutCompetitionInput>
  }

  export type CompetitionFormFieldCreateManyCompetitionInputEnvelope = {
    data: CompetitionFormFieldCreateManyCompetitionInput | CompetitionFormFieldCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionCategoryUpsertWithoutCompetitionsInput = {
    update: XOR<CompetitionCategoryUpdateWithoutCompetitionsInput, CompetitionCategoryUncheckedUpdateWithoutCompetitionsInput>
    create: XOR<CompetitionCategoryCreateWithoutCompetitionsInput, CompetitionCategoryUncheckedCreateWithoutCompetitionsInput>
    where?: CompetitionCategoryWhereInput
  }

  export type CompetitionCategoryUpdateToOneWithWhereWithoutCompetitionsInput = {
    where?: CompetitionCategoryWhereInput
    data: XOR<CompetitionCategoryUpdateWithoutCompetitionsInput, CompetitionCategoryUncheckedUpdateWithoutCompetitionsInput>
  }

  export type CompetitionCategoryUpdateWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionCategoryUncheckedUpdateWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionLevelUpsertWithoutCompetitionsInput = {
    update: XOR<CompetitionLevelUpdateWithoutCompetitionsInput, CompetitionLevelUncheckedUpdateWithoutCompetitionsInput>
    create: XOR<CompetitionLevelCreateWithoutCompetitionsInput, CompetitionLevelUncheckedCreateWithoutCompetitionsInput>
    where?: CompetitionLevelWhereInput
  }

  export type CompetitionLevelUpdateToOneWithWhereWithoutCompetitionsInput = {
    where?: CompetitionLevelWhereInput
    data: XOR<CompetitionLevelUpdateWithoutCompetitionsInput, CompetitionLevelUncheckedUpdateWithoutCompetitionsInput>
  }

  export type CompetitionLevelUpdateWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionLevelUncheckedUpdateWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCompetitionsInput = {
    update: XOR<UserUpdateWithoutCompetitionsInput, UserUncheckedUpdateWithoutCompetitionsInput>
    create: XOR<UserCreateWithoutCompetitionsInput, UserUncheckedCreateWithoutCompetitionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompetitionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompetitionsInput, UserUncheckedUpdateWithoutCompetitionsInput>
  }

  export type UserUpdateWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAdminNestedInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUpdateManyWithoutGuruNestedInput
    announcements?: AnnouncementUpdateManyWithoutGuruNestedInput
    verifiedAchievements?: AchievementUpdateManyWithoutGuruNestedInput
  }

  export type UserUncheckedUpdateWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAdminNestedInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUncheckedUpdateManyWithoutGuruNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutGuruNestedInput
    verifiedAchievements?: AchievementUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type CompetitionRegistrationUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: CompetitionRegistrationWhereUniqueInput
    update: XOR<CompetitionRegistrationUpdateWithoutCompetitionInput, CompetitionRegistrationUncheckedUpdateWithoutCompetitionInput>
    create: XOR<CompetitionRegistrationCreateWithoutCompetitionInput, CompetitionRegistrationUncheckedCreateWithoutCompetitionInput>
  }

  export type CompetitionRegistrationUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: CompetitionRegistrationWhereUniqueInput
    data: XOR<CompetitionRegistrationUpdateWithoutCompetitionInput, CompetitionRegistrationUncheckedUpdateWithoutCompetitionInput>
  }

  export type CompetitionRegistrationUpdateManyWithWhereWithoutCompetitionInput = {
    where: CompetitionRegistrationScalarWhereInput
    data: XOR<CompetitionRegistrationUpdateManyMutationInput, CompetitionRegistrationUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type CompetitionFormFieldUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: CompetitionFormFieldWhereUniqueInput
    update: XOR<CompetitionFormFieldUpdateWithoutCompetitionInput, CompetitionFormFieldUncheckedUpdateWithoutCompetitionInput>
    create: XOR<CompetitionFormFieldCreateWithoutCompetitionInput, CompetitionFormFieldUncheckedCreateWithoutCompetitionInput>
  }

  export type CompetitionFormFieldUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: CompetitionFormFieldWhereUniqueInput
    data: XOR<CompetitionFormFieldUpdateWithoutCompetitionInput, CompetitionFormFieldUncheckedUpdateWithoutCompetitionInput>
  }

  export type CompetitionFormFieldUpdateManyWithWhereWithoutCompetitionInput = {
    where: CompetitionFormFieldScalarWhereInput
    data: XOR<CompetitionFormFieldUpdateManyMutationInput, CompetitionFormFieldUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type CompetitionFormFieldScalarWhereInput = {
    AND?: CompetitionFormFieldScalarWhereInput | CompetitionFormFieldScalarWhereInput[]
    OR?: CompetitionFormFieldScalarWhereInput[]
    NOT?: CompetitionFormFieldScalarWhereInput | CompetitionFormFieldScalarWhereInput[]
    id?: StringFilter<"CompetitionFormField"> | string
    competitionId?: StringFilter<"CompetitionFormField"> | string
    label?: StringFilter<"CompetitionFormField"> | string
    fieldType?: EnumFieldTypeFilter<"CompetitionFormField"> | $Enums.FieldType
    isRequired?: BoolFilter<"CompetitionFormField"> | boolean
    options?: JsonNullableFilter<"CompetitionFormField">
    order?: IntFilter<"CompetitionFormField"> | number
    createdAt?: DateTimeFilter<"CompetitionFormField"> | Date | string
  }

  export type CompetitionCreateWithoutRegistrationsInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CompetitionCategoryCreateNestedOneWithoutCompetitionsInput
    level: CompetitionLevelCreateNestedOneWithoutCompetitionsInput
    guru: UserCreateNestedOneWithoutCompetitionsInput
    CompetitionFormField?: CompetitionFormFieldCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    categoryId: string
    levelId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    CompetitionFormField?: CompetitionFormFieldUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutRegistrationsInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutRegistrationsInput, CompetitionUncheckedCreateWithoutRegistrationsInput>
  }

  export type StudentCreateWithoutRegistrationsInput = {
    id?: string
    nisn: string
    password: string
    name: string
    kelas: string
    angkatan: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: IndependentCompetitionSubmissionCreateNestedManyWithoutStudentInput
    achievements?: AchievementCreateNestedManyWithoutStudentInput
    academicScores?: AcademicScoreCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    nisn: string
    password: string
    name: string
    kelas: string
    angkatan: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: IndependentCompetitionSubmissionUncheckedCreateNestedManyWithoutStudentInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutStudentInput
    academicScores?: AcademicScoreUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutRegistrationsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutRegistrationsInput, StudentUncheckedCreateWithoutRegistrationsInput>
  }

  export type RegistrationAnswerCreateWithoutRegistrationInput = {
    id?: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    field: CompetitionFormFieldCreateNestedOneWithoutRegistrationAnswerInput
  }

  export type RegistrationAnswerUncheckedCreateWithoutRegistrationInput = {
    id?: string
    fieldId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RegistrationAnswerCreateOrConnectWithoutRegistrationInput = {
    where: RegistrationAnswerWhereUniqueInput
    create: XOR<RegistrationAnswerCreateWithoutRegistrationInput, RegistrationAnswerUncheckedCreateWithoutRegistrationInput>
  }

  export type RegistrationAnswerCreateManyRegistrationInputEnvelope = {
    data: RegistrationAnswerCreateManyRegistrationInput | RegistrationAnswerCreateManyRegistrationInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionUpsertWithoutRegistrationsInput = {
    update: XOR<CompetitionUpdateWithoutRegistrationsInput, CompetitionUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<CompetitionCreateWithoutRegistrationsInput, CompetitionUncheckedCreateWithoutRegistrationsInput>
    where?: CompetitionWhereInput
  }

  export type CompetitionUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: CompetitionWhereInput
    data: XOR<CompetitionUpdateWithoutRegistrationsInput, CompetitionUncheckedUpdateWithoutRegistrationsInput>
  }

  export type CompetitionUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CompetitionCategoryUpdateOneRequiredWithoutCompetitionsNestedInput
    level?: CompetitionLevelUpdateOneRequiredWithoutCompetitionsNestedInput
    guru?: UserUpdateOneRequiredWithoutCompetitionsNestedInput
    CompetitionFormField?: CompetitionFormFieldUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CompetitionFormField?: CompetitionFormFieldUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type StudentUpsertWithoutRegistrationsInput = {
    update: XOR<StudentUpdateWithoutRegistrationsInput, StudentUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<StudentCreateWithoutRegistrationsInput, StudentUncheckedCreateWithoutRegistrationsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutRegistrationsInput, StudentUncheckedUpdateWithoutRegistrationsInput>
  }

  export type StudentUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: IndependentCompetitionSubmissionUpdateManyWithoutStudentNestedInput
    achievements?: AchievementUpdateManyWithoutStudentNestedInput
    academicScores?: AcademicScoreUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: IndependentCompetitionSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutStudentNestedInput
    academicScores?: AcademicScoreUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type RegistrationAnswerUpsertWithWhereUniqueWithoutRegistrationInput = {
    where: RegistrationAnswerWhereUniqueInput
    update: XOR<RegistrationAnswerUpdateWithoutRegistrationInput, RegistrationAnswerUncheckedUpdateWithoutRegistrationInput>
    create: XOR<RegistrationAnswerCreateWithoutRegistrationInput, RegistrationAnswerUncheckedCreateWithoutRegistrationInput>
  }

  export type RegistrationAnswerUpdateWithWhereUniqueWithoutRegistrationInput = {
    where: RegistrationAnswerWhereUniqueInput
    data: XOR<RegistrationAnswerUpdateWithoutRegistrationInput, RegistrationAnswerUncheckedUpdateWithoutRegistrationInput>
  }

  export type RegistrationAnswerUpdateManyWithWhereWithoutRegistrationInput = {
    where: RegistrationAnswerScalarWhereInput
    data: XOR<RegistrationAnswerUpdateManyMutationInput, RegistrationAnswerUncheckedUpdateManyWithoutRegistrationInput>
  }

  export type RegistrationAnswerScalarWhereInput = {
    AND?: RegistrationAnswerScalarWhereInput | RegistrationAnswerScalarWhereInput[]
    OR?: RegistrationAnswerScalarWhereInput[]
    NOT?: RegistrationAnswerScalarWhereInput | RegistrationAnswerScalarWhereInput[]
    id?: StringFilter<"RegistrationAnswer"> | string
    registrationId?: StringFilter<"RegistrationAnswer"> | string
    fieldId?: StringFilter<"RegistrationAnswer"> | string
    value?: JsonFilter<"RegistrationAnswer">
    createdAt?: DateTimeFilter<"RegistrationAnswer"> | Date | string
  }

  export type CompetitionCreateWithoutCompetitionFormFieldInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CompetitionCategoryCreateNestedOneWithoutCompetitionsInput
    level: CompetitionLevelCreateNestedOneWithoutCompetitionsInput
    guru: UserCreateNestedOneWithoutCompetitionsInput
    registrations?: CompetitionRegistrationCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutCompetitionFormFieldInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    categoryId: string
    levelId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutCompetitionFormFieldInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutCompetitionFormFieldInput, CompetitionUncheckedCreateWithoutCompetitionFormFieldInput>
  }

  export type RegistrationAnswerCreateWithoutFieldInput = {
    id?: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    registration: CompetitionRegistrationCreateNestedOneWithoutAnswersInput
  }

  export type RegistrationAnswerUncheckedCreateWithoutFieldInput = {
    id?: string
    registrationId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RegistrationAnswerCreateOrConnectWithoutFieldInput = {
    where: RegistrationAnswerWhereUniqueInput
    create: XOR<RegistrationAnswerCreateWithoutFieldInput, RegistrationAnswerUncheckedCreateWithoutFieldInput>
  }

  export type RegistrationAnswerCreateManyFieldInputEnvelope = {
    data: RegistrationAnswerCreateManyFieldInput | RegistrationAnswerCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionUpsertWithoutCompetitionFormFieldInput = {
    update: XOR<CompetitionUpdateWithoutCompetitionFormFieldInput, CompetitionUncheckedUpdateWithoutCompetitionFormFieldInput>
    create: XOR<CompetitionCreateWithoutCompetitionFormFieldInput, CompetitionUncheckedCreateWithoutCompetitionFormFieldInput>
    where?: CompetitionWhereInput
  }

  export type CompetitionUpdateToOneWithWhereWithoutCompetitionFormFieldInput = {
    where?: CompetitionWhereInput
    data: XOR<CompetitionUpdateWithoutCompetitionFormFieldInput, CompetitionUncheckedUpdateWithoutCompetitionFormFieldInput>
  }

  export type CompetitionUpdateWithoutCompetitionFormFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CompetitionCategoryUpdateOneRequiredWithoutCompetitionsNestedInput
    level?: CompetitionLevelUpdateOneRequiredWithoutCompetitionsNestedInput
    guru?: UserUpdateOneRequiredWithoutCompetitionsNestedInput
    registrations?: CompetitionRegistrationUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutCompetitionFormFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type RegistrationAnswerUpsertWithWhereUniqueWithoutFieldInput = {
    where: RegistrationAnswerWhereUniqueInput
    update: XOR<RegistrationAnswerUpdateWithoutFieldInput, RegistrationAnswerUncheckedUpdateWithoutFieldInput>
    create: XOR<RegistrationAnswerCreateWithoutFieldInput, RegistrationAnswerUncheckedCreateWithoutFieldInput>
  }

  export type RegistrationAnswerUpdateWithWhereUniqueWithoutFieldInput = {
    where: RegistrationAnswerWhereUniqueInput
    data: XOR<RegistrationAnswerUpdateWithoutFieldInput, RegistrationAnswerUncheckedUpdateWithoutFieldInput>
  }

  export type RegistrationAnswerUpdateManyWithWhereWithoutFieldInput = {
    where: RegistrationAnswerScalarWhereInput
    data: XOR<RegistrationAnswerUpdateManyMutationInput, RegistrationAnswerUncheckedUpdateManyWithoutFieldInput>
  }

  export type CompetitionRegistrationCreateWithoutAnswersInput = {
    id?: string
    status?: $Enums.RegistrationStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutRegistrationsInput
    student: StudentCreateNestedOneWithoutRegistrationsInput
  }

  export type CompetitionRegistrationUncheckedCreateWithoutAnswersInput = {
    id?: string
    competitionId: string
    studentId: string
    status?: $Enums.RegistrationStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionRegistrationCreateOrConnectWithoutAnswersInput = {
    where: CompetitionRegistrationWhereUniqueInput
    create: XOR<CompetitionRegistrationCreateWithoutAnswersInput, CompetitionRegistrationUncheckedCreateWithoutAnswersInput>
  }

  export type CompetitionFormFieldCreateWithoutRegistrationAnswerInput = {
    id?: string
    label: string
    fieldType: $Enums.FieldType
    isRequired?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutCompetitionFormFieldInput
  }

  export type CompetitionFormFieldUncheckedCreateWithoutRegistrationAnswerInput = {
    id?: string
    competitionId: string
    label: string
    fieldType: $Enums.FieldType
    isRequired?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
  }

  export type CompetitionFormFieldCreateOrConnectWithoutRegistrationAnswerInput = {
    where: CompetitionFormFieldWhereUniqueInput
    create: XOR<CompetitionFormFieldCreateWithoutRegistrationAnswerInput, CompetitionFormFieldUncheckedCreateWithoutRegistrationAnswerInput>
  }

  export type CompetitionRegistrationUpsertWithoutAnswersInput = {
    update: XOR<CompetitionRegistrationUpdateWithoutAnswersInput, CompetitionRegistrationUncheckedUpdateWithoutAnswersInput>
    create: XOR<CompetitionRegistrationCreateWithoutAnswersInput, CompetitionRegistrationUncheckedCreateWithoutAnswersInput>
    where?: CompetitionRegistrationWhereInput
  }

  export type CompetitionRegistrationUpdateToOneWithWhereWithoutAnswersInput = {
    where?: CompetitionRegistrationWhereInput
    data: XOR<CompetitionRegistrationUpdateWithoutAnswersInput, CompetitionRegistrationUncheckedUpdateWithoutAnswersInput>
  }

  export type CompetitionRegistrationUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutRegistrationsNestedInput
    student?: StudentUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type CompetitionRegistrationUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionFormFieldUpsertWithoutRegistrationAnswerInput = {
    update: XOR<CompetitionFormFieldUpdateWithoutRegistrationAnswerInput, CompetitionFormFieldUncheckedUpdateWithoutRegistrationAnswerInput>
    create: XOR<CompetitionFormFieldCreateWithoutRegistrationAnswerInput, CompetitionFormFieldUncheckedCreateWithoutRegistrationAnswerInput>
    where?: CompetitionFormFieldWhereInput
  }

  export type CompetitionFormFieldUpdateToOneWithWhereWithoutRegistrationAnswerInput = {
    where?: CompetitionFormFieldWhereInput
    data: XOR<CompetitionFormFieldUpdateWithoutRegistrationAnswerInput, CompetitionFormFieldUncheckedUpdateWithoutRegistrationAnswerInput>
  }

  export type CompetitionFormFieldUpdateWithoutRegistrationAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutCompetitionFormFieldNestedInput
  }

  export type CompetitionFormFieldUncheckedUpdateWithoutRegistrationAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateWithoutSubmissionsInput = {
    id?: string
    nisn: string
    password: string
    name: string
    kelas: string
    angkatan: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationCreateNestedManyWithoutStudentInput
    achievements?: AchievementCreateNestedManyWithoutStudentInput
    academicScores?: AcademicScoreCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    nisn: string
    password: string
    name: string
    kelas: string
    angkatan: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationUncheckedCreateNestedManyWithoutStudentInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutStudentInput
    academicScores?: AcademicScoreUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSubmissionsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSubmissionsInput, StudentUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutReviewedSubmissionsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAdminInput
    competitions?: CompetitionCreateNestedManyWithoutGuruInput
    announcements?: AnnouncementCreateNestedManyWithoutGuruInput
    verifiedAchievements?: AchievementCreateNestedManyWithoutGuruInput
  }

  export type UserUncheckedCreateWithoutReviewedSubmissionsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAdminInput
    competitions?: CompetitionUncheckedCreateNestedManyWithoutGuruInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutGuruInput
    verifiedAchievements?: AchievementUncheckedCreateNestedManyWithoutGuruInput
  }

  export type UserCreateOrConnectWithoutReviewedSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewedSubmissionsInput, UserUncheckedCreateWithoutReviewedSubmissionsInput>
  }

  export type StudentUpsertWithoutSubmissionsInput = {
    update: XOR<StudentUpdateWithoutSubmissionsInput, StudentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<StudentCreateWithoutSubmissionsInput, StudentUncheckedCreateWithoutSubmissionsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSubmissionsInput, StudentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type StudentUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUpdateManyWithoutStudentNestedInput
    achievements?: AchievementUpdateManyWithoutStudentNestedInput
    academicScores?: AcademicScoreUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutStudentNestedInput
    academicScores?: AcademicScoreUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUpsertWithoutReviewedSubmissionsInput = {
    update: XOR<UserUpdateWithoutReviewedSubmissionsInput, UserUncheckedUpdateWithoutReviewedSubmissionsInput>
    create: XOR<UserCreateWithoutReviewedSubmissionsInput, UserUncheckedCreateWithoutReviewedSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewedSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewedSubmissionsInput, UserUncheckedUpdateWithoutReviewedSubmissionsInput>
  }

  export type UserUpdateWithoutReviewedSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAdminNestedInput
    competitions?: CompetitionUpdateManyWithoutGuruNestedInput
    announcements?: AnnouncementUpdateManyWithoutGuruNestedInput
    verifiedAchievements?: AchievementUpdateManyWithoutGuruNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewedSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAdminNestedInput
    competitions?: CompetitionUncheckedUpdateManyWithoutGuruNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutGuruNestedInput
    verifiedAchievements?: AchievementUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type UserCreateWithoutAnnouncementsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAdminInput
    competitions?: CompetitionCreateNestedManyWithoutGuruInput
    reviewedSubmissions?: IndependentCompetitionSubmissionCreateNestedManyWithoutGuruInput
    verifiedAchievements?: AchievementCreateNestedManyWithoutGuruInput
  }

  export type UserUncheckedCreateWithoutAnnouncementsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAdminInput
    competitions?: CompetitionUncheckedCreateNestedManyWithoutGuruInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUncheckedCreateNestedManyWithoutGuruInput
    verifiedAchievements?: AchievementUncheckedCreateNestedManyWithoutGuruInput
  }

  export type UserCreateOrConnectWithoutAnnouncementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
  }

  export type UserUpsertWithoutAnnouncementsInput = {
    update: XOR<UserUpdateWithoutAnnouncementsInput, UserUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnouncementsInput, UserUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type UserUpdateWithoutAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAdminNestedInput
    competitions?: CompetitionUpdateManyWithoutGuruNestedInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUpdateManyWithoutGuruNestedInput
    verifiedAchievements?: AchievementUpdateManyWithoutGuruNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAdminNestedInput
    competitions?: CompetitionUncheckedUpdateManyWithoutGuruNestedInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUncheckedUpdateManyWithoutGuruNestedInput
    verifiedAchievements?: AchievementUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type StudentCreateWithoutAchievementsInput = {
    id?: string
    nisn: string
    password: string
    name: string
    kelas: string
    angkatan: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationCreateNestedManyWithoutStudentInput
    submissions?: IndependentCompetitionSubmissionCreateNestedManyWithoutStudentInput
    academicScores?: AcademicScoreCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAchievementsInput = {
    id?: string
    nisn: string
    password: string
    name: string
    kelas: string
    angkatan: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationUncheckedCreateNestedManyWithoutStudentInput
    submissions?: IndependentCompetitionSubmissionUncheckedCreateNestedManyWithoutStudentInput
    academicScores?: AcademicScoreUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAchievementsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAchievementsInput, StudentUncheckedCreateWithoutAchievementsInput>
  }

  export type UserCreateWithoutVerifiedAchievementsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAdminInput
    competitions?: CompetitionCreateNestedManyWithoutGuruInput
    reviewedSubmissions?: IndependentCompetitionSubmissionCreateNestedManyWithoutGuruInput
    announcements?: AnnouncementCreateNestedManyWithoutGuruInput
  }

  export type UserUncheckedCreateWithoutVerifiedAchievementsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAdminInput
    competitions?: CompetitionUncheckedCreateNestedManyWithoutGuruInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUncheckedCreateNestedManyWithoutGuruInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutGuruInput
  }

  export type UserCreateOrConnectWithoutVerifiedAchievementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerifiedAchievementsInput, UserUncheckedCreateWithoutVerifiedAchievementsInput>
  }

  export type StudentUpsertWithoutAchievementsInput = {
    update: XOR<StudentUpdateWithoutAchievementsInput, StudentUncheckedUpdateWithoutAchievementsInput>
    create: XOR<StudentCreateWithoutAchievementsInput, StudentUncheckedCreateWithoutAchievementsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAchievementsInput, StudentUncheckedUpdateWithoutAchievementsInput>
  }

  export type StudentUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUpdateManyWithoutStudentNestedInput
    submissions?: IndependentCompetitionSubmissionUpdateManyWithoutStudentNestedInput
    academicScores?: AcademicScoreUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: IndependentCompetitionSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    academicScores?: AcademicScoreUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUpsertWithoutVerifiedAchievementsInput = {
    update: XOR<UserUpdateWithoutVerifiedAchievementsInput, UserUncheckedUpdateWithoutVerifiedAchievementsInput>
    create: XOR<UserCreateWithoutVerifiedAchievementsInput, UserUncheckedCreateWithoutVerifiedAchievementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerifiedAchievementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerifiedAchievementsInput, UserUncheckedUpdateWithoutVerifiedAchievementsInput>
  }

  export type UserUpdateWithoutVerifiedAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAdminNestedInput
    competitions?: CompetitionUpdateManyWithoutGuruNestedInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUpdateManyWithoutGuruNestedInput
    announcements?: AnnouncementUpdateManyWithoutGuruNestedInput
  }

  export type UserUncheckedUpdateWithoutVerifiedAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAdminNestedInput
    competitions?: CompetitionUncheckedUpdateManyWithoutGuruNestedInput
    reviewedSubmissions?: IndependentCompetitionSubmissionUncheckedUpdateManyWithoutGuruNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type StudentCreateWithoutAcademicScoresInput = {
    id?: string
    nisn: string
    password: string
    name: string
    kelas: string
    angkatan: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationCreateNestedManyWithoutStudentInput
    submissions?: IndependentCompetitionSubmissionCreateNestedManyWithoutStudentInput
    achievements?: AchievementCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAcademicScoresInput = {
    id?: string
    nisn: string
    password: string
    name: string
    kelas: string
    angkatan: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: CompetitionRegistrationUncheckedCreateNestedManyWithoutStudentInput
    submissions?: IndependentCompetitionSubmissionUncheckedCreateNestedManyWithoutStudentInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAcademicScoresInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAcademicScoresInput, StudentUncheckedCreateWithoutAcademicScoresInput>
  }

  export type StudentUpsertWithoutAcademicScoresInput = {
    update: XOR<StudentUpdateWithoutAcademicScoresInput, StudentUncheckedUpdateWithoutAcademicScoresInput>
    create: XOR<StudentCreateWithoutAcademicScoresInput, StudentUncheckedCreateWithoutAcademicScoresInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAcademicScoresInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAcademicScoresInput, StudentUncheckedUpdateWithoutAcademicScoresInput>
  }

  export type StudentUpdateWithoutAcademicScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUpdateManyWithoutStudentNestedInput
    submissions?: IndependentCompetitionSubmissionUpdateManyWithoutStudentNestedInput
    achievements?: AchievementUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAcademicScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: IndependentCompetitionSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type NewsCreateManyAdminInput = {
    id?: string
    title: string
    content: string
    thumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionCreateManyGuruInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    categoryId: string
    levelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndependentCompetitionSubmissionCreateManyGuruInput = {
    id?: string
    studentId: string
    title: string
    description?: string | null
    documentUrl: string
    status?: $Enums.SubmissionStatus
    rejectionNote?: string | null
    recommendationLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementCreateManyGuruInput = {
    id?: string
    title: string
    content: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementCreateManyGuruInput = {
    id?: string
    studentId: string
    competitionName: string
    result: string
    certificate?: string | null
    status?: $Enums.AchievementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionUpdateWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CompetitionCategoryUpdateOneRequiredWithoutCompetitionsNestedInput
    level?: CompetitionLevelUpdateOneRequiredWithoutCompetitionsNestedInput
    registrations?: CompetitionRegistrationUpdateManyWithoutCompetitionNestedInput
    CompetitionFormField?: CompetitionFormFieldUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUncheckedUpdateManyWithoutCompetitionNestedInput
    CompetitionFormField?: CompetitionFormFieldUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateManyWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndependentCompetitionSubmissionUpdateWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null
    recommendationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type IndependentCompetitionSubmissionUncheckedUpdateWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null
    recommendationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndependentCompetitionSubmissionUncheckedUpdateManyWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null
    recommendationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUpdateWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUpdateWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type AchievementUncheckedUpdateWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    competitionName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    competitionName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionRegistrationCreateManyStudentInput = {
    id?: string
    competitionId: string
    status?: $Enums.RegistrationStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndependentCompetitionSubmissionCreateManyStudentInput = {
    id?: string
    title: string
    description?: string | null
    documentUrl: string
    status?: $Enums.SubmissionStatus
    rejectionNote?: string | null
    recommendationLetter?: string | null
    reviewedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementCreateManyStudentInput = {
    id?: string
    competitionName: string
    result: string
    certificate?: string | null
    status?: $Enums.AchievementStatus
    verifiedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicScoreCreateManyStudentInput = {
    id?: string
    subject: string
    score: number
    semester: string
    year: number
    createdAt?: Date | string
  }

  export type CompetitionRegistrationUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutRegistrationsNestedInput
    answers?: RegistrationAnswerUpdateManyWithoutRegistrationNestedInput
  }

  export type CompetitionRegistrationUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: RegistrationAnswerUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type CompetitionRegistrationUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndependentCompetitionSubmissionUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null
    recommendationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guru?: UserUpdateOneWithoutReviewedSubmissionsNestedInput
  }

  export type IndependentCompetitionSubmissionUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null
    recommendationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndependentCompetitionSubmissionUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null
    recommendationLetter?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guru?: UserUpdateOneWithoutVerifiedAchievementsNestedInput
  }

  export type AchievementUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicScoreUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicScoreUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicScoreUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionCreateManyCategoryInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    levelId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: CompetitionLevelUpdateOneRequiredWithoutCompetitionsNestedInput
    guru?: UserUpdateOneRequiredWithoutCompetitionsNestedInput
    registrations?: CompetitionRegistrationUpdateManyWithoutCompetitionNestedInput
    CompetitionFormField?: CompetitionFormFieldUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    levelId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUncheckedUpdateManyWithoutCompetitionNestedInput
    CompetitionFormField?: CompetitionFormFieldUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    levelId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionCreateManyLevelInput = {
    id?: string
    title: string
    description?: string | null
    thumbnail?: string | null
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    categoryId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CompetitionCategoryUpdateOneRequiredWithoutCompetitionsNestedInput
    guru?: UserUpdateOneRequiredWithoutCompetitionsNestedInput
    registrations?: CompetitionRegistrationUpdateManyWithoutCompetitionNestedInput
    CompetitionFormField?: CompetitionFormFieldUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: CompetitionRegistrationUncheckedUpdateManyWithoutCompetitionNestedInput
    CompetitionFormField?: CompetitionFormFieldUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionRegistrationCreateManyCompetitionInput = {
    id?: string
    studentId: string
    status?: $Enums.RegistrationStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitionFormFieldCreateManyCompetitionInput = {
    id?: string
    label: string
    fieldType: $Enums.FieldType
    isRequired?: boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
  }

  export type CompetitionRegistrationUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutRegistrationsNestedInput
    answers?: RegistrationAnswerUpdateManyWithoutRegistrationNestedInput
  }

  export type CompetitionRegistrationUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: RegistrationAnswerUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type CompetitionRegistrationUncheckedUpdateManyWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionFormFieldUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationAnswer?: RegistrationAnswerUpdateManyWithoutFieldNestedInput
  }

  export type CompetitionFormFieldUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationAnswer?: RegistrationAnswerUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type CompetitionFormFieldUncheckedUpdateManyWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationAnswerCreateManyRegistrationInput = {
    id?: string
    fieldId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RegistrationAnswerUpdateWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: CompetitionFormFieldUpdateOneRequiredWithoutRegistrationAnswerNestedInput
  }

  export type RegistrationAnswerUncheckedUpdateWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationAnswerUncheckedUpdateManyWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationAnswerCreateManyFieldInput = {
    id?: string
    registrationId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RegistrationAnswerUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registration?: CompetitionRegistrationUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type RegistrationAnswerUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationAnswerUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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