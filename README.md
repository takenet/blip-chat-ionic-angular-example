# Blip Chat Ionic App example (Angular)
> An example app built with Ionic and Angular using the BLiP Chat Widget

Meet [BLiP](http://blip.ai)!

## How to run

#### Install all the dependencies:

```sh
yarn
```

or

```sh
npm install
```

#### Execute the project:

```sh
ionic serve
```

**Note: Remember to install the Ionic CLI (`npm install -g @ionic/cli`)** 

## Built With
This project was bootstrapped with [Ionic](https://ionicframework.com/).

* Ionic - An open source mobile UI toolkit for building high quality, cross-platform native and web app experiences
* Angular - An application design framework and development platform for creating efficient and sophisticated single-page apps
* [BLiP Chat Widget](https://www.npmjs.com/package/blip-chat-widget) - Widget to enable add the BLiP Chat in your web app or site

## Using BLiP Chat with React and Typescript

To launch the widget, you have to add the script in the mount/init function in your component.
Example:

```typescript
import { BlipChat } from "blip-chat-widget";

export class FooBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    new BlipChat()
      .withAppKey(
        'YOUR-APP-KEY'
      )
      .withButton({ color: '#7895fd' })
      .build();
  }
}
```

## Contributing

1. Fork it (<https://github.com/takenet/blip-chat-ionic-angular-example>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request