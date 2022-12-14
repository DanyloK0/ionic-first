// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey:'3bbbac522bdaab1a2441a30693ef8fa7',
  // baseUrl:'mapbox://styles/danylok/clbmhb2fo000816qtvn3m9vdl',
  images: 'http://image.tmdb.org/t/p',
  mapbox: {
		accessToken: 'pk.eyJ1IjoiZGFueWxvayIsImEiOiJjbGJtOXoxZmEwMnMzM29tcXUyODlpZG1mIn0.n8jUsPsLlxpWM0WWOOn-8Q'
	},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
