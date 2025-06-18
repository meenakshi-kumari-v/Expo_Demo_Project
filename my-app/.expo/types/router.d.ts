/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/viewDetails`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tab)'}/bookings` | `/bookings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tab)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tab)'}/profile` | `/profile`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/viewDetails`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tab)'}/bookings` | `/bookings`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tab)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tab)'}/profile` | `/profile`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/viewDetails${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tab)'}/bookings${`?${string}` | `#${string}` | ''}` | `/bookings${`?${string}` | `#${string}` | ''}` | `${'/(tab)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tab)'}/profile${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/viewDetails`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tab)'}/bookings` | `/bookings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tab)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tab)'}/profile` | `/profile`; params?: Router.UnknownInputParams; };
    }
  }
}
