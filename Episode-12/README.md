# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR= Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification of file
- Bundling of files
- Compression of files
- Consistent Hashing
- Code Splitting
- Differential Building - support older browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

/\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestauarntCard
-      - Img
-      - Name of res, Star Rating, cuisine, ETA(delivery time)
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

// Never keep any hardcoded code in any component - kEEP IT IN 'utils' file

Two Types of import and export

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import (exporting multiple things from the file)
  export const Component;
  import {Component} from "path;

# React Hooks
(Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()

 # Conditional rendering
  if(listOfRestaurants.length === 0){
    return <Shimmer />
  }

# Ep 12

# Redux Toolkit

- Install @reduxjs/toolkit and reat-redux
- Build our store
-Connect our store to our app
- Slice(cartSlice)
- dispatch (action)
- Selector 