React Native Animation Systems
Overview
React Native provides two primary animation systems, each with different strengths and use cases:

LayoutAnimation - Simple, automatic animations
Animated API - Complex, controlled animations


1. LayoutAnimation
   * What is LayoutAnimation?
   * LayoutAnimation automatically animates layout changes when component state updates. It's a simple way to add smooth transitions without manual animation setup.
   * Characteristics
   
Pros:

✅ Easy to setup - Just one line of code
✅ Automatic - Animates layout changes automatically
✅ Good for simple transitions - List items, view changes
✅ Performant - Runs on native thread

Cons:

❌ Limited control - Can't customize timing, easing, or specific properties
❌ Unwanted animations - Some elements may animate when you don't want them to
❌ Platform differences - Requires manual enabling on Android
❌ No gesture integration - Can't tie to user interactions


# React Native Animation: Native Driver Usage Guide

## Overview

The native driver (`useNativeDriver: true`) moves animations from the JavaScript thread to the UI thread, providing significant performance benefits for supported properties.

## ✅ When to Use Native Driver

### Supported Properties
- **Transform properties**: `translateX`, `translateY`, `translateZ`, `scale`, `scaleX`, `scaleY`, `rotate`, `rotateX`, `rotateY`, `rotateZ`, `skewX`, `skewY`
- **Opacity**: `opacity`

### Performance Benefits
- **60 FPS animations** - runs on UI thread
- **Smooth during heavy JS work** - animations continue even if JS thread is busy
- **Better battery life** - more efficient execution
- **No bridge communication** during animation

### Code Examples

```javascript
// ✅ Fade animation
const fadeAnim = useRef(new Animated.Value(0)).current;
Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 500,
  useNativeDriver: true, // ✅ Works with opacity
}).start();

// Usage
<Animated.View style={{ opacity: fadeAnim }}>
  <Text>Fading content</Text>
</Animated.View>
```

```javascript
// ✅ Slide animation
const slideAnim = useRef(new Animated.Value(-100)).current;
Animated.timing(slideAnim, {
  toValue: 0,
  duration: 300,
  useNativeDriver: true, // ✅ Works with translateX
}).start();

// Usage
<Animated.View style={{
  transform: [{ translateX: slideAnim }]
}}>
  <Text>Sliding content</Text>
</Animated.View>
```

```javascript
// ✅ Scale animation
const scaleAnim = useRef(new Animated.Value(0)).current;
Animated.spring(scaleAnim, {
  toValue: 1,
  useNativeDriver: true, // ✅ Works with scale
}).start();

// Usage
<Animated.View style={{
  transform: [{ scale: scaleAnim }]
}}>
  <Text>Scaling content</Text>
</Animated.View>
```

```javascript
// ✅ Using Animated.ValueXY with native driver
const animatedVal = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
Animated.spring(animatedVal, {
  toValue: {x: 100, y: 100},
  useNativeDriver: true,
}).start();

// Usage - use getTranslateTransform(), NOT getLayout()
<Animated.View style={{
  transform: animatedVal.getTranslateTransform()
}}>
  <Text>Moving content</Text>
</Animated.View>
```

## ❌ When NOT to Use Native Driver

### Unsupported Properties (Require `useNativeDriver: false`)
- **Layout properties**: `left`, `top`, `right`, `bottom`, `width`, `height`
- **Spacing**: `margin`, `marginTop`, `marginLeft`, etc., `padding`, `paddingTop`, etc.
- **Border**: `borderRadius`, `borderWidth`, `borderTopWidth`, etc.
- **Colors**: `backgroundColor`, `color`, `borderColor`, etc.
- **Text**: `fontSize`, `lineHeight`, etc.

### Code Examples

```javascript
// ❌ Width animation (requires JS driver)
const widthAnim = useRef(new Animated.Value(50)).current;
Animated.timing(widthAnim, {
  toValue: 200,
  duration: 500,
  useNativeDriver: false, // ❌ Required for width
}).start();

// Usage
<Animated.View style={{ width: widthAnim }}>
  <Text>Expanding content</Text>
</Animated.View>
```

```javascript
// ❌ Color animation (requires JS driver)
const colorAnim = useRef(new Animated.Value(0)).current;
const backgroundColor = colorAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)']
});

Animated.timing(colorAnim, {
  toValue: 1,
  duration: 1000,
  useNativeDriver: false, // ❌ Required for colors
}).start();

// Usage
<Animated.View style={{ backgroundColor }}>
  <Text>Color changing content</Text>
</Animated.View>
```

```javascript
// ❌ Position animation using left/top (requires JS driver)
const positionAnim = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
Animated.spring(positionAnim, {
  toValue: {x: 100, y: 100},
  useNativeDriver: false, // ❌ Required for getLayout()
}).start();

// Usage
<Animated.View style={positionAnim.getLayout()}>
  <Text>Moving content</Text>
</Animated.View>
```

## 🔄 Converting from Layout to Transform

### Before (JS Driver Required)
```javascript
// ❌ Uses layout properties
const moveAnim = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
Animated.timing(moveAnim, {
  toValue: {x: 100, y: 100},
  useNativeDriver: false, // Required for getLayout()
}).start();

<Animated.View style={moveAnim.getLayout()}>
  <Text>Content</Text>
</Animated.View>
```

### After (Native Driver Compatible)
```javascript
// ✅ Uses transform properties
const moveAnim = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
Animated.timing(moveAnim, {
  toValue: {x: 100, y: 100},
  useNativeDriver: true, // ✅ Works with transforms
}).start();

<Animated.View style={{
  transform: moveAnim.getTranslateTransform()
}}>
  <Text>Content</Text>
</Animated.View>
```

## 🏆 Best Practices

### 1. Prefer Transform Over Layout
```javascript
// ✅ Good - use translateX/Y
transform: [{ translateX: animatedValue }]

// ❌ Avoid - use left/top only when necessary
left: animatedValue
```

### 2. Combine Native and JS Drivers When Needed
```javascript
const fadeAnim = useRef(new Animated.Value(0)).current;
const widthAnim = useRef(new Animated.Value(50)).current;

// Different animations, different drivers
Animated.parallel([
  Animated.timing(fadeAnim, {
    toValue: 1,
    useNativeDriver: true, // ✅ opacity
  }),
  Animated.timing(widthAnim, {
    toValue: 200,
    useNativeDriver: false, // ❌ width
  }),
]).start();
```

### 3. Use Interpolation with Native Driver
```javascript
const rotateAnim = useRef(new Animated.Value(0)).current;
const rotate = rotateAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
});

Animated.timing(rotateAnim, {
  toValue: 1,
  useNativeDriver: true, // ✅ Works with interpolated transforms
}).start();

<Animated.View style={{
  transform: [{ rotate }]
}}>
  <Text>Rotating content</Text>
</Animated.View>
```

## 📋 Quick Reference

| Property Type | Native Driver | Example |
|---------------|---------------|---------|
| ✅ `opacity` | `true` | `opacity: animatedValue` |
| ✅ `translateX/Y/Z` | `true` | `transform: [{translateX: animatedValue}]` |
| ✅ `scale/scaleX/Y` | `true` | `transform: [{scale: animatedValue}]` |
| ✅ `rotate/rotateX/Y/Z` | `true` | `transform: [{rotate: animatedValue}]` |
| ✅ `skewX/Y` | `true` | `transform: [{skewX: animatedValue}]` |
| ❌ `width/height` | `false` | `width: animatedValue` |
| ❌ `left/top/right/bottom` | `false` | `left: animatedValue` |
| ❌ `backgroundColor` | `false` | `backgroundColor: animatedValue` |
| ❌ `borderRadius` | `false` | `borderRadius: animatedValue` |
| ❌ `margin/padding` | `false` | `marginTop: animatedValue` |

## 🎯 Decision Tree

```
Need to animate a property?
├── Is it opacity or transform? 
│   ├── Yes → useNativeDriver: true ✅
│   └── No → Continue below
├── Is it layout (width, height, position)?
│   ├── Yes → useNativeDriver: false ❌
│   └── No → Continue below  
├── Is it color or border?
│   ├── Yes → useNativeDriver: false ❌
│   └── No → Check React Native docs
```

## 🚀 Performance Tips

1. **Always prefer native driver when possible** - 60fps vs potentially choppy animations
2. **Test on real devices** - especially lower-end Android devices
3. **Avoid animating layout during gestures** - use transforms instead
4. **Use `Animated.parallel()` for multiple native driver animations** - they run simultaneously on UI thread
5. **Profile your animations** - use React Native's performance tools

## Common Errors and Solutions

### Error: "Style property 'left' is not supported by native animated module"
**Solution:** Use `transform: [{translateX}]` instead of `left`, or set `useNativeDriver: false`

### Error: "Style property 'width' is not supported by native animated module"
**Solution:** Set `useNativeDriver: false` for width/height animations

### Poor performance with multiple animations
**Solution:** Use `Animated.parallel()` and ensure all use the same driver type when possible
