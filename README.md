
# Movie Discovery App 🎬

A mobile application developed in React Native that allows you to explore and discover movies using The Movie Database (TMDb) API. The application features a modern interface, dark/light mode support, and tab navigation.

Project for the mobile module of Digital Academy, AssureSoft.

![Logo AssureSoft Digital Academy](da.png)

The design of the UI was inspired by 🔗 [this Figma design.](https://www.figma.com/community/file/1126286295256197533)


## Technologies used 🛠️

- **React Native 0.79.3**
- **TypeScript**
- **React Navigation v7** (Bottom Tabs)
- **TMDb API** for movie data
- **React Native Reanimated** for animations
- **React Native SVG** for vector icons
- **React Native Linear Gradient** for gradients
- **Theme management with Context API**

## Prerequisites 📋

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

- Node.js >= 18
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- API Key from [The Movie Database (TMDb)](https://www.themoviedb.org/settings/api)

## Installation and setup 🚀

### 1. Clone the repository

```bash
git clone https://github.com/danielcueto/react-native-course
cd react-native-course
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root with the following variables:

```env
ACCESS_TOKEN=your_tmdb_access_token
TMBD_BASE_URL=https://api.themoviedb.org/3/
IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500
```

To get your ACCESS_TOKEN:
1. Visit [TMDb API](https://www.themoviedb.org/settings/api)
2. Create an account and request an API key
3. Use the "Read Access Token" instead of the API key

### 4. iOS configuration

If you're going to run on iOS, install CocoaPods dependencies:

```bash
# Install Ruby bundler (first time only)
bundle install

# Install iOS pods
cd ios && bundle exec pod install && cd ..
```

### 5. Run the application

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

#### Start Metro (in separate terminal)
```bash
npm start
```

## Available commands 📋

- `npm start` - Starts the Metro server
- `npm run android` - Runs the app on Android
- `npm run ios` - Runs the app on iOS
- `npm run clean` - Clears Metro cache
- `npm test` - Runs tests
- `npm run lint` - Runs ESLint linter

## Project structure 📁

```
reactnative/
├── src/                          # Main source code
│   ├── @types/                   # TypeScript type definitions
│   │   ├── env.d.ts             # Types for environment variables
│   │   └── svg.d.ts             # Types for SVG files
│   ├── components/               # Reusable components
│   │   ├── carousels/           # Carousel components
│   │   │   ├── HeaderCarousel.tsx
│   │   │   ├── MainCarousel.tsx
│   │   │   └── MoviesCarousel.tsx
│   │   ├── common/              # Common components
│   │   │   ├── Button.tsx
│   │   │   └── Label.tsx
│   │   ├── modals/              # Modal components
│   │   │   ├── MovieDetailModal.tsx
│   │   │   └── MyModal.tsx
│   │   └── navigation/          # Navigation
│   │       └── TabNavigation.tsx
│   ├── context/                 # React contexts
│   │   └── ThemeContext.tsx     # Theme management
│   ├── hooks/                   # Custom hooks
│   │   └── useTMDB.tsx         # Hook for TMDb API
│   ├── screens/                 # Main screens
│   │   ├── Home.tsx            # Home screen
│   │   ├── Profile.tsx         # Profile screen
│   │   ├── Search.tsx          # Search screen
│   │   └── Whishlist.tsx       # Wishlist
│   ├── theme/                   # Theme configuration
│   │   ├── colors.ts           # Color palette
│   │   └── fonts.ts            # Font configuration
│   └── utils/                   # Utilities
│       └── service/
│           └── TMBDService.ts   # API services
├── assets/                      # Static resources
│   ├── fonts/                  # Custom fonts (Gilroy)
│   └── icons/                  # SVG icons
├── android/                     # Android configuration
├── ios/                        # iOS configuration
├── __tests__/                  # Unit tests
├── App.tsx                     # Root component
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## Architecture and patterns 🏗️

### State management
- **Context API**: For theme management (dark/light mode)
- **Custom Hooks**: For reusable logic (useTMDB)
- **Local state**: With useState for component-specific states

### Navigation
- **React Navigation v7**: Bottom tab navigation
- **Main screens**: Home, Search, Wishlist, Profile

### Data handling
- **TMDb API**: Integration with The Movie Database
- **Fetch API**: For HTTP requests
- **TypeScript interfaces**: For strict data typing

### Themes
- **Adaptive theme**: Automatically detects system mode
- **Custom colors**: Defined palettes for light and dark modes
- **Custom fonts**: Gilroy typography family

## Contributing 🤝

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## Common issues and solutions 🔧

### Metro error
```bash
# Clear Metro cache
npm run clean

# Or manually
npx react-native start --reset-cache
```

### Native dependencies error
```bash
# Android - Clean and rebuild
cd android && ./gradlew clean && cd ..
npm run android

# iOS - Reinstall pods
cd ios && bundle exec pod install && cd ..
npm run ios
```

### Environment variables not working
- Make sure the `.env` file is in the project root
- Restart Metro after creating/modifying the `.env`
- Verify that variables are declared in `env.d.ts`
