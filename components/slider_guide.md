# Slider Guide

This file explains how `slider.html` works.

File being explained: `components/slider.html`

## Purpose of this file

This page teaches different kinds of sliders made with HTML and CSS only.

It includes:

- a basic range slider
- an image slideshow using radio buttons
- a testimonial/content slider
- a vertical range slider

No JavaScript is used in this file.

## Full page structure

## `<!doctype html>`

This tells the browser to use HTML5.

## `<html lang="en">`

This is the root of the document.

- `lang="en"` helps accessibility tools and browsers know the page language.

## `<head>`

The `<head>` contains page information and CSS.

Important tags inside it:

- `<meta charset="utf-8" />`
  Sets text encoding
- `<meta name="viewport" content="width=device-width, initial-scale=1" />`
  Makes the page responsive
- `<title>CSS-only Sliders</title>`
  Sets the browser tab title
- `<style>`
  Contains all CSS code

## `<body>`

The `<body>` contains the visible page content.

## CSS basics used in this file

### `:root`

```css
:root {
  --accent: #4f46e5;
  --bg: #f8fafc;
  --card: #fff;
}
```

This stores reusable color variables.

Why use this?

- easier color management
- cleaner code
- faster editing later

### `body`

```css
body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial;
  line-height: 1.4;
  color: #0f172a;
  background: var(--bg);
  padding: 32px;
}
```

This styles the whole page.

Why these rules matter:

- `font-family` sets readable text
- `line-height` improves reading
- `background` gives page color
- `padding` creates space around content

### `.card`

Every slider example is wrapped inside:

```html
<section class="card">
```

And styled with:

```css
.card {
  background: var(--card);
  border-radius: 8px;
  padding: 18px;
  box-shadow: 0 1px 4px rgba(2, 6, 23, .06);
}
```

This creates a card-like layout.

## 1. Basic Range Slider

HTML:

```html
<input type="range" min="0" max="100" value="50" />
```

This creates a slider control.

Explanation of attributes:

- `type="range"`
  Makes the input a slider
- `min="0"`
  Minimum value
- `max="100"`
  Maximum value
- `value="50"`
  Starting value

### Why use `<input>` here?

Because a slider is a form input element.

### CSS for the range input

```css
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent) 50%, #e6eefb 50%);
  outline: none;
}
```

Important parts:

- `-webkit-appearance: none`
  Removes default browser styling so custom styling can be applied
- `width: 100%`
  Makes the slider stretch full width
- `border-radius: 999px`
  Makes the track rounded
- `background: linear-gradient(...)`
  Creates a colored track design

### Thumb styling

```css
input[type="range"]::-webkit-slider-thumb
input[type="range"]::-moz-range-thumb
```

These selectors style the moving circle part of the slider.

Why two versions?

- `::-webkit-slider-thumb` is mainly for Chrome, Edge, Safari
- `::-moz-range-thumb` is for Firefox

This teaches students that some form control styling needs browser-specific selectors.

## 2. Image Slideshow using Radio Buttons

This is the most important teaching part of the file.

It shows how a slider can be built without JavaScript.

## Main HTML structure

```html
<div class="carousel-adv">
  <input id="s1" type="radio" name="slideshow" checked />
  <input id="s2" type="radio" name="slideshow" />
  <input id="s3" type="radio" name="slideshow" />

  <div class="frame">
    <div class="slides">
      <div class="slide">...</div>
      <div class="slide">...</div>
      <div class="slide">...</div>
    </div>
  </div>

  <div class="dots">
    <label for="s1"></label>
    <label for="s2"></label>
    <label for="s3"></label>
  </div>
</div>
```

## Why use radio buttons?

Radio buttons allow only one option to be selected at one time.

That is exactly what a slider needs:

- slide 1 selected
- or slide 2 selected
- or slide 3 selected

## Why all radios use the same `name`?

```html
name="slideshow"
```

All radios must share the same name so only one can stay checked at a time.

## Why use `id` on each radio?

```html
id="s1"
id="s2"
id="s3"
```

Each `id` gives a unique name to a radio button so labels can target it.

## Why use `checked` on the first radio?

```html
<input id="s1" type="radio" name="slideshow" checked />
```

This makes the first slide active by default when the page loads.

## Why use `<label>` in the slider?

This is a very important teaching point.

Example:

```html
<label for="s2"></label>
```

Why use `label` here?

- a label can activate an input
- `for="s2"` means clicking the label checks the radio with id `s2`
- this allows dots and arrows to work without JavaScript

So in this file, labels are used like buttons.

## Why use `<img>` inside each slide?

```html
<img src="../images/slide1.jpg" alt="Slide 1" />
```

Explanation:

- `src`
  tells where the image file is
- `alt`
  gives alternate text for accessibility and if image fails to load

## CSS that moves the slides

```css
.carousel-adv .slides {
  display: flex;
  transition: margin-left .45s ease;
  width: 300%;
}
```

How this works:

- `display: flex` places slides side by side
- `width: 300%` makes space for 3 slides
- `transition` makes slide movement smooth

Each slide:

```css
.carousel-adv .slide {
  width: 100%;
  flex-shrink: 0;
}
```

Why `flex-shrink: 0`?

- it prevents slides from shrinking
- each slide keeps full width

## The key CSS trick: `:checked`

```css
#s1:checked ~ .frame .slides { margin-left: 0; }
#s2:checked ~ .frame .slides { margin-left: -100%; }
#s3:checked ~ .frame .slides { margin-left: -200%; }
```

This is the main idea of the slider.

How it works:

- if `s1` is checked, show first slide
- if `s2` is checked, move slides left by `100%`
- if `s3` is checked, move slides left by `200%`

### Why use `~` here?

`~` is the general sibling selector.

It means:

apply the style to a later sibling element when the radio input is checked.

This is one of the most valuable CSS-only slider concepts to teach.

## Prev and Next arrow controls

Inside each slide there are labels like:

```html
<label class="nav prev" for="s3">...</label>
<label class="nav next" for="s2">...</label>
```

Why this works:

- clicking the label checks another radio
- checking another radio changes `margin-left`
- that makes the slider move

So these arrows are not JavaScript buttons.
They are labels connected to radio inputs.

## 3. Testimonial / Content Slider

This part uses the same radio-button idea, but instead of images it slides text content.

HTML:

```html
<div class="testimonials">
  <input id="t1" type="radio" name="t" checked />
  <input id="t2" type="radio" name="t" />
  <input id="t3" type="radio" name="t" />
```

Again:

- same `name` means one active item only
- different `id` values make label targeting possible
- `checked` sets the default item

### Why use `<blockquote>`?

```html
<blockquote>
  <p>"Great product. Works well and simple to use."</p>
  <footer class="muted">Alex</footer>
</blockquote>
```

`<blockquote>` is used for quoted text or testimonial content.

Why it is a good tag here:

- testimonials are like quotations from users
- the tag has semantic meaning

### Why use `<footer>` inside `blockquote`?

`<footer>` tells who said the quote or gives quote-related information.

That makes the HTML more meaningful.

## CSS for testimonial slider

```css
.testimonials .t-list {
  display: flex;
  transition: margin-left .45s ease;
  width: 300%;
}
```

This is the same concept as the image slider:

- three items
- side by side
- moved with `margin-left`

The checked rules:

```css
#t1:checked ~ .t-wrap .t-list { margin-left: 0; }
#t2:checked ~ .t-wrap .t-list { margin-left: -100%; }
#t3:checked ~ .t-wrap .t-list { margin-left: -200%; }
```

The logic is exactly the same as the image slideshow.

## Why use `<label class="control-btn">1</label>` for controls?

These labels act as buttons for changing the selected testimonial.

They are simple, clean, and work without JavaScript because of the `for` attribute.

## 4. Vertical Range Slider

HTML:

```html
<input type="range" min="0" max="100" value="30" orient="vertical" />
```

This is another range input.

The CSS:

```css
.vertical input[type="range"] {
  transform: rotate(-90deg);
  width: 140px;
}
```

This rotates the horizontal slider to look vertical.

Important teaching point:

This is a visual trick using CSS transform.

## Utility classes

### `.row`

```css
.row { display: flex; gap: 12px; align-items: center; }
```

Used to place items in a row with spacing.

### `.muted`

```css
.muted { color: #475569; font-size: 13px; }
```

Used for helper text.

Why use utility classes?

- reusable small styles
- simpler code
- less repetition

## Tags used in this file and why

### `<section>`

Used to group each slider example.

### `<h1>`

Main page heading.

### `<h2>`

Subheadings for each slider type.

### `<div>`

Generic container for layout and grouping.

### `<input>`

Used for range sliders and radio buttons.

### `<label>`

Very important in this file.

Used to:

- control radio buttons
- create navigation dots
- create next and previous arrows
- create testimonial controls

### `<img>`

Used to show slideshow images.

### `<blockquote>`

Used for testimonials or quoted content.

### `<footer>`

Used to show the name of the quoted person.

### `<ul>` and `<li>`

Used for final notes.

### `<strong>`

Used to highlight important text.

### `<code>`

Used to display code words like `src`, `:checked`, and `margin-left`.

## Why this file is useful for teaching

Students learn:

- how form elements can be styled
- how sliders work without JavaScript
- how radio buttons and labels can create interactivity
- how `:checked` can control layout changes
- how flexbox helps arrange slides in one row
- how `transition` makes movement smooth

## What would usually need JavaScript later

This CSS-only approach is excellent for learning, but more advanced sliders often use JavaScript for:

- autoplay
- touch swipe support
- dynamic slide count
- loop logic
- progress bars
- keyboard controls
- lazy loading

## Final summary

This file is a very good beginner example because it teaches both HTML structure and CSS logic.

The most important lesson in this file is:

Radio inputs + labels + `:checked` + `margin-left` = CSS-only slider behavior.
