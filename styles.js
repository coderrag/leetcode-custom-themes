var _3024_day = `/*

    Name:       3024 day
    Author:     Jan T. Sott (http://github.com/idleberg)

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-3024-day.CodeMirror { background: #f7f7f7; color: #3a3432; }
.cm-s-3024-day div.CodeMirror-selected { background: #d6d5d4; }

.cm-s-3024-day .CodeMirror-line::selection, .cm-s-3024-day .CodeMirror-line > span::selection, .cm-s-3024-day .CodeMirror-line > span > span::selection { background: #d6d5d4; }
.cm-s-3024-day .CodeMirror-line::-moz-selection, .cm-s-3024-day .CodeMirror-line > span::-moz-selection, .cm-s-3024-day .CodeMirror-line > span > span::selection { background: #d9d9d9; }

.cm-s-3024-day .CodeMirror-gutters { background: #f7f7f7; border-right: 0px; }
.cm-s-3024-day .CodeMirror-guttermarker { color: #db2d20; }
.cm-s-3024-day .CodeMirror-guttermarker-subtle { color: #807d7c; }
.cm-s-3024-day .CodeMirror-linenumber { color: #807d7c; }

.cm-s-3024-day .CodeMirror-cursor { border-left: 1px solid #5c5855; }

.cm-s-3024-day span.cm-comment { color: #cdab53; }
.cm-s-3024-day span.cm-atom { color: #a16a94; }
.cm-s-3024-day span.cm-number { color: #a16a94; }

.cm-s-3024-day span.cm-property, .cm-s-3024-day span.cm-attribute { color: #01a252; }
.cm-s-3024-day span.cm-keyword { color: #db2d20; }
.cm-s-3024-day span.cm-string { color: #fded02; }

.cm-s-3024-day span.cm-variable { color: #01a252; }
.cm-s-3024-day span.cm-variable-2 { color: #01a0e4; }
.cm-s-3024-day span.cm-def { color: #e8bbd0; }
.cm-s-3024-day span.cm-bracket { color: #3a3432; }
.cm-s-3024-day span.cm-tag { color: #db2d20; }
.cm-s-3024-day span.cm-link { color: #a16a94; }
.cm-s-3024-day span.cm-error { background: #db2d20; color: #5c5855; }

.cm-s-3024-day .CodeMirror-activeline-background { background: #e8f2ff; }
.cm-s-3024-day .CodeMirror-matchingbracket { text-decoration: underline; color: #a16a94 !important; }
`;
var _3024_night = `/*

    Name:       3024 night
    Author:     Jan T. Sott (http://github.com/idleberg)

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-3024-night.CodeMirror { background: #090300; color: #d6d5d4; }
.cm-s-3024-night div.CodeMirror-selected { background: #3a3432; }
.cm-s-3024-night .CodeMirror-line::selection, .cm-s-3024-night .CodeMirror-line > span::selection, .cm-s-3024-night .CodeMirror-line > span > span::selection { background: rgba(58, 52, 50, .99); }
.cm-s-3024-night .CodeMirror-line::-moz-selection, .cm-s-3024-night .CodeMirror-line > span::-moz-selection, .cm-s-3024-night .CodeMirror-line > span > span::-moz-selection { background: rgba(58, 52, 50, .99); }
.cm-s-3024-night .CodeMirror-gutters { background: #090300; border-right: 0px; }
.cm-s-3024-night .CodeMirror-guttermarker { color: #db2d20; }
.cm-s-3024-night .CodeMirror-guttermarker-subtle { color: #5c5855; }
.cm-s-3024-night .CodeMirror-linenumber { color: #5c5855; }

.cm-s-3024-night .CodeMirror-cursor { border-left: 1px solid #807d7c; }

.cm-s-3024-night span.cm-comment { color: #cdab53; }
.cm-s-3024-night span.cm-atom { color: #a16a94; }
.cm-s-3024-night span.cm-number { color: #a16a94; }

.cm-s-3024-night span.cm-property, .cm-s-3024-night span.cm-attribute { color: #01a252; }
.cm-s-3024-night span.cm-keyword { color: #db2d20; }
.cm-s-3024-night span.cm-string { color: #fded02; }

.cm-s-3024-night span.cm-variable { color: #01a252; }
.cm-s-3024-night span.cm-variable-2 { color: #01a0e4; }
.cm-s-3024-night span.cm-def { color: #e8bbd0; }
.cm-s-3024-night span.cm-bracket { color: #d6d5d4; }
.cm-s-3024-night span.cm-tag { color: #db2d20; }
.cm-s-3024-night span.cm-link { color: #a16a94; }
.cm-s-3024-night span.cm-error { background: #db2d20; color: #807d7c; }

.cm-s-3024-night .CodeMirror-activeline-background { background: #2F2F2F; }
.cm-s-3024-night .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }
`;
var abbott = `/*
 * abbott.css
 * A warm, dark theme for prose and code, with pastels and pretty greens.
 *
 * Ported from abbott.vim (https://github.com/bcat/abbott.vim) version 2.1.
 * Original design and CodeMirror port by Jonathan Rascher.
 *
 * This theme shares the following color palette with the Vim color scheme.
 *
 * Brown shades:
 *   bistre: #231c14
 *   chocolate: #3c3022
 *   cocoa: #745d42
 *   vanilla_cream: #fef3b4
 *
 * Red shades:
 *   crimson: #d80450
 *   cinnabar: #f63f05
 *
 * Green shades:
 *   dark_olive: #273900
 *   forest_green: #24a507
 *   chartreuse: #a0ea00
 *   pastel_chartreuse: #d8ff84
 *
 * Yellow shades:
 *   marigold: #fbb32f
 *   lemon_meringue: #fbec5d
 *
 * Blue shades:
 *   cornflower_blue: #3f91f1
 *   periwinkle_blue: #8ccdf0
 *
 * Magenta shades:
 *   french_pink: #ec6c99
 *   lavender: #e6a2f3
 *
 * Cyan shades:
 *   zomp: #39a78d
 *   seafoam_green: #00ff7f
 */

/* Style the UI: */

/* Equivalent to Vim's Normal group. */
.cm-s-abbott.CodeMirror {
  background: #231c14 /* bistre */;
  color: #d8ff84 /* pastel_chartreuse */;
}

/* Roughly equivalent to Vim's LineNr group. */
.cm-s-abbott .CodeMirror-gutters {
  background: #231c14 /* bistre */;
  border: none;
}
.cm-s-abbott .CodeMirror-linenumber { color: #fbec5d /* lemon_meringue */; }

.cm-s-abbott .CodeMirror-guttermarker { color: #f63f05 /* cinnabar */; }

/* Roughly equivalent to Vim's FoldColumn group. */
.cm-s-abbott .CodeMirror-guttermarker-subtle { color: #fbb32f /* marigold */; }

/*
 * Roughly equivalent to Vim's CursorColumn group. (We use a brighter color
 * since Vim's cursorcolumn option highlights a whole column, whereas
 * CodeMirror's rule just highlights a thin line.)
 */
.cm-s-abbott .CodeMirror-ruler { border-color: #745d42 /* cocoa */; }

/* Equivalent to Vim's Cursor group in insert mode. */
.cm-s-abbott .CodeMirror-cursor { border-color: #a0ea00 /* chartreuse */; }

/* Equivalent to Vim's Cursor group in normal mode. */
.cm-s-abbott.cm-fat-cursor .CodeMirror-cursor,
.cm-s-abbott .cm-animate-fat-cursor {
  /*
   * CodeMirror doesn't allow changing the foreground color of the character
   * under the cursor, so we can't use a reverse video effect for the cursor.
   * Instead, make it semitransparent.
   */
  background: rgba(160, 234, 0, 0.5) /* chartreuse */;
}
.cm-s-abbott.cm-fat-cursor .CodeMirror-cursors {
  /*
   * Boost the z-index so the fat cursor shows up on top of text and
   * matchingbracket/matchingtag highlights.
   */
  z-index: 3;
}

/* Equivalent to Vim's Cursor group in replace mode. */
.cm-s-abbott .CodeMirror-overwrite .CodeMirror-cursor {
  border-bottom: 1px solid #a0ea00 /* chartreuse */;
  border-left: none;
  width: auto;
}

/* Roughly equivalent to Vim's CursorIM group. */
.cm-s-abbott .CodeMirror-secondarycursor {
  border-color: #00ff7f /* seafoam_green */;
}

/* Roughly equivalent to Vim's Visual group. */
.cm-s-abbott .CodeMirror-selected,
.cm-s-abbott.CodeMirror-focused .CodeMirror-selected {
  background: #273900 /* dark_olive */;
}
.cm-s-abbott .CodeMirror-line::selection,
.cm-s-abbott .CodeMirror-line > span::selection,
.cm-s-abbott .CodeMirror-line > span > span::selection {
  background: #273900 /* dark_olive */;
}
.cm-s-abbott .CodeMirror-line::-moz-selection,
.cm-s-abbott .CodeMirror-line > span::-moz-selection,
.cm-s-abbott .CodeMirror-line > span > span::-moz-selection {
  background: #273900 /* dark_olive */;
}

/* Roughly equivalent to Vim's SpecialKey group. */
.cm-s-abbott .cm-tab { color: #00ff7f /* seafoam_green */; }

/* Equivalent to Vim's Search group. */
.cm-s-abbott .cm-searching {
  background: #fef3b4 /* vanilla_cream */ !important;
  color: #231c14 /* bistre */ !important;
}

/* Style syntax highlighting modes: */

/* Equivalent to Vim's Comment group. */
.cm-s-abbott span.cm-comment {
  color: #fbb32f /* marigold */;
  font-style: italic;
}

/* Equivalent to Vim's String group. */
.cm-s-abbott span.cm-string,
.cm-s-abbott span.cm-string-2 {
  color: #e6a2f3 /* lavender */;
}

/* Equivalent to Vim's Constant group. */
.cm-s-abbott span.cm-number,
.cm-s-abbott span.cm-string.cm-url { color: #f63f05 /* cinnabar */; }

/* Roughly equivalent to Vim's SpecialKey group. */
.cm-s-abbott span.cm-invalidchar { color: #00ff7f /* seafoam_green */; }

/* Equivalent to Vim's Special group. */
.cm-s-abbott span.cm-atom { color: #fef3b4 /* vanilla_cream */; }

/* Equivalent to Vim's Delimiter group. */
.cm-s-abbott span.cm-bracket,
.cm-s-abbott span.cm-punctuation {
  color: #fef3b4 /* vanilla_cream */;
}

/* Equivalent Vim's Operator group. */
.cm-s-abbott span.cm-operator { font-weight: bold; }

/* Roughly equivalent to Vim's Identifier group. */
.cm-s-abbott span.cm-def,
.cm-s-abbott span.cm-variable,
.cm-s-abbott span.cm-variable-2,
.cm-s-abbott span.cm-variable-3 {
  color: #8ccdf0 /* periwinkle_blue */;
}

/* Roughly equivalent to Vim's Function group. */
.cm-s-abbott span.cm-builtin,
.cm-s-abbott span.cm-property,
.cm-s-abbott span.cm-qualifier {
  color: #3f91f1 /* cornflower_blue */;
}

/* Equivalent to Vim's Type group. */
.cm-s-abbott span.cm-type { color: #24a507 /* forest_green */; }

/* Equivalent to Vim's Keyword group. */
.cm-s-abbott span.cm-keyword {
  color: #d80450 /* crimson */;
  font-weight: bold;
}

/* Equivalent to Vim's PreProc group. */
.cm-s-abbott span.cm-meta { color: #ec6c99 /* french_pink */; }

/* Equivalent to Vim's htmlTagName group (linked to Statement). */
.cm-s-abbott span.cm-tag {
  color: #d80450 /* crimson */;
  font-weight: bold;
}

/* Equivalent to Vim's htmlArg group (linked to Type). */
.cm-s-abbott span.cm-attribute { color: #24a507 /* forest_green */; }

/* Equivalent to Vim's htmlH1, markdownH1, etc. groups (linked to Title). */
.cm-s-abbott span.cm-header {
  color: #d80450 /* crimson */;
  font-weight: bold;
}

/* Equivalent to Vim's markdownRule group (linked to PreProc). */
.cm-s-abbott span.cm-hr { color: #ec6c99 /* french_pink */; }

/* Roughly equivalent to Vim's Underlined group. */
.cm-s-abbott span.cm-link { color: #e6a2f3 /* lavender */; }

/* Equivalent to Vim's diffRemoved group. */
.cm-s-abbott span.cm-negative {
  background: #d80450 /* crimson */;
  color: #231c14 /* bistre */;
}

/* Equivalent to Vim's diffAdded group. */
.cm-s-abbott span.cm-positive {
  background: #a0ea00 /* chartreuse */;
  color: #231c14 /* bistre */;
  font-weight: bold;
}

/* Equivalent to Vim's Error group. */
.cm-s-abbott span.cm-error {
  background: #d80450 /* crimson */;
  color: #231c14 /* bistre */;
}

/* Style addons: */

/* Equivalent to Vim's MatchParen group. */
.cm-s-abbott span.CodeMirror-matchingbracket {
  background: #745d42 /* cocoa */ !important;
  color: #231c14 /* bistre */ !important;
  font-weight: bold;
}

/*
 * Roughly equivalent to Vim's Error group. (Vim doesn't seem to have a direct
 * equivalent in its own matchparen plugin, but many syntax highlighting plugins
 * mark mismatched brackets as Error.)
 */
.cm-s-abbott span.CodeMirror-nonmatchingbracket {
  background: #d80450 /* crimson */ !important;
  color: #231c14 /* bistre */ !important;
}

.cm-s-abbott .CodeMirror-matchingtag,
.cm-s-abbott .cm-matchhighlight {
  outline: 1px solid #39a78d /* zomp */;
}

/* Equivalent to Vim's CursorLine group. */
.cm-s-abbott .CodeMirror-activeline-background,
.cm-s-abbott .CodeMirror-activeline-gutter {
  background: #3c3022 /* chocolate */;
}

/* Equivalent to Vim's CursorLineNr group. */
.cm-s-abbott .CodeMirror-activeline-gutter .CodeMirror-linenumber {
  color: #d8ff84 /* pastel_chartreuse */;
  font-weight: bold;
}

/* Roughly equivalent to Vim's Folded group. */
.cm-s-abbott .CodeMirror-foldmarker {
  color: #f63f05 /* cinnabar */;
  text-shadow: none;
}
`;
var abcdef = `.cm-s-abcdef.CodeMirror { background: #0f0f0f; color: #defdef; }
.cm-s-abcdef div.CodeMirror-selected { background: #515151; }
.cm-s-abcdef .CodeMirror-line::selection, .cm-s-abcdef .CodeMirror-line > span::selection, .cm-s-abcdef .CodeMirror-line > span > span::selection { background: rgba(56, 56, 56, 0.99); }
.cm-s-abcdef .CodeMirror-line::-moz-selection, .cm-s-abcdef .CodeMirror-line > span::-moz-selection, .cm-s-abcdef .CodeMirror-line > span > span::-moz-selection { background: rgba(56, 56, 56, 0.99); }
.cm-s-abcdef .CodeMirror-gutters { background: #555; border-right: 2px solid #314151; }
.cm-s-abcdef .CodeMirror-guttermarker { color: #222; }
.cm-s-abcdef .CodeMirror-guttermarker-subtle { color: azure; }
.cm-s-abcdef .CodeMirror-linenumber { color: #FFFFFF; }
.cm-s-abcdef .CodeMirror-cursor { border-left: 1px solid #00FF00; }

.cm-s-abcdef span.cm-keyword { color: darkgoldenrod; font-weight: bold; }
.cm-s-abcdef span.cm-atom { color: #77F; }
.cm-s-abcdef span.cm-number { color: violet; }
.cm-s-abcdef span.cm-def { color: #fffabc; }
.cm-s-abcdef span.cm-variable { color: #abcdef; }
.cm-s-abcdef span.cm-variable-2 { color: #cacbcc; }
.cm-s-abcdef span.cm-variable-3, .cm-s-abcdef span.cm-type { color: #def; }
.cm-s-abcdef span.cm-property { color: #fedcba; }
.cm-s-abcdef span.cm-operator { color: #ff0; }
.cm-s-abcdef span.cm-comment { color: #7a7b7c; font-style: italic;}
.cm-s-abcdef span.cm-string { color: #2b4; }
.cm-s-abcdef span.cm-meta { color: #C9F; }
.cm-s-abcdef span.cm-qualifier { color: #FFF700; }
.cm-s-abcdef span.cm-builtin { color: #30aabc; }
.cm-s-abcdef span.cm-bracket { color: #8a8a8a; }
.cm-s-abcdef span.cm-tag { color: #FFDD44; }
.cm-s-abcdef span.cm-attribute { color: #DDFF00; }
.cm-s-abcdef span.cm-error { color: #FF0000; }
.cm-s-abcdef span.cm-header { color: aquamarine; font-weight: bold; }
.cm-s-abcdef span.cm-link { color: blueviolet; }

.cm-s-abcdef .CodeMirror-activeline-background { background: #314151; }
`;
var ambiance_mobile = `.cm-s-ambiance.CodeMirror {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
`;
var ambiance = `/* ambiance theme for codemirror */

/* Color scheme */

.cm-s-ambiance .cm-header { color: blue; }
.cm-s-ambiance .cm-quote { color: #24C2C7; }

.cm-s-ambiance .cm-keyword { color: #cda869; }
.cm-s-ambiance .cm-atom { color: #CF7EA9; }
.cm-s-ambiance .cm-number { color: #78CF8A; }
.cm-s-ambiance .cm-def { color: #aac6e3; }
.cm-s-ambiance .cm-variable { color: #ffb795; }
.cm-s-ambiance .cm-variable-2 { color: #eed1b3; }
.cm-s-ambiance .cm-variable-3, .cm-s-ambiance .cm-type { color: #faded3; }
.cm-s-ambiance .cm-property { color: #eed1b3; }
.cm-s-ambiance .cm-operator { color: #fa8d6a; }
.cm-s-ambiance .cm-comment { color: #555; font-style:italic; }
.cm-s-ambiance .cm-string { color: #8f9d6a; }
.cm-s-ambiance .cm-string-2 { color: #9d937c; }
.cm-s-ambiance .cm-meta { color: #D2A8A1; }
.cm-s-ambiance .cm-qualifier { color: yellow; }
.cm-s-ambiance .cm-builtin { color: #9999cc; }
.cm-s-ambiance .cm-bracket { color: #24C2C7; }
.cm-s-ambiance .cm-tag { color: #fee4ff; }
.cm-s-ambiance .cm-attribute { color: #9B859D; }
.cm-s-ambiance .cm-hr { color: pink; }
.cm-s-ambiance .cm-link { color: #F4C20B; }
.cm-s-ambiance .cm-special { color: #FF9D00; }
.cm-s-ambiance .cm-error { color: #AF2018; }

.cm-s-ambiance .CodeMirror-matchingbracket { color: #0f0; }
.cm-s-ambiance .CodeMirror-nonmatchingbracket { color: #f22; }

.cm-s-ambiance div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }
.cm-s-ambiance.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }
.cm-s-ambiance .CodeMirror-line::selection, .cm-s-ambiance .CodeMirror-line > span::selection, .cm-s-ambiance .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-ambiance .CodeMirror-line::-moz-selection, .cm-s-ambiance .CodeMirror-line > span::-moz-selection, .cm-s-ambiance .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }

/* Editor styling */

.cm-s-ambiance.CodeMirror {
  line-height: 1.40em;
  color: #E6E1DC;
  background-color: #202020;
  -webkit-box-shadow: inset 0 0 10px black;
  -moz-box-shadow: inset 0 0 10px black;
  box-shadow: inset 0 0 10px black;
}

.cm-s-ambiance .CodeMirror-gutters {
  background: #3D3D3D;
  border-right: 1px solid #4D4D4D;
  box-shadow: 0 10px 20px black;
}

.cm-s-ambiance .CodeMirror-linenumber {
  text-shadow: 0px 1px 1px #4d4d4d;
  color: #111;
  padding: 0 5px;
}

.cm-s-ambiance .CodeMirror-guttermarker { color: #aaa; }
.cm-s-ambiance .CodeMirror-guttermarker-subtle { color: #111; }

.cm-s-ambiance .CodeMirror-cursor { border-left: 1px solid #7991E8; }

.cm-s-ambiance .CodeMirror-activeline-background {
  background: none repeat scroll 0% 0% rgba(255, 255, 255, 0.031);
}

.cm-s-ambiance.CodeMirror,
.cm-s-ambiance .CodeMirror-gutters {
  background-image: url("data:image/png;base64,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");
}
`;
var ayu_dark = `/* Based on https://github.com/dempfi/ayu */

.cm-s-ayu-dark.CodeMirror { background: #0a0e14; color: #b3b1ad; }
.cm-s-ayu-dark div.CodeMirror-selected { background: #273747; }
.cm-s-ayu-dark .CodeMirror-line::selection, .cm-s-ayu-dark .CodeMirror-line > span::selection, .cm-s-ayu-dark .CodeMirror-line > span > span::selection { background: rgba(39, 55, 71, 99); }
.cm-s-ayu-dark .CodeMirror-line::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 55, 71, 99); }
.cm-s-ayu-dark .CodeMirror-gutters { background: #0a0e14; border-right: 0px; }
.cm-s-ayu-dark .CodeMirror-guttermarker { color: white; }
.cm-s-ayu-dark .CodeMirror-guttermarker-subtle { color: #3d424d; }
.cm-s-ayu-dark .CodeMirror-linenumber { color: #3d424d; }
.cm-s-ayu-dark .CodeMirror-cursor { border-left: 1px solid #e6b450; }
.cm-s-ayu-dark.cm-fat-cursor .CodeMirror-cursor { background-color: #a2a8a175 !important; }
.cm-s-ayu-dark .cm-animate-fat-cursor { background-color: #a2a8a175 !important; }

.cm-s-ayu-dark span.cm-comment { color: #626a73; }
.cm-s-ayu-dark span.cm-atom { color: #ae81ff; }
.cm-s-ayu-dark span.cm-number { color: #e6b450; }

.cm-s-ayu-dark span.cm-comment.cm-attribute { color: #ffb454; }
.cm-s-ayu-dark span.cm-comment.cm-def { color: rgba(57, 186, 230, 80); }
.cm-s-ayu-dark span.cm-comment.cm-tag { color: #39bae6; }
.cm-s-ayu-dark span.cm-comment.cm-type { color: #5998a6; }

.cm-s-ayu-dark span.cm-property, .cm-s-ayu-dark span.cm-attribute { color: #ffb454; }  
.cm-s-ayu-dark span.cm-keyword { color: #ff8f40; } 
.cm-s-ayu-dark span.cm-builtin { color: #e6b450; }
.cm-s-ayu-dark span.cm-string { color: #c2d94c; }

.cm-s-ayu-dark span.cm-variable { color: #b3b1ad; }
.cm-s-ayu-dark span.cm-variable-2 { color: #f07178; }
.cm-s-ayu-dark span.cm-variable-3 { color: #39bae6; }
.cm-s-ayu-dark span.cm-type { color: #ff8f40; }
.cm-s-ayu-dark span.cm-def { color: #ffee99; }
.cm-s-ayu-dark span.cm-bracket { color: #f8f8f2; }
.cm-s-ayu-dark span.cm-tag { color: rgba(57, 186, 230, 80); }
.cm-s-ayu-dark span.cm-header { color: #c2d94c; }
.cm-s-ayu-dark span.cm-link { color: #39bae6; }
.cm-s-ayu-dark span.cm-error { color: #ff3333; } 

.cm-s-ayu-dark .CodeMirror-activeline-background { background: #01060e; }
.cm-s-ayu-dark .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
`;
var ayu_mirage = `/* Based on https://github.com/dempfi/ayu */

.cm-s-ayu-mirage.CodeMirror { background: #1f2430; color: #cbccc6; }
.cm-s-ayu-mirage div.CodeMirror-selected { background: #34455a; }
.cm-s-ayu-mirage .CodeMirror-line::selection, .cm-s-ayu-mirage .CodeMirror-line > span::selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::selection { background: #34455a; }
.cm-s-ayu-mirage .CodeMirror-line::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::-moz-selection { background: rgba(25, 30, 42, 99); }
.cm-s-ayu-mirage .CodeMirror-gutters { background: #1f2430; border-right: 0px; }
.cm-s-ayu-mirage .CodeMirror-guttermarker { color: white; }
.cm-s-ayu-mirage .CodeMirror-guttermarker-subtle { color:  rgba(112, 122, 140, 66); }
.cm-s-ayu-mirage .CodeMirror-linenumber { color: rgba(61, 66, 77, 99); }
.cm-s-ayu-mirage .CodeMirror-cursor { border-left: 1px solid #ffcc66;  }
.cm-s-ayu-mirage.cm-fat-cursor .CodeMirror-cursor {background-color: #a2a8a175 !important;}
.cm-s-ayu-mirage .cm-animate-fat-cursor { background-color: #a2a8a175 !important; }

.cm-s-ayu-mirage span.cm-comment { color: #5c6773; font-style:italic; }
.cm-s-ayu-mirage span.cm-atom { color: #ae81ff; }
.cm-s-ayu-mirage span.cm-number { color: #ffcc66; }

.cm-s-ayu-mirage span.cm-comment.cm-attribute { color: #ffd580; }
.cm-s-ayu-mirage span.cm-comment.cm-def { color: #d4bfff; }
.cm-s-ayu-mirage span.cm-comment.cm-tag { color: #5ccfe6; }
.cm-s-ayu-mirage span.cm-comment.cm-type { color: #5998a6; }

.cm-s-ayu-mirage span.cm-property { color: #f29e74; }
.cm-s-ayu-mirage span.cm-attribute { color: #ffd580; }  
.cm-s-ayu-mirage span.cm-keyword { color: #ffa759; } 
.cm-s-ayu-mirage span.cm-builtin { color: #ffcc66; }
.cm-s-ayu-mirage span.cm-string { color: #bae67e; }

.cm-s-ayu-mirage span.cm-variable { color: #cbccc6; }
.cm-s-ayu-mirage span.cm-variable-2 { color: #f28779; }
.cm-s-ayu-mirage span.cm-variable-3 { color: #5ccfe6; }
.cm-s-ayu-mirage span.cm-type { color: #ffa759; }
.cm-s-ayu-mirage span.cm-def { color: #ffd580; }
.cm-s-ayu-mirage span.cm-bracket { color: rgba(92, 207, 230, 80); }
.cm-s-ayu-mirage span.cm-tag { color: #5ccfe6; }
.cm-s-ayu-mirage span.cm-header { color: #bae67e; }
.cm-s-ayu-mirage span.cm-link { color: #5ccfe6; }
.cm-s-ayu-mirage span.cm-error { color: #ff3333; } 

.cm-s-ayu-mirage .CodeMirror-activeline-background { background: #191e2a; }
.cm-s-ayu-mirage .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
`;
var base16_dark = `/*

    Name:       Base16 Default Dark
    Author:     Chris Kempson (http://chriskempson.com)

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-base16-dark.CodeMirror { background: #151515; color: #e0e0e0; }
.cm-s-base16-dark div.CodeMirror-selected { background: #303030; }
.cm-s-base16-dark .CodeMirror-line::selection, .cm-s-base16-dark .CodeMirror-line > span::selection, .cm-s-base16-dark .CodeMirror-line > span > span::selection { background: rgba(48, 48, 48, .99); }
.cm-s-base16-dark .CodeMirror-line::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(48, 48, 48, .99); }
.cm-s-base16-dark .CodeMirror-gutters { background: #151515; border-right: 0px; }
.cm-s-base16-dark .CodeMirror-guttermarker { color: #ac4142; }
.cm-s-base16-dark .CodeMirror-guttermarker-subtle { color: #505050; }
.cm-s-base16-dark .CodeMirror-linenumber { color: #505050; }
.cm-s-base16-dark .CodeMirror-cursor { border-left: 1px solid #b0b0b0; }
.cm-s-base16-dark.cm-fat-cursor .CodeMirror-cursor { background-color: #8e8d8875 !important; }
.cm-s-base16-dark .cm-animate-fat-cursor { background-color: #8e8d8875 !important; }

.cm-s-base16-dark span.cm-comment { color: #8f5536; }
.cm-s-base16-dark span.cm-atom { color: #aa759f; }
.cm-s-base16-dark span.cm-number { color: #aa759f; }

.cm-s-base16-dark span.cm-property, .cm-s-base16-dark span.cm-attribute { color: #90a959; }
.cm-s-base16-dark span.cm-keyword { color: #ac4142; }
.cm-s-base16-dark span.cm-string { color: #f4bf75; }

.cm-s-base16-dark span.cm-variable { color: #90a959; }
.cm-s-base16-dark span.cm-variable-2 { color: #6a9fb5; }
.cm-s-base16-dark span.cm-def { color: #d28445; }
.cm-s-base16-dark span.cm-bracket { color: #e0e0e0; }
.cm-s-base16-dark span.cm-tag { color: #ac4142; }
.cm-s-base16-dark span.cm-link { color: #aa759f; }
.cm-s-base16-dark span.cm-error { background: #ac4142; color: #b0b0b0; }

.cm-s-base16-dark .CodeMirror-activeline-background { background: #202020; }
.cm-s-base16-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }
`;
var base16_light = `/*

    Name:       Base16 Default Light
    Author:     Chris Kempson (http://chriskempson.com)

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-base16-light.CodeMirror { background: #f5f5f5; color: #202020; }
.cm-s-base16-light div.CodeMirror-selected { background: #e0e0e0; }
.cm-s-base16-light .CodeMirror-line::selection, .cm-s-base16-light .CodeMirror-line > span::selection, .cm-s-base16-light .CodeMirror-line > span > span::selection { background: #e0e0e0; }
.cm-s-base16-light .CodeMirror-line::-moz-selection, .cm-s-base16-light .CodeMirror-line > span::-moz-selection, .cm-s-base16-light .CodeMirror-line > span > span::-moz-selection { background: #e0e0e0; }
.cm-s-base16-light .CodeMirror-gutters { background: #f5f5f5; border-right: 0px; }
.cm-s-base16-light .CodeMirror-guttermarker { color: #ac4142; }
.cm-s-base16-light .CodeMirror-guttermarker-subtle { color: #b0b0b0; }
.cm-s-base16-light .CodeMirror-linenumber { color: #b0b0b0; }
.cm-s-base16-light .CodeMirror-cursor { border-left: 1px solid #505050; }

.cm-s-base16-light span.cm-comment { color: #8f5536; }
.cm-s-base16-light span.cm-atom { color: #aa759f; }
.cm-s-base16-light span.cm-number { color: #aa759f; }

.cm-s-base16-light span.cm-property, .cm-s-base16-light span.cm-attribute { color: #90a959; }
.cm-s-base16-light span.cm-keyword { color: #ac4142; }
.cm-s-base16-light span.cm-string { color: #f4bf75; }

.cm-s-base16-light span.cm-variable { color: #90a959; }
.cm-s-base16-light span.cm-variable-2 { color: #6a9fb5; }
.cm-s-base16-light span.cm-def { color: #d28445; }
.cm-s-base16-light span.cm-bracket { color: #202020; }
.cm-s-base16-light span.cm-tag { color: #ac4142; }
.cm-s-base16-light span.cm-link { color: #aa759f; }
.cm-s-base16-light span.cm-error { background: #ac4142; color: #505050; }

.cm-s-base16-light .CodeMirror-activeline-background { background: #DDDCDC; }
.cm-s-base16-light .CodeMirror-matchingbracket { color: #f5f5f5 !important; background-color: #6A9FB5 !important}
`;
var bespin = `/*

    Name:       Bespin
    Author:     Mozilla / Jan T. Sott

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-bespin.CodeMirror {background: #28211c; color: #9d9b97;}
.cm-s-bespin div.CodeMirror-selected {background: #36312e !important;}
.cm-s-bespin .CodeMirror-gutters {background: #28211c; border-right: 0px;}
.cm-s-bespin .CodeMirror-linenumber {color: #666666;}
.cm-s-bespin .CodeMirror-cursor {border-left: 1px solid #797977 !important;}

.cm-s-bespin span.cm-comment {color: #937121;}
.cm-s-bespin span.cm-atom {color: #9b859d;}
.cm-s-bespin span.cm-number {color: #9b859d;}

.cm-s-bespin span.cm-property, .cm-s-bespin span.cm-attribute {color: #54be0d;}
.cm-s-bespin span.cm-keyword {color: #cf6a4c;}
.cm-s-bespin span.cm-string {color: #f9ee98;}

.cm-s-bespin span.cm-variable {color: #54be0d;}
.cm-s-bespin span.cm-variable-2 {color: #5ea6ea;}
.cm-s-bespin span.cm-def {color: #cf7d34;}
.cm-s-bespin span.cm-error {background: #cf6a4c; color: #797977;}
.cm-s-bespin span.cm-bracket {color: #9d9b97;}
.cm-s-bespin span.cm-tag {color: #cf6a4c;}
.cm-s-bespin span.cm-link {color: #9b859d;}

.cm-s-bespin .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}
.cm-s-bespin .CodeMirror-activeline-background { background: #404040; }
`;
var blackboard = `/* Port of TextMate's Blackboard theme */

.cm-s-blackboard.CodeMirror { background: #0C1021; color: #F8F8F8; }
.cm-s-blackboard div.CodeMirror-selected { background: #253B76; }
.cm-s-blackboard .CodeMirror-line::selection, .cm-s-blackboard .CodeMirror-line > span::selection, .cm-s-blackboard .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }
.cm-s-blackboard .CodeMirror-line::-moz-selection, .cm-s-blackboard .CodeMirror-line > span::-moz-selection, .cm-s-blackboard .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }
.cm-s-blackboard .CodeMirror-gutters { background: #0C1021; border-right: 0; }
.cm-s-blackboard .CodeMirror-guttermarker { color: #FBDE2D; }
.cm-s-blackboard .CodeMirror-guttermarker-subtle { color: #888; }
.cm-s-blackboard .CodeMirror-linenumber { color: #888; }
.cm-s-blackboard .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }

.cm-s-blackboard .cm-keyword { color: #FBDE2D; }
.cm-s-blackboard .cm-atom { color: #D8FA3C; }
.cm-s-blackboard .cm-number { color: #D8FA3C; }
.cm-s-blackboard .cm-def { color: #8DA6CE; }
.cm-s-blackboard .cm-variable { color: #FF6400; }
.cm-s-blackboard .cm-operator { color: #FBDE2D; }
.cm-s-blackboard .cm-comment { color: #AEAEAE; }
.cm-s-blackboard .cm-string { color: #61CE3C; }
.cm-s-blackboard .cm-string-2 { color: #61CE3C; }
.cm-s-blackboard .cm-meta { color: #D8FA3C; }
.cm-s-blackboard .cm-builtin { color: #8DA6CE; }
.cm-s-blackboard .cm-tag { color: #8DA6CE; }
.cm-s-blackboard .cm-attribute { color: #8DA6CE; }
.cm-s-blackboard .cm-header { color: #FF6400; }
.cm-s-blackboard .cm-hr { color: #AEAEAE; }
.cm-s-blackboard .cm-link { color: #8DA6CE; }
.cm-s-blackboard .cm-error { background: #9D1E15; color: #F8F8F8; }

.cm-s-blackboard .CodeMirror-activeline-background { background: #3C3636; }
.cm-s-blackboard .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }
`;
var cobalt = `.cm-s-cobalt.CodeMirror { background: #002240; color: white; }
.cm-s-cobalt div.CodeMirror-selected { background: #b36539; }
.cm-s-cobalt .CodeMirror-line::selection, .cm-s-cobalt .CodeMirror-line > span::selection, .cm-s-cobalt .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }
.cm-s-cobalt .CodeMirror-line::-moz-selection, .cm-s-cobalt .CodeMirror-line > span::-moz-selection, .cm-s-cobalt .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }
.cm-s-cobalt .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }
.cm-s-cobalt .CodeMirror-guttermarker { color: #ffee80; }
.cm-s-cobalt .CodeMirror-guttermarker-subtle { color: #d0d0d0; }
.cm-s-cobalt .CodeMirror-linenumber { color: #d0d0d0; }
.cm-s-cobalt .CodeMirror-cursor { border-left: 1px solid white; }

.cm-s-cobalt span.cm-comment { color: #08f; }
.cm-s-cobalt span.cm-atom { color: #845dc4; }
.cm-s-cobalt span.cm-number, .cm-s-cobalt span.cm-attribute { color: #ff80e1; }
.cm-s-cobalt span.cm-keyword { color: #ffee80; }
.cm-s-cobalt span.cm-string { color: #3ad900; }
.cm-s-cobalt span.cm-meta { color: #ff9d00; }
.cm-s-cobalt span.cm-variable-2, .cm-s-cobalt span.cm-tag { color: #9effff; }
.cm-s-cobalt span.cm-variable-3, .cm-s-cobalt span.cm-def, .cm-s-cobalt .cm-type { color: white; }
.cm-s-cobalt span.cm-bracket { color: #d8d8d8; }
.cm-s-cobalt span.cm-builtin, .cm-s-cobalt span.cm-special { color: #ff9e59; }
.cm-s-cobalt span.cm-link { color: #845dc4; }
.cm-s-cobalt span.cm-error { color: #9d1e15; }

.cm-s-cobalt .CodeMirror-activeline-background { background: #002D57; }
.cm-s-cobalt .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }
`;
var colorforth = `.cm-s-colorforth.CodeMirror { background: #000000; color: #f8f8f8; }
.cm-s-colorforth .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }
.cm-s-colorforth .CodeMirror-guttermarker { color: #FFBD40; }
.cm-s-colorforth .CodeMirror-guttermarker-subtle { color: #78846f; }
.cm-s-colorforth .CodeMirror-linenumber { color: #bababa; }
.cm-s-colorforth .CodeMirror-cursor { border-left: 1px solid white; }

.cm-s-colorforth span.cm-comment     { color: #ededed; }
.cm-s-colorforth span.cm-def         { color: #ff1c1c; font-weight:bold; }
.cm-s-colorforth span.cm-keyword     { color: #ffd900; }
.cm-s-colorforth span.cm-builtin     { color: #00d95a; }
.cm-s-colorforth span.cm-variable    { color: #73ff00; }
.cm-s-colorforth span.cm-string      { color: #007bff; }
.cm-s-colorforth span.cm-number      { color: #00c4ff; }
.cm-s-colorforth span.cm-atom        { color: #606060; }

.cm-s-colorforth span.cm-variable-2  { color: #EEE; }
.cm-s-colorforth span.cm-variable-3, .cm-s-colorforth span.cm-type { color: #DDD; }
.cm-s-colorforth span.cm-property    {}
.cm-s-colorforth span.cm-operator    {}

.cm-s-colorforth span.cm-meta        { color: yellow; }
.cm-s-colorforth span.cm-qualifier   { color: #FFF700; }
.cm-s-colorforth span.cm-bracket     { color: #cc7; }
.cm-s-colorforth span.cm-tag         { color: #FFBD40; }
.cm-s-colorforth span.cm-attribute   { color: #FFF700; }
.cm-s-colorforth span.cm-error       { color: #f00; }

.cm-s-colorforth div.CodeMirror-selected { background: #333d53; }

.cm-s-colorforth span.cm-compilation { background: rgba(255, 255, 255, 0.12); }

.cm-s-colorforth .CodeMirror-activeline-background { background: #253540; }
`;
var darcula = `/**
    Name: IntelliJ IDEA darcula theme
    From IntelliJ IDEA by JetBrains
 */

.cm-s-darcula  { font-family: Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, serif;}
.cm-s-darcula.CodeMirror { background: #2B2B2B; color: #A9B7C6; }

.cm-s-darcula span.cm-meta { color: #BBB529; }
.cm-s-darcula span.cm-number { color: #6897BB; }
.cm-s-darcula span.cm-keyword { color: #CC7832; line-height: 1em; font-weight: bold; }
.cm-s-darcula span.cm-def { color: #A9B7C6; font-style: italic; }
.cm-s-darcula span.cm-variable { color: #A9B7C6; }
.cm-s-darcula span.cm-variable-2 { color: #A9B7C6; }
.cm-s-darcula span.cm-variable-3 { color: #9876AA; }
.cm-s-darcula span.cm-type { color: #AABBCC; font-weight: bold; }
.cm-s-darcula span.cm-property { color: #FFC66D; }
.cm-s-darcula span.cm-operator { color: #A9B7C6; }
.cm-s-darcula span.cm-string { color: #6A8759; }
.cm-s-darcula span.cm-string-2 { color: #6A8759; }
.cm-s-darcula span.cm-comment { color: #61A151; font-style: italic; }
.cm-s-darcula span.cm-link { color: #CC7832; }
.cm-s-darcula span.cm-atom { color: #CC7832; }
.cm-s-darcula span.cm-error { color: #BC3F3C; }
.cm-s-darcula span.cm-tag { color: #629755; font-weight: bold; font-style: italic; text-decoration: underline; }
.cm-s-darcula span.cm-attribute { color: #6897bb; }
.cm-s-darcula span.cm-qualifier { color: #6A8759; }
.cm-s-darcula span.cm-bracket { color: #A9B7C6; }
.cm-s-darcula span.cm-builtin { color: #FF9E59; }
.cm-s-darcula span.cm-special { color: #FF9E59; }
.cm-s-darcula span.cm-matchhighlight { color: #FFFFFF; background-color: rgba(50, 89, 48, .7); font-weight: normal;}
.cm-s-darcula span.cm-searching { color: #FFFFFF; background-color: rgba(61, 115, 59, .7); font-weight: normal;}

.cm-s-darcula .CodeMirror-cursor { border-left: 1px solid #A9B7C6; }
.cm-s-darcula .CodeMirror-activeline-background { background: #323232; }
.cm-s-darcula .CodeMirror-gutters { background: #313335; border-right: 1px solid #313335; }
.cm-s-darcula .CodeMirror-guttermarker { color: #FFEE80; }
.cm-s-darcula .CodeMirror-guttermarker-subtle { color: #D0D0D0; }
.cm-s-darcula .CodeMirrir-linenumber { color: #606366; }
.cm-s-darcula .CodeMirror-matchingbracket { background-color: #3B514D; color: #FFEF28 !important; font-weight: bold; }

.cm-s-darcula div.CodeMirror-selected { background: #214283; }

.CodeMirror-hints.darcula {
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  color: #9C9E9E;
  background-color: #3B3E3F !important;
}

.CodeMirror-hints.darcula .CodeMirror-hint-active {
  background-color: #494D4E !important;
  color: #9C9E9E !important;
}
`;
var dracula = `/*

    Name:       dracula
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)

*/


.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {
  background-color: #282a36 !important;
  color: #f8f8f2 !important;
  border: none;
}
.cm-s-dracula .CodeMirror-gutters { color: #282a36; }
.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }
.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }
.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }
.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-dracula span.cm-comment { color: #6272a4; }
.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }
.cm-s-dracula span.cm-number { color: #bd93f9; }
.cm-s-dracula span.cm-variable { color: #50fa7b; }
.cm-s-dracula span.cm-variable-2 { color: white; }
.cm-s-dracula span.cm-def { color: #50fa7b; }
.cm-s-dracula span.cm-operator { color: #ff79c6; }
.cm-s-dracula span.cm-keyword { color: #ff79c6; }
.cm-s-dracula span.cm-atom { color: #bd93f9; }
.cm-s-dracula span.cm-meta { color: #f8f8f2; }
.cm-s-dracula span.cm-tag { color: #ff79c6; }
.cm-s-dracula span.cm-attribute { color: #50fa7b; }
.cm-s-dracula span.cm-qualifier { color: #50fa7b; }
.cm-s-dracula span.cm-property { color: #66d9ef; }
.cm-s-dracula span.cm-builtin { color: #50fa7b; }
.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }

.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }
.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }
`;
var duotone_dark = `/*
Name:   DuoTone-Dark
Author: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)

CodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)
*/

.cm-s-duotone-dark.CodeMirror { background: #2a2734; color: #6c6783; }
.cm-s-duotone-dark div.CodeMirror-selected { background: #545167!important; }
.cm-s-duotone-dark .CodeMirror-gutters { background: #2a2734; border-right: 0px; }
.cm-s-duotone-dark .CodeMirror-linenumber { color: #545167; }

/* begin cursor */
.cm-s-duotone-dark .CodeMirror-cursor { border-left: 1px solid #ffad5c; /* border-left: 1px solid #ffad5c80; */ border-right: .5em solid #ffad5c; /* border-right: .5em solid #ffad5c80; */ opacity: .5; }
.cm-s-duotone-dark .CodeMirror-activeline-background { background: #363342; /* background: #36334280;  */ opacity: .5;}
.cm-s-duotone-dark .cm-fat-cursor .CodeMirror-cursor { background: #ffad5c; /* background: #ffad5c80; */ opacity: .5;}
/* end cursor */

.cm-s-duotone-dark span.cm-atom, .cm-s-duotone-dark span.cm-number, .cm-s-duotone-dark span.cm-keyword, .cm-s-duotone-dark span.cm-variable, .cm-s-duotone-dark span.cm-attribute, .cm-s-duotone-dark span.cm-quote, .cm-s-duotone-dark span.cm-hr, .cm-s-duotone-dark span.cm-link { color: #ffcc99; }

.cm-s-duotone-dark span.cm-property { color: #9a86fd; }
.cm-s-duotone-dark span.cm-punctuation, .cm-s-duotone-dark span.cm-unit, .cm-s-duotone-dark span.cm-negative { color: #e09142; }
.cm-s-duotone-dark span.cm-string { color: #ffb870; }
.cm-s-duotone-dark span.cm-operator { color: #ffad5c; }
.cm-s-duotone-dark span.cm-positive { color: #6a51e6; }

.cm-s-duotone-dark span.cm-variable-2, .cm-s-duotone-dark span.cm-variable-3, .cm-s-duotone-dark span.cm-type, .cm-s-duotone-dark span.cm-string-2, .cm-s-duotone-dark span.cm-url { color: #7a63ee; }
.cm-s-duotone-dark span.cm-def, .cm-s-duotone-dark span.cm-tag, .cm-s-duotone-dark span.cm-builtin, .cm-s-duotone-dark span.cm-qualifier, .cm-s-duotone-dark span.cm-header, .cm-s-duotone-dark span.cm-em { color: #eeebff; }
.cm-s-duotone-dark span.cm-bracket, .cm-s-duotone-dark span.cm-comment { color: #6c6783; }

/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */
.cm-s-duotone-dark span.cm-error, .cm-s-duotone-dark span.cm-invalidchar { color: #f00; }

.cm-s-duotone-dark span.cm-header { font-weight: normal; }
.cm-s-duotone-dark .CodeMirror-matchingbracket { text-decoration: underline; color: #eeebff !important; } 
`;
var duotone_light = `/*
Name:   DuoTone-Light
Author: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)

CodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)
*/

.cm-s-duotone-light.CodeMirror { background: #faf8f5; color: #b29762; }
.cm-s-duotone-light div.CodeMirror-selected { background: #e3dcce !important; }
.cm-s-duotone-light .CodeMirror-gutters { background: #faf8f5; border-right: 0px; }
.cm-s-duotone-light .CodeMirror-linenumber { color: #cdc4b1; }

/* begin cursor */
.cm-s-duotone-light .CodeMirror-cursor { border-left: 1px solid #93abdc; /* border-left: 1px solid #93abdc80; */ border-right: .5em solid #93abdc; /* border-right: .5em solid #93abdc80; */ opacity: .5; }
.cm-s-duotone-light .CodeMirror-activeline-background { background: #e3dcce;  /* background: #e3dcce80; */ opacity: .5; }
.cm-s-duotone-light .cm-fat-cursor .CodeMirror-cursor { background: #93abdc; /* #93abdc80; */ opacity: .5; }
/* end cursor */

.cm-s-duotone-light span.cm-atom, .cm-s-duotone-light span.cm-number, .cm-s-duotone-light span.cm-keyword, .cm-s-duotone-light span.cm-variable, .cm-s-duotone-light span.cm-attribute, .cm-s-duotone-light span.cm-quote, .cm-s-duotone-light-light span.cm-hr, .cm-s-duotone-light-light span.cm-link { color: #063289; }

.cm-s-duotone-light span.cm-property { color: #b29762; }
.cm-s-duotone-light span.cm-punctuation, .cm-s-duotone-light span.cm-unit, .cm-s-duotone-light span.cm-negative { color: #063289; }
.cm-s-duotone-light span.cm-string, .cm-s-duotone-light span.cm-operator { color: #1659df; }
.cm-s-duotone-light span.cm-positive { color: #896724; }

.cm-s-duotone-light span.cm-variable-2, .cm-s-duotone-light span.cm-variable-3, .cm-s-duotone-light span.cm-type, .cm-s-duotone-light span.cm-string-2, .cm-s-duotone-light span.cm-url { color: #896724; }
.cm-s-duotone-light span.cm-def, .cm-s-duotone-light span.cm-tag, .cm-s-duotone-light span.cm-builtin, .cm-s-duotone-light span.cm-qualifier, .cm-s-duotone-light span.cm-header, .cm-s-duotone-light span.cm-em { color: #2d2006; }
.cm-s-duotone-light span.cm-bracket, .cm-s-duotone-light span.cm-comment { color: #b6ad9a; }

/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */
/* .cm-s-duotone-light span.cm-error { background: #896724; color: #728fcb; } */
.cm-s-duotone-light span.cm-error, .cm-s-duotone-light span.cm-invalidchar { color: #f00; }

.cm-s-duotone-light span.cm-header { font-weight: normal; }
.cm-s-duotone-light .CodeMirror-matchingbracket { text-decoration: underline; color: #faf8f5 !important; }

`;
var eclipse = `.cm-s-eclipse span.cm-meta { color: #FF1717; }
.cm-s-eclipse span.cm-keyword { line-height: 1em; font-weight: bold; color: #7F0055; }
.cm-s-eclipse span.cm-atom { color: #219; }
.cm-s-eclipse span.cm-number { color: #164; }
.cm-s-eclipse span.cm-def { color: #00f; }
.cm-s-eclipse span.cm-variable { color: black; }
.cm-s-eclipse span.cm-variable-2 { color: #0000C0; }
.cm-s-eclipse span.cm-variable-3, .cm-s-eclipse span.cm-type { color: #0000C0; }
.cm-s-eclipse span.cm-property { color: black; }
.cm-s-eclipse span.cm-operator { color: black; }
.cm-s-eclipse span.cm-comment { color: #3F7F5F; }
.cm-s-eclipse span.cm-string { color: #2A00FF; }
.cm-s-eclipse span.cm-string-2 { color: #f50; }
.cm-s-eclipse span.cm-qualifier { color: #555; }
.cm-s-eclipse span.cm-builtin { color: #30a; }
.cm-s-eclipse span.cm-bracket { color: #cc7; }
.cm-s-eclipse span.cm-tag { color: #170; }
.cm-s-eclipse span.cm-attribute { color: #00c; }
.cm-s-eclipse span.cm-link { color: #219; }
.cm-s-eclipse span.cm-error { color: #f00; }

.cm-s-eclipse .CodeMirror-activeline-background { background: #e8f2ff; }
.cm-s-eclipse .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }
`;
var elegant = `.cm-s-elegant span.cm-number, .cm-s-elegant span.cm-string, .cm-s-elegant span.cm-atom { color: #762; }
.cm-s-elegant span.cm-comment { color: #262; font-style: italic; line-height: 1em; }
.cm-s-elegant span.cm-meta { color: #555; font-style: italic; line-height: 1em; }
.cm-s-elegant span.cm-variable { color: black; }
.cm-s-elegant span.cm-variable-2 { color: #b11; }
.cm-s-elegant span.cm-qualifier { color: #555; }
.cm-s-elegant span.cm-keyword { color: #730; }
.cm-s-elegant span.cm-builtin { color: #30a; }
.cm-s-elegant span.cm-link { color: #762; }
.cm-s-elegant span.cm-error { background-color: #fdd; }

.cm-s-elegant .CodeMirror-activeline-background { background: #e8f2ff; }
.cm-s-elegant .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }
`;
var erlang_dark = `.cm-s-erlang-dark.CodeMirror { background: #002240; color: white; }
.cm-s-erlang-dark div.CodeMirror-selected { background: #b36539; }
.cm-s-erlang-dark .CodeMirror-line::selection, .cm-s-erlang-dark .CodeMirror-line > span::selection, .cm-s-erlang-dark .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }
.cm-s-erlang-dark .CodeMirror-line::-moz-selection, .cm-s-erlang-dark .CodeMirror-line > span::-moz-selection, .cm-s-erlang-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }
.cm-s-erlang-dark .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }
.cm-s-erlang-dark .CodeMirror-guttermarker { color: white; }
.cm-s-erlang-dark .CodeMirror-guttermarker-subtle { color: #d0d0d0; }
.cm-s-erlang-dark .CodeMirror-linenumber { color: #d0d0d0; }
.cm-s-erlang-dark .CodeMirror-cursor { border-left: 1px solid white; }

.cm-s-erlang-dark span.cm-quote      { color: #ccc; }
.cm-s-erlang-dark span.cm-atom       { color: #f133f1; }
.cm-s-erlang-dark span.cm-attribute  { color: #ff80e1; }
.cm-s-erlang-dark span.cm-bracket    { color: #ff9d00; }
.cm-s-erlang-dark span.cm-builtin    { color: #eaa; }
.cm-s-erlang-dark span.cm-comment    { color: #77f; }
.cm-s-erlang-dark span.cm-def        { color: #e7a; }
.cm-s-erlang-dark span.cm-keyword    { color: #ffee80; }
.cm-s-erlang-dark span.cm-meta       { color: #50fefe; }
.cm-s-erlang-dark span.cm-number     { color: #ffd0d0; }
.cm-s-erlang-dark span.cm-operator   { color: #d55; }
.cm-s-erlang-dark span.cm-property   { color: #ccc; }
.cm-s-erlang-dark span.cm-qualifier  { color: #ccc; }
.cm-s-erlang-dark span.cm-special    { color: #ffbbbb; }
.cm-s-erlang-dark span.cm-string     { color: #3ad900; }
.cm-s-erlang-dark span.cm-string-2   { color: #ccc; }
.cm-s-erlang-dark span.cm-tag        { color: #9effff; }
.cm-s-erlang-dark span.cm-variable   { color: #50fe50; }
.cm-s-erlang-dark span.cm-variable-2 { color: #e0e; }
.cm-s-erlang-dark span.cm-variable-3, .cm-s-erlang-dark span.cm-type { color: #ccc; }
.cm-s-erlang-dark span.cm-error      { color: #9d1e15; }

.cm-s-erlang-dark .CodeMirror-activeline-background { background: #013461; }
.cm-s-erlang-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }
`;
var gruvbox_dark = `/*

    Name:       gruvbox-dark
    Author:     kRkk (https://github.com/krkk)

    Original gruvbox color scheme by Pavel Pertsev (https://github.com/morhetz/gruvbox)

*/

.cm-s-gruvbox-dark.CodeMirror, .cm-s-gruvbox-dark .CodeMirror-gutters { background-color: #282828; color: #bdae93; }
.cm-s-gruvbox-dark .CodeMirror-gutters {background: #282828; border-right: 0px;}
.cm-s-gruvbox-dark .CodeMirror-linenumber {color: #7c6f64;}
.cm-s-gruvbox-dark .CodeMirror-cursor { border-left: 1px solid #ebdbb2; }
.cm-s-gruvbox-dark.cm-fat-cursor .CodeMirror-cursor { background-color: #8e8d8875 !important; }
.cm-s-gruvbox-dark .cm-animate-fat-cursor { background-color: #8e8d8875 !important; }
.cm-s-gruvbox-dark div.CodeMirror-selected { background: #928374; }
.cm-s-gruvbox-dark span.cm-meta { color: #83a598; }

.cm-s-gruvbox-dark span.cm-comment { color: #928374; }
.cm-s-gruvbox-dark span.cm-number, span.cm-atom { color: #d3869b; }
.cm-s-gruvbox-dark span.cm-keyword { color: #f84934; }

.cm-s-gruvbox-dark span.cm-variable { color: #ebdbb2; }
.cm-s-gruvbox-dark span.cm-variable-2 { color: #ebdbb2; }
.cm-s-gruvbox-dark span.cm-variable-3, .cm-s-gruvbox-dark span.cm-type { color: #fabd2f; }
.cm-s-gruvbox-dark span.cm-operator { color: #ebdbb2; }
.cm-s-gruvbox-dark span.cm-callee { color: #ebdbb2; }
.cm-s-gruvbox-dark span.cm-def { color: #ebdbb2; }
.cm-s-gruvbox-dark span.cm-property { color: #ebdbb2; }
.cm-s-gruvbox-dark span.cm-string { color: #b8bb26; }
.cm-s-gruvbox-dark span.cm-string-2 { color: #8ec07c; }
.cm-s-gruvbox-dark span.cm-qualifier { color: #8ec07c; }
.cm-s-gruvbox-dark span.cm-attribute { color: #8ec07c; }

.cm-s-gruvbox-dark .CodeMirror-activeline-background { background: #3c3836; }
.cm-s-gruvbox-dark .CodeMirror-matchingbracket { background: #928374; color:#282828 !important; }

.cm-s-gruvbox-dark span.cm-builtin { color: #fe8019; }
.cm-s-gruvbox-dark span.cm-tag { color: #fe8019; }
`;
var hopscotch = `/*

    Name:       Hopscotch
    Author:     Jan T. Sott

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-hopscotch.CodeMirror {background: #322931; color: #d5d3d5;}
.cm-s-hopscotch div.CodeMirror-selected {background: #433b42 !important;}
.cm-s-hopscotch .CodeMirror-gutters {background: #322931; border-right: 0px;}
.cm-s-hopscotch .CodeMirror-linenumber {color: #797379;}
.cm-s-hopscotch .CodeMirror-cursor {border-left: 1px solid #989498 !important;}

.cm-s-hopscotch span.cm-comment {color: #b33508;}
.cm-s-hopscotch span.cm-atom {color: #c85e7c;}
.cm-s-hopscotch span.cm-number {color: #c85e7c;}

.cm-s-hopscotch span.cm-property, .cm-s-hopscotch span.cm-attribute {color: #8fc13e;}
.cm-s-hopscotch span.cm-keyword {color: #dd464c;}
.cm-s-hopscotch span.cm-string {color: #fdcc59;}

.cm-s-hopscotch span.cm-variable {color: #8fc13e;}
.cm-s-hopscotch span.cm-variable-2 {color: #1290bf;}
.cm-s-hopscotch span.cm-def {color: #fd8b19;}
.cm-s-hopscotch span.cm-error {background: #dd464c; color: #989498;}
.cm-s-hopscotch span.cm-bracket {color: #d5d3d5;}
.cm-s-hopscotch span.cm-tag {color: #dd464c;}
.cm-s-hopscotch span.cm-link {color: #c85e7c;}

.cm-s-hopscotch .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}
.cm-s-hopscotch .CodeMirror-activeline-background { background: #302020; }
`;
var icecoder = `/*
ICEcoder default theme by Matt Pass, used in code editor available at https://icecoder.net
*/

.cm-s-icecoder { color: #666; background: #1d1d1b; }

.cm-s-icecoder span.cm-keyword { color: #eee; font-weight:bold; }  /* off-white 1 */
.cm-s-icecoder span.cm-atom { color: #e1c76e; }                    /* yellow */
.cm-s-icecoder span.cm-number { color: #6cb5d9; }                  /* blue */
.cm-s-icecoder span.cm-def { color: #b9ca4a; }                     /* green */

.cm-s-icecoder span.cm-variable { color: #6cb5d9; }                /* blue */
.cm-s-icecoder span.cm-variable-2 { color: #cc1e5c; }              /* pink */
.cm-s-icecoder span.cm-variable-3, .cm-s-icecoder span.cm-type { color: #f9602c; } /* orange */

.cm-s-icecoder span.cm-property { color: #eee; }                   /* off-white 1 */
.cm-s-icecoder span.cm-operator { color: #9179bb; }                /* purple */
.cm-s-icecoder span.cm-comment { color: #97a3aa; }                 /* grey-blue */

.cm-s-icecoder span.cm-string { color: #b9ca4a; }                  /* green */
.cm-s-icecoder span.cm-string-2 { color: #6cb5d9; }                /* blue */

.cm-s-icecoder span.cm-meta { color: #555; }                       /* grey */

.cm-s-icecoder span.cm-qualifier { color: #555; }                  /* grey */
.cm-s-icecoder span.cm-builtin { color: #214e7b; }                 /* bright blue */
.cm-s-icecoder span.cm-bracket { color: #cc7; }                    /* grey-yellow */

.cm-s-icecoder span.cm-tag { color: #e8e8e8; }                     /* off-white 2 */
.cm-s-icecoder span.cm-attribute { color: #099; }                  /* teal */

.cm-s-icecoder span.cm-header { color: #6a0d6a; }                  /* purple-pink */
.cm-s-icecoder span.cm-quote { color: #186718; }                   /* dark green */
.cm-s-icecoder span.cm-hr { color: #888; }                         /* mid-grey */
.cm-s-icecoder span.cm-link { color: #e1c76e; }                    /* yellow */
.cm-s-icecoder span.cm-error { color: #d00; }                      /* red */

.cm-s-icecoder .CodeMirror-cursor { border-left: 1px solid white; }
.cm-s-icecoder div.CodeMirror-selected { color: #fff; background: #037; }
.cm-s-icecoder .CodeMirror-gutters { background: #1d1d1b; min-width: 41px; border-right: 0; }
.cm-s-icecoder .CodeMirror-linenumber { color: #555; cursor: default; }
.cm-s-icecoder .CodeMirror-matchingbracket { color: #fff !important; background: #555 !important; }
.cm-s-icecoder .CodeMirror-activeline-background { background: #000; }
`;
var idea = `/**
    Name:       IDEA default theme
    From IntelliJ IDEA by JetBrains
 */

.cm-s-idea span.cm-meta { color: #808000; }
.cm-s-idea span.cm-number { color: #0000FF; }
.cm-s-idea span.cm-keyword { line-height: 1em; font-weight: bold; color: #000080; }
.cm-s-idea span.cm-atom { font-weight: bold; color: #000080; }
.cm-s-idea span.cm-def { color: #000000; }
.cm-s-idea span.cm-variable { color: black; }
.cm-s-idea span.cm-variable-2 { color: black; }
.cm-s-idea span.cm-variable-3, .cm-s-idea span.cm-type { color: black; }
.cm-s-idea span.cm-property { color: black; }
.cm-s-idea span.cm-operator { color: black; }
.cm-s-idea span.cm-comment { color: #808080; }
.cm-s-idea span.cm-string { color: #008000; }
.cm-s-idea span.cm-string-2 { color: #008000; }
.cm-s-idea span.cm-qualifier { color: #555; }
.cm-s-idea span.cm-error { color: #FF0000; }
.cm-s-idea span.cm-attribute { color: #0000FF; }
.cm-s-idea span.cm-tag { color: #000080; }
.cm-s-idea span.cm-link { color: #0000FF; }
.cm-s-idea .CodeMirror-activeline-background { background: #FFFAE3; }

.cm-s-idea span.cm-builtin { color: #30a; }
.cm-s-idea span.cm-bracket { color: #cc7; }
.cm-s-idea  { font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;}


.cm-s-idea .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }

.CodeMirror-hints.idea {
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  color: #616569;
  background-color: #ebf3fd !important;
}

.CodeMirror-hints.idea .CodeMirror-hint-active {
  background-color: #a2b8c9 !important;
  color: #5c6065 !important;
}`;
var isotope = `/*

    Name:       Isotope
    Author:     David Desandro / Jan T. Sott

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-isotope.CodeMirror {background: #000000; color: #e0e0e0;}
.cm-s-isotope div.CodeMirror-selected {background: #404040 !important;}
.cm-s-isotope .CodeMirror-gutters {background: #000000; border-right: 0px;}
.cm-s-isotope .CodeMirror-linenumber {color: #808080;}
.cm-s-isotope .CodeMirror-cursor {border-left: 1px solid #c0c0c0 !important;}

.cm-s-isotope span.cm-comment {color: #3300ff;}
.cm-s-isotope span.cm-atom {color: #cc00ff;}
.cm-s-isotope span.cm-number {color: #cc00ff;}

.cm-s-isotope span.cm-property, .cm-s-isotope span.cm-attribute {color: #33ff00;}
.cm-s-isotope span.cm-keyword {color: #ff0000;}
.cm-s-isotope span.cm-string {color: #ff0099;}

.cm-s-isotope span.cm-variable {color: #33ff00;}
.cm-s-isotope span.cm-variable-2 {color: #0066ff;}
.cm-s-isotope span.cm-def {color: #ff9900;}
.cm-s-isotope span.cm-error {background: #ff0000; color: #c0c0c0;}
.cm-s-isotope span.cm-bracket {color: #e0e0e0;}
.cm-s-isotope span.cm-tag {color: #ff0000;}
.cm-s-isotope span.cm-link {color: #cc00ff;}

.cm-s-isotope .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}
.cm-s-isotope .CodeMirror-activeline-background { background: #202020; }
`;
var juejin = `.cm-s-juejin.CodeMirror {
  background: #f8f9fa;
}
.cm-s-juejin .cm-header,
.cm-s-juejin .cm-def {
  color: #1ba2f0;
}
.cm-s-juejin .cm-comment {
  color: #009e9d;
}
.cm-s-juejin .cm-quote,
.cm-s-juejin .cm-link,
.cm-s-juejin .cm-strong,
.cm-s-juejin .cm-attribute {
  color: #fd7741;
}
.cm-s-juejin .cm-url,
.cm-s-juejin .cm-keyword,
.cm-s-juejin .cm-builtin {
  color: #bb51b8;
}
.cm-s-juejin .cm-hr {
  color: #909090;
}
.cm-s-juejin .cm-tag {
  color: #107000;
}
.cm-s-juejin .cm-variable-2 {
  color: #0050a0;
}
`;
var lesser_dark = `/*
http://lesscss.org/ dark theme
Ported to CodeMirror by Peter Kroon
*/
.cm-s-lesser-dark {
  line-height: 1.3em;
}
.cm-s-lesser-dark.CodeMirror { background: #262626; color: #EBEFE7; text-shadow: 0 -1px 1px #262626; }
.cm-s-lesser-dark div.CodeMirror-selected { background: #45443B; } /* 33322B*/
.cm-s-lesser-dark .CodeMirror-line::selection, .cm-s-lesser-dark .CodeMirror-line > span::selection, .cm-s-lesser-dark .CodeMirror-line > span > span::selection { background: rgba(69, 68, 59, .99); }
.cm-s-lesser-dark .CodeMirror-line::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(69, 68, 59, .99); }
.cm-s-lesser-dark .CodeMirror-cursor { border-left: 1px solid white; }
.cm-s-lesser-dark pre { padding: 0 8px; }/*editable code holder*/

.cm-s-lesser-dark.CodeMirror span.CodeMirror-matchingbracket { color: #7EFC7E; }/*65FC65*/

.cm-s-lesser-dark .CodeMirror-gutters { background: #262626; border-right:1px solid #aaa; }
.cm-s-lesser-dark .CodeMirror-guttermarker { color: #599eff; }
.cm-s-lesser-dark .CodeMirror-guttermarker-subtle { color: #777; }
.cm-s-lesser-dark .CodeMirror-linenumber { color: #777; }

.cm-s-lesser-dark span.cm-header { color: #a0a; }
.cm-s-lesser-dark span.cm-quote { color: #090; }
.cm-s-lesser-dark span.cm-keyword { color: #599eff; }
.cm-s-lesser-dark span.cm-atom { color: #C2B470; }
.cm-s-lesser-dark span.cm-number { color: #B35E4D; }
.cm-s-lesser-dark span.cm-def { color: white; }
.cm-s-lesser-dark span.cm-variable { color:#D9BF8C; }
.cm-s-lesser-dark span.cm-variable-2 { color: #669199; }
.cm-s-lesser-dark span.cm-variable-3, .cm-s-lesser-dark span.cm-type { color: white; }
.cm-s-lesser-dark span.cm-property { color: #92A75C; }
.cm-s-lesser-dark span.cm-operator { color: #92A75C; }
.cm-s-lesser-dark span.cm-comment { color: #666; }
.cm-s-lesser-dark span.cm-string { color: #BCD279; }
.cm-s-lesser-dark span.cm-string-2 { color: #f50; }
.cm-s-lesser-dark span.cm-meta { color: #738C73; }
.cm-s-lesser-dark span.cm-qualifier { color: #555; }
.cm-s-lesser-dark span.cm-builtin { color: #ff9e59; }
.cm-s-lesser-dark span.cm-bracket { color: #EBEFE7; }
.cm-s-lesser-dark span.cm-tag { color: #669199; }
.cm-s-lesser-dark span.cm-attribute { color: #81a4d5; }
.cm-s-lesser-dark span.cm-hr { color: #999; }
.cm-s-lesser-dark span.cm-link { color: #7070E6; }
.cm-s-lesser-dark span.cm-error { color: #9d1e15; }

.cm-s-lesser-dark .CodeMirror-activeline-background { background: #3C3A3A; }
.cm-s-lesser-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }
`;
var liquibyte = `.cm-s-liquibyte.CodeMirror {
	background-color: #000;
	color: #fff;
	line-height: 1.2em;
	font-size: 1em;
}
.cm-s-liquibyte .CodeMirror-focused .cm-matchhighlight {
	text-decoration: underline;
	text-decoration-color: #0f0;
	text-decoration-style: wavy;
}
.cm-s-liquibyte .cm-trailingspace {
	text-decoration: line-through;
	text-decoration-color: #f00;
	text-decoration-style: dotted;
}
.cm-s-liquibyte .cm-tab {
	text-decoration: line-through;
	text-decoration-color: #404040;
	text-decoration-style: dotted;
}
.cm-s-liquibyte .CodeMirror-gutters { background-color: #262626; border-right: 1px solid #505050; padding-right: 0.8em; }
.cm-s-liquibyte .CodeMirror-gutter-elt div { font-size: 1.2em; }
.cm-s-liquibyte .CodeMirror-guttermarker {  }
.cm-s-liquibyte .CodeMirror-guttermarker-subtle {  }
.cm-s-liquibyte .CodeMirror-linenumber { color: #606060; padding-left: 0; }
.cm-s-liquibyte .CodeMirror-cursor { border-left: 1px solid #eee; }

.cm-s-liquibyte span.cm-comment     { color: #008000; }
.cm-s-liquibyte span.cm-def         { color: #ffaf40; font-weight: bold; }
.cm-s-liquibyte span.cm-keyword     { color: #c080ff; font-weight: bold; }
.cm-s-liquibyte span.cm-builtin     { color: #ffaf40; font-weight: bold; }
.cm-s-liquibyte span.cm-variable    { color: #5967ff; font-weight: bold; }
.cm-s-liquibyte span.cm-string      { color: #ff8000; }
.cm-s-liquibyte span.cm-number      { color: #0f0; font-weight: bold; }
.cm-s-liquibyte span.cm-atom        { color: #bf3030; font-weight: bold; }

.cm-s-liquibyte span.cm-variable-2  { color: #007f7f; font-weight: bold; }
.cm-s-liquibyte span.cm-variable-3, .cm-s-liquibyte span.cm-type { color: #c080ff; font-weight: bold; }
.cm-s-liquibyte span.cm-property    { color: #999; font-weight: bold; }
.cm-s-liquibyte span.cm-operator    { color: #fff; }

.cm-s-liquibyte span.cm-meta        { color: #0f0; }
.cm-s-liquibyte span.cm-qualifier   { color: #fff700; font-weight: bold; }
.cm-s-liquibyte span.cm-bracket     { color: #cc7; }
.cm-s-liquibyte span.cm-tag         { color: #ff0; font-weight: bold; }
.cm-s-liquibyte span.cm-attribute   { color: #c080ff; font-weight: bold; }
.cm-s-liquibyte span.cm-error       { color: #f00; }

.cm-s-liquibyte div.CodeMirror-selected { background-color: rgba(255, 0, 0, 0.25); }

.cm-s-liquibyte span.cm-compilation { background-color: rgba(255, 255, 255, 0.12); }

.cm-s-liquibyte .CodeMirror-activeline-background { background-color: rgba(0, 255, 0, 0.15); }

/* Default styles for common addons */
.cm-s-liquibyte .CodeMirror span.CodeMirror-matchingbracket { color: #0f0; font-weight: bold; }
.cm-s-liquibyte .CodeMirror span.CodeMirror-nonmatchingbracket { color: #f00; font-weight: bold; }
.CodeMirror-matchingtag { background-color: rgba(150, 255, 0, .3); }
/* Scrollbars */
/* Simple */
.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div:hover, .cm-s-liquibyte div.CodeMirror-simplescroll-vertical div:hover {
	background-color: rgba(80, 80, 80, .7);
}
.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div, .cm-s-liquibyte div.CodeMirror-simplescroll-vertical div {
	background-color: rgba(80, 80, 80, .3);
	border: 1px solid #404040;
	border-radius: 5px;
}
.cm-s-liquibyte div.CodeMirror-simplescroll-vertical div {
	border-top: 1px solid #404040;
	border-bottom: 1px solid #404040;
}
.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div {
	border-left: 1px solid #404040;
	border-right: 1px solid #404040;
}
.cm-s-liquibyte div.CodeMirror-simplescroll-vertical {
	background-color: #262626;
}
.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal {
	background-color: #262626;
	border-top: 1px solid #404040;
}
/* Overlay */
.cm-s-liquibyte div.CodeMirror-overlayscroll-horizontal div, div.CodeMirror-overlayscroll-vertical div {
	background-color: #404040;
	border-radius: 5px;
}
.cm-s-liquibyte div.CodeMirror-overlayscroll-vertical div {
	border: 1px solid #404040;
}
.cm-s-liquibyte div.CodeMirror-overlayscroll-horizontal div {
	border: 1px solid #404040;
}
`;
var lucario = `/*
  Name:       lucario
  Author:     Raphael Amorim

  Original Lucario color scheme (https://github.com/raphamorim/lucario)
*/

.cm-s-lucario.CodeMirror, .cm-s-lucario .CodeMirror-gutters {
  background-color: #2b3e50 !important;
  color: #f8f8f2 !important;
  border: none;
}
.cm-s-lucario .CodeMirror-gutters { color: #2b3e50; }
.cm-s-lucario .CodeMirror-cursor { border-left: solid thin #E6C845; }
.cm-s-lucario .CodeMirror-linenumber { color: #f8f8f2; }
.cm-s-lucario .CodeMirror-selected { background: #243443; }
.cm-s-lucario .CodeMirror-line::selection, .cm-s-lucario .CodeMirror-line > span::selection, .cm-s-lucario .CodeMirror-line > span > span::selection { background: #243443; }
.cm-s-lucario .CodeMirror-line::-moz-selection, .cm-s-lucario .CodeMirror-line > span::-moz-selection, .cm-s-lucario .CodeMirror-line > span > span::-moz-selection { background: #243443; }
.cm-s-lucario span.cm-comment { color: #5c98cd; }
.cm-s-lucario span.cm-string, .cm-s-lucario span.cm-string-2 { color: #E6DB74; }
.cm-s-lucario span.cm-number { color: #ca94ff; }
.cm-s-lucario span.cm-variable { color: #f8f8f2; }
.cm-s-lucario span.cm-variable-2 { color: #f8f8f2; }
.cm-s-lucario span.cm-def { color: #72C05D; }
.cm-s-lucario span.cm-operator { color: #66D9EF; }
.cm-s-lucario span.cm-keyword { color: #ff6541; }
.cm-s-lucario span.cm-atom { color: #bd93f9; }
.cm-s-lucario span.cm-meta { color: #f8f8f2; }
.cm-s-lucario span.cm-tag { color: #ff6541; }
.cm-s-lucario span.cm-attribute { color: #66D9EF; }
.cm-s-lucario span.cm-qualifier { color: #72C05D; }
.cm-s-lucario span.cm-property { color: #f8f8f2; }
.cm-s-lucario span.cm-builtin { color: #72C05D; }
.cm-s-lucario span.cm-variable-3, .cm-s-lucario span.cm-type { color: #ffb86c; }

.cm-s-lucario .CodeMirror-activeline-background { background: #243443; }
.cm-s-lucario .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }
`;
var material_darker = `/*
  Name:       material
  Author:     Mattia Astorino (http://github.com/equinusocio)
  Website:    https://material-theme.site/
*/

.cm-s-material-darker.CodeMirror {
  background-color: #212121;
  color: #EEFFFF;
}

.cm-s-material-darker .CodeMirror-gutters {
  background: #212121;
  color: #545454;
  border: none;
}

.cm-s-material-darker .CodeMirror-guttermarker,
.cm-s-material-darker .CodeMirror-guttermarker-subtle,
.cm-s-material-darker .CodeMirror-linenumber {
  color: #545454;
}

.cm-s-material-darker .CodeMirror-cursor {
  border-left: 1px solid #FFCC00;
}

.cm-s-material-darker div.CodeMirror-selected {
  background: rgba(97, 97, 97, 0.2);
}

.cm-s-material-darker.CodeMirror-focused div.CodeMirror-selected {
  background: rgba(97, 97, 97, 0.2);
}

.cm-s-material-darker .CodeMirror-line::selection,
.cm-s-material-darker .CodeMirror-line>span::selection,
.cm-s-material-darker .CodeMirror-line>span>span::selection {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material-darker .CodeMirror-line::-moz-selection,
.cm-s-material-darker .CodeMirror-line>span::-moz-selection,
.cm-s-material-darker .CodeMirror-line>span>span::-moz-selection {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material-darker .CodeMirror-activeline-background {
  background: rgba(0, 0, 0, 0.5);
}

.cm-s-material-darker .cm-keyword {
  color: #C792EA;
}

.cm-s-material-darker .cm-operator {
  color: #89DDFF;
}

.cm-s-material-darker .cm-variable-2 {
  color: #EEFFFF;
}

.cm-s-material-darker .cm-variable-3,
.cm-s-material-darker .cm-type {
  color: #f07178;
}

.cm-s-material-darker .cm-builtin {
  color: #FFCB6B;
}

.cm-s-material-darker .cm-atom {
  color: #F78C6C;
}

.cm-s-material-darker .cm-number {
  color: #FF5370;
}

.cm-s-material-darker .cm-def {
  color: #82AAFF;
}

.cm-s-material-darker .cm-string {
  color: #C3E88D;
}

.cm-s-material-darker .cm-string-2 {
  color: #f07178;
}

.cm-s-material-darker .cm-comment {
  color: #545454;
}

.cm-s-material-darker .cm-variable {
  color: #f07178;
}

.cm-s-material-darker .cm-tag {
  color: #FF5370;
}

.cm-s-material-darker .cm-meta {
  color: #FFCB6B;
}

.cm-s-material-darker .cm-attribute {
  color: #C792EA;
}

.cm-s-material-darker .cm-property {
  color: #C792EA;
}

.cm-s-material-darker .cm-qualifier {
  color: #DECB6B;
}

.cm-s-material-darker .cm-variable-3,
.cm-s-material-darker .cm-type {
  color: #DECB6B;
}


.cm-s-material-darker .cm-error {
  color: rgba(255, 255, 255, 1.0);
  background-color: #FF5370;
}

.cm-s-material-darker .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}`;
var material_ocean = `/*
  Name:       material
  Author:     Mattia Astorino (http://github.com/equinusocio)
  Website:    https://material-theme.site/
*/

.cm-s-material-ocean.CodeMirror {
  background-color: #0F111A;
  color: #8F93A2;
}

.cm-s-material-ocean .CodeMirror-gutters {
  background: #0F111A;
  color: #464B5D;
  border: none;
}

.cm-s-material-ocean .CodeMirror-guttermarker,
.cm-s-material-ocean .CodeMirror-guttermarker-subtle,
.cm-s-material-ocean .CodeMirror-linenumber {
  color: #464B5D;
}

.cm-s-material-ocean .CodeMirror-cursor {
  border-left: 1px solid #FFCC00;
}
.cm-s-material-ocean.cm-fat-cursor .CodeMirror-cursor {
  background-color: #a2a8a175 !important;
}
.cm-s-material-ocean .cm-animate-fat-cursor {
  background-color: #a2a8a175 !important;
}

.cm-s-material-ocean div.CodeMirror-selected {
  background: rgba(113, 124, 180, 0.2);
}

.cm-s-material-ocean.CodeMirror-focused div.CodeMirror-selected {
  background: rgba(113, 124, 180, 0.2);
}

.cm-s-material-ocean .CodeMirror-line::selection,
.cm-s-material-ocean .CodeMirror-line>span::selection,
.cm-s-material-ocean .CodeMirror-line>span>span::selection {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material-ocean .CodeMirror-line::-moz-selection,
.cm-s-material-ocean .CodeMirror-line>span::-moz-selection,
.cm-s-material-ocean .CodeMirror-line>span>span::-moz-selection {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material-ocean .CodeMirror-activeline-background {
  background: rgba(0, 0, 0, 0.5);
}

.cm-s-material-ocean .cm-keyword {
  color: #C792EA;
}

.cm-s-material-ocean .cm-operator {
  color: #89DDFF;
}

.cm-s-material-ocean .cm-variable-2 {
  color: #EEFFFF;
}

.cm-s-material-ocean .cm-variable-3,
.cm-s-material-ocean .cm-type {
  color: #f07178;
}

.cm-s-material-ocean .cm-builtin {
  color: #FFCB6B;
}

.cm-s-material-ocean .cm-atom {
  color: #F78C6C;
}

.cm-s-material-ocean .cm-number {
  color: #FF5370;
}

.cm-s-material-ocean .cm-def {
  color: #82AAFF;
}

.cm-s-material-ocean .cm-string {
  color: #C3E88D;
}

.cm-s-material-ocean .cm-string-2 {
  color: #f07178;
}

.cm-s-material-ocean .cm-comment {
  color: #464B5D;
}

.cm-s-material-ocean .cm-variable {
  color: #f07178;
}

.cm-s-material-ocean .cm-tag {
  color: #FF5370;
}

.cm-s-material-ocean .cm-meta {
  color: #FFCB6B;
}

.cm-s-material-ocean .cm-attribute {
  color: #C792EA;
}

.cm-s-material-ocean .cm-property {
  color: #C792EA;
}

.cm-s-material-ocean .cm-qualifier {
  color: #DECB6B;
}

.cm-s-material-ocean .cm-variable-3,
.cm-s-material-ocean .cm-type {
  color: #DECB6B;
}


.cm-s-material-ocean .cm-error {
  color: rgba(255, 255, 255, 1.0);
  background-color: #FF5370;
}

.cm-s-material-ocean .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
`;
var material_palenight = `/*
  Name:       material
  Author:     Mattia Astorino (http://github.com/equinusocio)
  Website:    https://material-theme.site/
*/

.cm-s-material-palenight.CodeMirror {
  background-color: #292D3E;
  color: #A6ACCD;
}

.cm-s-material-palenight .CodeMirror-gutters {
  background: #292D3E;
  color: #676E95;
  border: none;
}

.cm-s-material-palenight .CodeMirror-guttermarker,
.cm-s-material-palenight .CodeMirror-guttermarker-subtle,
.cm-s-material-palenight .CodeMirror-linenumber {
  color: #676E95;
}

.cm-s-material-palenight .CodeMirror-cursor {
  border-left: 1px solid #FFCC00;
}
.cm-s-material-palenight.cm-fat-cursor .CodeMirror-cursor {
  background-color: #607c8b80 !important;
}
.cm-s-material-palenight .cm-animate-fat-cursor {
  background-color: #607c8b80 !important;
}

.cm-s-material-palenight div.CodeMirror-selected {
  background: rgba(113, 124, 180, 0.2);
}

.cm-s-material-palenight.CodeMirror-focused div.CodeMirror-selected {
  background: rgba(113, 124, 180, 0.2);
}

.cm-s-material-palenight .CodeMirror-line::selection,
.cm-s-material-palenight .CodeMirror-line>span::selection,
.cm-s-material-palenight .CodeMirror-line>span>span::selection {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material-palenight .CodeMirror-line::-moz-selection,
.cm-s-material-palenight .CodeMirror-line>span::-moz-selection,
.cm-s-material-palenight .CodeMirror-line>span>span::-moz-selection {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material-palenight .CodeMirror-activeline-background {
  background: rgba(0, 0, 0, 0.5);
}

.cm-s-material-palenight .cm-keyword {
  color: #C792EA;
}

.cm-s-material-palenight .cm-operator {
  color: #89DDFF;
}

.cm-s-material-palenight .cm-variable-2 {
  color: #EEFFFF;
}

.cm-s-material-palenight .cm-variable-3,
.cm-s-material-palenight .cm-type {
  color: #f07178;
}

.cm-s-material-palenight .cm-builtin {
  color: #FFCB6B;
}

.cm-s-material-palenight .cm-atom {
  color: #F78C6C;
}

.cm-s-material-palenight .cm-number {
  color: #FF5370;
}

.cm-s-material-palenight .cm-def {
  color: #82AAFF;
}

.cm-s-material-palenight .cm-string {
  color: #C3E88D;
}

.cm-s-material-palenight .cm-string-2 {
  color: #f07178;
}

.cm-s-material-palenight .cm-comment {
  color: #676E95;
}

.cm-s-material-palenight .cm-variable {
  color: #f07178;
}

.cm-s-material-palenight .cm-tag {
  color: #FF5370;
}

.cm-s-material-palenight .cm-meta {
  color: #FFCB6B;
}

.cm-s-material-palenight .cm-attribute {
  color: #C792EA;
}

.cm-s-material-palenight .cm-property {
  color: #C792EA;
}

.cm-s-material-palenight .cm-qualifier {
  color: #DECB6B;
}

.cm-s-material-palenight .cm-variable-3,
.cm-s-material-palenight .cm-type {
  color: #DECB6B;
}


.cm-s-material-palenight .cm-error {
  color: rgba(255, 255, 255, 1.0);
  background-color: #FF5370;
}

.cm-s-material-palenight .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
`;
var material = `/*
  Name:       material
  Author:     Mattia Astorino (http://github.com/equinusocio)
  Website:    https://material-theme.site/
*/

.cm-s-material.CodeMirror {
  background-color: #263238;
  color: #EEFFFF;
}

.cm-s-material .CodeMirror-gutters {
  background: #263238;
  color: #546E7A;
  border: none;
}

.cm-s-material .CodeMirror-guttermarker,
.cm-s-material .CodeMirror-guttermarker-subtle,
.cm-s-material .CodeMirror-linenumber {
  color: #546E7A;
}

.cm-s-material .CodeMirror-cursor {
  border-left: 1px solid #FFCC00;
}
.cm-s-material.cm-fat-cursor .CodeMirror-cursor {
  background-color: #5d6d5c80 !important;
}
.cm-s-material .cm-animate-fat-cursor {
  background-color: #5d6d5c80 !important;
}

.cm-s-material div.CodeMirror-selected {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material.CodeMirror-focused div.CodeMirror-selected {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material .CodeMirror-line::selection,
.cm-s-material .CodeMirror-line>span::selection,
.cm-s-material .CodeMirror-line>span>span::selection {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material .CodeMirror-line::-moz-selection,
.cm-s-material .CodeMirror-line>span::-moz-selection,
.cm-s-material .CodeMirror-line>span>span::-moz-selection {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material .CodeMirror-activeline-background {
  background: rgba(0, 0, 0, 0.5);
}

.cm-s-material .cm-keyword {
  color: #C792EA;
}

.cm-s-material .cm-operator {
  color: #89DDFF;
}

.cm-s-material .cm-variable-2 {
  color: #EEFFFF;
}

.cm-s-material .cm-variable-3,
.cm-s-material .cm-type {
  color: #f07178;
}

.cm-s-material .cm-builtin {
  color: #FFCB6B;
}

.cm-s-material .cm-atom {
  color: #F78C6C;
}

.cm-s-material .cm-number {
  color: #FF5370;
}

.cm-s-material .cm-def {
  color: #82AAFF;
}

.cm-s-material .cm-string {
  color: #C3E88D;
}

.cm-s-material .cm-string-2 {
  color: #f07178;
}

.cm-s-material .cm-comment {
  color: #546E7A;
}

.cm-s-material .cm-variable {
  color: #f07178;
}

.cm-s-material .cm-tag {
  color: #FF5370;
}

.cm-s-material .cm-meta {
  color: #FFCB6B;
}

.cm-s-material .cm-attribute {
  color: #C792EA;
}

.cm-s-material .cm-property {
  color: #C792EA;
}

.cm-s-material .cm-qualifier {
  color: #DECB6B;
}

.cm-s-material .cm-variable-3,
.cm-s-material .cm-type {
  color: #DECB6B;
}


.cm-s-material .cm-error {
  color: rgba(255, 255, 255, 1.0);
  background-color: #FF5370;
}

.cm-s-material .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
`;
var mbo = `/****************************************************************/
/*   Based on mbonaci's Brackets mbo theme                      */
/*   https://github.com/mbonaci/global/blob/master/Mbo.tmTheme  */
/*   Create your own: http://tmtheme-editor.herokuapp.com       */
/****************************************************************/

.cm-s-mbo.CodeMirror { background: #2c2c2c; color: #ffffec; }
.cm-s-mbo div.CodeMirror-selected { background: #716C62; }
.cm-s-mbo .CodeMirror-line::selection, .cm-s-mbo .CodeMirror-line > span::selection, .cm-s-mbo .CodeMirror-line > span > span::selection { background: rgba(113, 108, 98, .99); }
.cm-s-mbo .CodeMirror-line::-moz-selection, .cm-s-mbo .CodeMirror-line > span::-moz-selection, .cm-s-mbo .CodeMirror-line > span > span::-moz-selection { background: rgba(113, 108, 98, .99); }
.cm-s-mbo .CodeMirror-gutters { background: #4e4e4e; border-right: 0px; }
.cm-s-mbo .CodeMirror-guttermarker { color: white; }
.cm-s-mbo .CodeMirror-guttermarker-subtle { color: grey; }
.cm-s-mbo .CodeMirror-linenumber { color: #dadada; }
.cm-s-mbo .CodeMirror-cursor { border-left: 1px solid #ffffec; }

.cm-s-mbo span.cm-comment { color: #95958a; }
.cm-s-mbo span.cm-atom { color: #00a8c6; }
.cm-s-mbo span.cm-number { color: #00a8c6; }

.cm-s-mbo span.cm-property, .cm-s-mbo span.cm-attribute { color: #9ddfe9; }
.cm-s-mbo span.cm-keyword { color: #ffb928; }
.cm-s-mbo span.cm-string { color: #ffcf6c; }
.cm-s-mbo span.cm-string.cm-property { color: #ffffec; }

.cm-s-mbo span.cm-variable { color: #ffffec; }
.cm-s-mbo span.cm-variable-2 { color: #00a8c6; }
.cm-s-mbo span.cm-def { color: #ffffec; }
.cm-s-mbo span.cm-bracket { color: #fffffc; font-weight: bold; }
.cm-s-mbo span.cm-tag { color: #9ddfe9; }
.cm-s-mbo span.cm-link { color: #f54b07; }
.cm-s-mbo span.cm-error { border-bottom: #636363; color: #ffffec; }
.cm-s-mbo span.cm-qualifier { color: #ffffec; }

.cm-s-mbo .CodeMirror-activeline-background { background: #494b41; }
.cm-s-mbo .CodeMirror-matchingbracket { color: #ffb928 !important; }
.cm-s-mbo .CodeMirror-matchingtag { background: rgba(255, 255, 255, .37); }
`;
var mdn_like = `/*
  MDN-LIKE Theme - Mozilla
  Ported to CodeMirror by Peter Kroon <plakroon@gmail.com>
  Report bugs/issues here: https://github.com/codemirror/CodeMirror/issues
  GitHub: @peterkroon

  The mdn-like theme is inspired on the displayed code examples at: https://developer.mozilla.org/en-US/docs/Web/CSS/animation

*/
.cm-s-mdn-like.CodeMirror { color: #999; background-color: #fff; }
.cm-s-mdn-like div.CodeMirror-selected { background: #cfc; }
.cm-s-mdn-like .CodeMirror-line::selection, .cm-s-mdn-like .CodeMirror-line > span::selection, .cm-s-mdn-like .CodeMirror-line > span > span::selection { background: #cfc; }
.cm-s-mdn-like .CodeMirror-line::-moz-selection, .cm-s-mdn-like .CodeMirror-line > span::-moz-selection, .cm-s-mdn-like .CodeMirror-line > span > span::-moz-selection { background: #cfc; }

.cm-s-mdn-like .CodeMirror-gutters { background: #f8f8f8; border-left: 6px solid rgba(0,83,159,0.65); color: #333; }
.cm-s-mdn-like .CodeMirror-linenumber { color: #aaa; padding-left: 8px; }
.cm-s-mdn-like .CodeMirror-cursor { border-left: 2px solid #222; }

.cm-s-mdn-like .cm-keyword { color: #6262FF; }
.cm-s-mdn-like .cm-atom { color: #F90; }
.cm-s-mdn-like .cm-number { color:  #ca7841; }
.cm-s-mdn-like .cm-def { color: #8DA6CE; }
.cm-s-mdn-like span.cm-variable-2, .cm-s-mdn-like span.cm-tag { color: #690; }
.cm-s-mdn-like span.cm-variable-3, .cm-s-mdn-like span.cm-def, .cm-s-mdn-like span.cm-type { color: #07a; }

.cm-s-mdn-like .cm-variable { color: #07a; }
.cm-s-mdn-like .cm-property { color: #905; }
.cm-s-mdn-like .cm-qualifier { color: #690; }

.cm-s-mdn-like .cm-operator { color: #cda869; }
.cm-s-mdn-like .cm-comment { color:#777; font-weight:normal; }
.cm-s-mdn-like .cm-string { color:#07a; font-style:italic; }
.cm-s-mdn-like .cm-string-2 { color:#bd6b18; } /*?*/
.cm-s-mdn-like .cm-meta { color: #000; } /*?*/
.cm-s-mdn-like .cm-builtin { color: #9B7536; } /*?*/
.cm-s-mdn-like .cm-tag { color: #997643; }
.cm-s-mdn-like .cm-attribute { color: #d6bb6d; } /*?*/
.cm-s-mdn-like .cm-header { color: #FF6400; }
.cm-s-mdn-like .cm-hr { color: #AEAEAE; }
.cm-s-mdn-like .cm-link { color:#ad9361; font-style:italic; text-decoration:none; }
.cm-s-mdn-like .cm-error { border-bottom: 1px solid red; }

div.cm-s-mdn-like .CodeMirror-activeline-background { background: #efefff; }
div.cm-s-mdn-like span.CodeMirror-matchingbracket { outline:1px solid grey; color: inherit; }

.cm-s-mdn-like.CodeMirror { background-image: url(data:image/png;base64,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); }
`;
var midnight = `/* Based on the theme at http://bonsaiden.github.com/JavaScript-Garden */

/*<!--activeline-->*/
.cm-s-midnight .CodeMirror-activeline-background { background: #253540; }

.cm-s-midnight.CodeMirror {
    background: #0F192A;
    color: #D1EDFF;
}

.cm-s-midnight div.CodeMirror-selected { background: #314D67; }
.cm-s-midnight .CodeMirror-line::selection, .cm-s-midnight .CodeMirror-line > span::selection, .cm-s-midnight .CodeMirror-line > span > span::selection { background: rgba(49, 77, 103, .99); }
.cm-s-midnight .CodeMirror-line::-moz-selection, .cm-s-midnight .CodeMirror-line > span::-moz-selection, .cm-s-midnight .CodeMirror-line > span > span::-moz-selection { background: rgba(49, 77, 103, .99); }
.cm-s-midnight .CodeMirror-gutters { background: #0F192A; border-right: 1px solid; }
.cm-s-midnight .CodeMirror-guttermarker { color: white; }
.cm-s-midnight .CodeMirror-guttermarker-subtle { color: #d0d0d0; }
.cm-s-midnight .CodeMirror-linenumber { color: #D0D0D0; }
.cm-s-midnight .CodeMirror-cursor { border-left: 1px solid #F8F8F0; }

.cm-s-midnight span.cm-comment { color: #428BDD; }
.cm-s-midnight span.cm-atom { color: #AE81FF; }
.cm-s-midnight span.cm-number { color: #D1EDFF; }

.cm-s-midnight span.cm-property, .cm-s-midnight span.cm-attribute { color: #A6E22E; }
.cm-s-midnight span.cm-keyword { color: #E83737; }
.cm-s-midnight span.cm-string { color: #1DC116; }

.cm-s-midnight span.cm-variable { color: #FFAA3E; }
.cm-s-midnight span.cm-variable-2 { color: #FFAA3E; }
.cm-s-midnight span.cm-def { color: #4DD; }
.cm-s-midnight span.cm-bracket { color: #D1EDFF; }
.cm-s-midnight span.cm-tag { color: #449; }
.cm-s-midnight span.cm-link { color: #AE81FF; }
.cm-s-midnight span.cm-error { background: #F92672; color: #F8F8F0; }

.cm-s-midnight .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
`;
var monokai = `/* Based on Sublime Text's Monokai theme */

.cm-s-monokai.CodeMirror { background: #272822; color: #f8f8f2; }
.cm-s-monokai div.CodeMirror-selected { background: #49483E; }
.cm-s-monokai .CodeMirror-line::selection, .cm-s-monokai .CodeMirror-line > span::selection, .cm-s-monokai .CodeMirror-line > span > span::selection { background: rgba(73, 72, 62, .99); }
.cm-s-monokai .CodeMirror-line::-moz-selection, .cm-s-monokai .CodeMirror-line > span::-moz-selection, .cm-s-monokai .CodeMirror-line > span > span::-moz-selection { background: rgba(73, 72, 62, .99); }
.cm-s-monokai .CodeMirror-gutters { background: #272822; border-right: 0px; }
.cm-s-monokai .CodeMirror-guttermarker { color: white; }
.cm-s-monokai .CodeMirror-guttermarker-subtle { color: #d0d0d0; }
.cm-s-monokai .CodeMirror-linenumber { color: #d0d0d0; }
.cm-s-monokai .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }

.cm-s-monokai span.cm-comment { color: #75715e; }
.cm-s-monokai span.cm-atom { color: #ae81ff; }
.cm-s-monokai span.cm-number { color: #ae81ff; }

.cm-s-monokai span.cm-comment.cm-attribute { color: #97b757; }
.cm-s-monokai span.cm-comment.cm-def { color: #bc9262; }
.cm-s-monokai span.cm-comment.cm-tag { color: #bc6283; }
.cm-s-monokai span.cm-comment.cm-type { color: #5998a6; }

.cm-s-monokai span.cm-property, .cm-s-monokai span.cm-attribute { color: #a6e22e; }
.cm-s-monokai span.cm-keyword { color: #f92672; }
.cm-s-monokai span.cm-builtin { color: #66d9ef; }
.cm-s-monokai span.cm-string { color: #e6db74; }

.cm-s-monokai span.cm-variable { color: #f8f8f2; }
.cm-s-monokai span.cm-variable-2 { color: #9effff; }
.cm-s-monokai span.cm-variable-3, .cm-s-monokai span.cm-type { color: #66d9ef; }
.cm-s-monokai span.cm-def { color: #fd971f; }
.cm-s-monokai span.cm-bracket { color: #f8f8f2; }
.cm-s-monokai span.cm-tag { color: #f92672; }
.cm-s-monokai span.cm-header { color: #ae81ff; }
.cm-s-monokai span.cm-link { color: #ae81ff; }
.cm-s-monokai span.cm-error { background: #f92672; color: #f8f8f0; }

.cm-s-monokai .CodeMirror-activeline-background { background: #373831; }
.cm-s-monokai .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
`;
var moxer = `/*
  Name:       Moxer Theme
  Author:     Mattia Astorino (http://github.com/equinusocio)
  Website:    https://github.com/moxer-theme/moxer-code
*/

.cm-s-moxer.CodeMirror {
  background-color: #090A0F;
  color: #8E95B4;
  line-height: 1.8;
}

.cm-s-moxer .CodeMirror-gutters {
  background: #090A0F;
  color: #35394B;
  border: none;
}

.cm-s-moxer .CodeMirror-guttermarker,
.cm-s-moxer .CodeMirror-guttermarker-subtle,
.cm-s-moxer .CodeMirror-linenumber {
  color: #35394B;
}


.cm-s-moxer .CodeMirror-cursor {
  border-left: 1px solid #FFCC00;
}

.cm-s-moxer div.CodeMirror-selected {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-moxer.CodeMirror-focused div.CodeMirror-selected {
  background: #212431;
}

.cm-s-moxer .CodeMirror-line::selection,
.cm-s-moxer .CodeMirror-line>span::selection,
.cm-s-moxer .CodeMirror-line>span>span::selection {
  background: #212431;
}

.cm-s-moxer .CodeMirror-line::-moz-selection,
.cm-s-moxer .CodeMirror-line>span::-moz-selection,
.cm-s-moxer .CodeMirror-line>span>span::-moz-selection {
  background: #212431;
}

.cm-s-moxer .CodeMirror-activeline-background,
.cm-s-moxer .CodeMirror-activeline-gutter .CodeMirror-linenumber {
  background: rgba(33, 36, 49, 0.5);
}

.cm-s-moxer .cm-keyword {
  color: #D46C6C;
}

.cm-s-moxer .cm-operator {
  color: #D46C6C;
}

.cm-s-moxer .cm-variable-2 {
  color: #81C5DA;
}


.cm-s-moxer .cm-variable-3,
.cm-s-moxer .cm-type {
  color: #f07178;
}

.cm-s-moxer .cm-builtin {
  color: #FFCB6B;
}

.cm-s-moxer .cm-atom {
  color: #A99BE2;
}

.cm-s-moxer .cm-number {
  color: #7CA4C0;
}

.cm-s-moxer .cm-def {
  color: #F5DFA5;
}

.cm-s-moxer .CodeMirror-line .cm-def ~ .cm-def {
  color: #81C5DA;
}

.cm-s-moxer .cm-string {
  color: #B2E4AE;
}

.cm-s-moxer .cm-string-2 {
  color: #f07178;
}

.cm-s-moxer .cm-comment {
  color: #3F445A;
}

.cm-s-moxer .cm-variable {
  color: #8E95B4;
}

.cm-s-moxer .cm-tag {
  color: #FF5370;
}

.cm-s-moxer .cm-meta {
  color: #FFCB6B;
}

.cm-s-moxer .cm-attribute {
  color: #C792EA;
}

.cm-s-moxer .cm-property {
  color: #81C5DA;
}

.cm-s-moxer .cm-qualifier {
  color: #DECB6B;
}

.cm-s-moxer .cm-variable-3,
.cm-s-moxer .cm-type {
  color: #DECB6B;
}


.cm-s-moxer .cm-error {
  color: rgba(255, 255, 255, 1.0);
  background-color: #FF5370;
}

.cm-s-moxer .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}`;
var neat = `.cm-s-neat span.cm-comment { color: #a86; }
.cm-s-neat span.cm-keyword { line-height: 1em; font-weight: bold; color: blue; }
.cm-s-neat span.cm-string { color: #a22; }
.cm-s-neat span.cm-builtin { line-height: 1em; font-weight: bold; color: #077; }
.cm-s-neat span.cm-special { line-height: 1em; font-weight: bold; color: #0aa; }
.cm-s-neat span.cm-variable { color: black; }
.cm-s-neat span.cm-number, .cm-s-neat span.cm-atom { color: #3a3; }
.cm-s-neat span.cm-meta { color: #555; }
.cm-s-neat span.cm-link { color: #3a3; }

.cm-s-neat .CodeMirror-activeline-background { background: #e8f2ff; }
.cm-s-neat .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }
`;
var neo = `/* neo theme for codemirror */

/* Color scheme */

.cm-s-neo.CodeMirror {
  background-color:#ffffff;
  color:#2e383c;
  line-height:1.4375;
}
.cm-s-neo .cm-comment { color:#75787b; }
.cm-s-neo .cm-keyword, .cm-s-neo .cm-property { color:#1d75b3; }
.cm-s-neo .cm-atom,.cm-s-neo .cm-number { color:#75438a; }
.cm-s-neo .cm-node,.cm-s-neo .cm-tag { color:#9c3328; }
.cm-s-neo .cm-string { color:#b35e14; }
.cm-s-neo .cm-variable,.cm-s-neo .cm-qualifier { color:#047d65; }


/* Editor styling */

.cm-s-neo pre {
  padding:0;
}

.cm-s-neo .CodeMirror-gutters {
  border:none;
  border-right:10px solid transparent;
  background-color:transparent;
}

.cm-s-neo .CodeMirror-linenumber {
  padding:0;
  color:#e0e2e5;
}

.cm-s-neo .CodeMirror-guttermarker { color: #1d75b3; }
.cm-s-neo .CodeMirror-guttermarker-subtle { color: #e0e2e5; }

.cm-s-neo .CodeMirror-cursor {
  width: auto;
  border: 0;
  background: rgba(155,157,162,0.37);
  z-index: 1;
}
`;
var night = `/* Loosely based on the Midnight Textmate theme */

.cm-s-night.CodeMirror { background: #0a001f; color: #f8f8f8; }
.cm-s-night div.CodeMirror-selected { background: #447; }
.cm-s-night .CodeMirror-line::selection, .cm-s-night .CodeMirror-line > span::selection, .cm-s-night .CodeMirror-line > span > span::selection { background: rgba(68, 68, 119, .99); }
.cm-s-night .CodeMirror-line::-moz-selection, .cm-s-night .CodeMirror-line > span::-moz-selection, .cm-s-night .CodeMirror-line > span > span::-moz-selection { background: rgba(68, 68, 119, .99); }
.cm-s-night .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }
.cm-s-night .CodeMirror-guttermarker { color: white; }
.cm-s-night .CodeMirror-guttermarker-subtle { color: #bbb; }
.cm-s-night .CodeMirror-linenumber { color: #f8f8f8; }
.cm-s-night .CodeMirror-cursor { border-left: 1px solid white; }

.cm-s-night span.cm-comment { color: #8900d1; }
.cm-s-night span.cm-atom { color: #845dc4; }
.cm-s-night span.cm-number, .cm-s-night span.cm-attribute { color: #ffd500; }
.cm-s-night span.cm-keyword { color: #599eff; }
.cm-s-night span.cm-string { color: #37f14a; }
.cm-s-night span.cm-meta { color: #7678e2; }
.cm-s-night span.cm-variable-2, .cm-s-night span.cm-tag { color: #99b2ff; }
.cm-s-night span.cm-variable-3, .cm-s-night span.cm-def, .cm-s-night span.cm-type { color: white; }
.cm-s-night span.cm-bracket { color: #8da6ce; }
.cm-s-night span.cm-builtin, .cm-s-night span.cm-special { color: #ff9e59; }
.cm-s-night span.cm-link { color: #845dc4; }
.cm-s-night span.cm-error { color: #9d1e15; }

.cm-s-night .CodeMirror-activeline-background { background: #1C005A; }
.cm-s-night .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }
`;
var nord = `/* Based on arcticicestudio's Nord theme */
/* https://github.com/arcticicestudio/nord */

.cm-s-nord.CodeMirror { background: #2e3440; color: #d8dee9; }
.cm-s-nord div.CodeMirror-selected { background: #434c5e; }
.cm-s-nord .CodeMirror-line::selection, .cm-s-nord .CodeMirror-line > span::selection, .cm-s-nord .CodeMirror-line > span > span::selection { background: #3b4252; }
.cm-s-nord .CodeMirror-line::-moz-selection, .cm-s-nord .CodeMirror-line > span::-moz-selection, .cm-s-nord .CodeMirror-line > span > span::-moz-selection { background: #3b4252; }
.cm-s-nord .CodeMirror-gutters { background: #2e3440; border-right: 0px; }
.cm-s-nord .CodeMirror-guttermarker { color: #4c566a; }
.cm-s-nord .CodeMirror-guttermarker-subtle { color: #4c566a; }
.cm-s-nord .CodeMirror-linenumber { color: #4c566a; }
.cm-s-nord .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }

.cm-s-nord span.cm-comment { color: #4c566a; }
.cm-s-nord span.cm-atom { color: #b48ead; }
.cm-s-nord span.cm-number { color: #b48ead; }

.cm-s-nord span.cm-comment.cm-attribute { color: #97b757; }
.cm-s-nord span.cm-comment.cm-def { color: #bc9262; }
.cm-s-nord span.cm-comment.cm-tag { color: #bc6283; }
.cm-s-nord span.cm-comment.cm-type { color: #5998a6; }

.cm-s-nord span.cm-property, .cm-s-nord span.cm-attribute { color: #8FBCBB; }
.cm-s-nord span.cm-keyword { color: #81A1C1; }
.cm-s-nord span.cm-builtin { color: #81A1C1; }
.cm-s-nord span.cm-string { color: #A3BE8C; }

.cm-s-nord span.cm-variable { color: #d8dee9; }
.cm-s-nord span.cm-variable-2 { color: #d8dee9; }
.cm-s-nord span.cm-variable-3, .cm-s-nord span.cm-type { color: #d8dee9; }
.cm-s-nord span.cm-def { color: #8FBCBB; }
.cm-s-nord span.cm-bracket { color: #81A1C1; }
.cm-s-nord span.cm-tag { color: #bf616a; }
.cm-s-nord span.cm-header { color: #b48ead; }
.cm-s-nord span.cm-link { color: #b48ead; }
.cm-s-nord span.cm-error { background: #bf616a; color: #f8f8f0; }

.cm-s-nord .CodeMirror-activeline-background { background: #3b4252; }
.cm-s-nord .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
`;
var oceanic_next = `/*

    Name:       oceanic-next
    Author:     Filype Pereira (https://github.com/fpereira1)

    Original oceanic-next color scheme by Dmitri Voronianski (https://github.com/voronianski/oceanic-next-color-scheme)

*/

.cm-s-oceanic-next.CodeMirror { background: #304148; color: #f8f8f2; }
.cm-s-oceanic-next div.CodeMirror-selected { background: rgba(101, 115, 126, 0.33); }
.cm-s-oceanic-next .CodeMirror-line::selection, .cm-s-oceanic-next .CodeMirror-line > span::selection, .cm-s-oceanic-next .CodeMirror-line > span > span::selection { background: rgba(101, 115, 126, 0.33); }
.cm-s-oceanic-next .CodeMirror-line::-moz-selection, .cm-s-oceanic-next .CodeMirror-line > span::-moz-selection, .cm-s-oceanic-next .CodeMirror-line > span > span::-moz-selection { background: rgba(101, 115, 126, 0.33); }
.cm-s-oceanic-next .CodeMirror-gutters { background: #304148; border-right: 10px; }
.cm-s-oceanic-next .CodeMirror-guttermarker { color: white; }
.cm-s-oceanic-next .CodeMirror-guttermarker-subtle { color: #d0d0d0; }
.cm-s-oceanic-next .CodeMirror-linenumber { color: #d0d0d0; }
.cm-s-oceanic-next .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }
.cm-s-oceanic-next.cm-fat-cursor .CodeMirror-cursor { background-color: #a2a8a175 !important; }
.cm-s-oceanic-next .cm-animate-fat-cursor { background-color: #a2a8a175 !important; }

.cm-s-oceanic-next span.cm-comment { color: #65737E; }
.cm-s-oceanic-next span.cm-atom { color: #C594C5; }
.cm-s-oceanic-next span.cm-number { color: #F99157; }

.cm-s-oceanic-next span.cm-property { color: #99C794; }
.cm-s-oceanic-next span.cm-attribute,
.cm-s-oceanic-next span.cm-keyword { color: #C594C5; }
.cm-s-oceanic-next span.cm-builtin { color: #66d9ef; }
.cm-s-oceanic-next span.cm-string { color: #99C794; }

.cm-s-oceanic-next span.cm-variable,
.cm-s-oceanic-next span.cm-variable-2,
.cm-s-oceanic-next span.cm-variable-3 { color: #f8f8f2; }
.cm-s-oceanic-next span.cm-def { color: #6699CC; }
.cm-s-oceanic-next span.cm-bracket { color: #5FB3B3; }
.cm-s-oceanic-next span.cm-tag { color: #C594C5; }
.cm-s-oceanic-next span.cm-header { color: #C594C5; }
.cm-s-oceanic-next span.cm-link { color: #C594C5; }
.cm-s-oceanic-next span.cm-error { background: #C594C5; color: #f8f8f0; }

.cm-s-oceanic-next .CodeMirror-activeline-background { background: rgba(101, 115, 126, 0.33); }
.cm-s-oceanic-next .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
`;
var onedark = `
/*
    Name:       one-dark 1.1.1
    Author:     Török Ádám (http://github.com/Aerobird98)
    Original Atom One Dark Theme (https://github.com/atom/one-dark-ui & https://github.com/atom/one-dark-syntax)
*/

.cm-s-one-dark { font-family: Menlo, Consolas, 'DejaVu Sans Mono', monospace; color: #abb2bf; background-color: #282c34; }
.cm-s-one-dark .CodeMirror-selected { background-color: #3e4451; }
.cm-s-one-dark .CodeMirror-gutter,
.cm-s-one-dark .CodeMirror-gutters { border: none; background-color: #282c34; }
.cm-s-one-dark .CodeMirror-linenumber,
.cm-s-one-dark .CodeMirror-linenumbers { color: #5c6370 !important; background-color: transparent; }
.cm-s-one-dark .CodeMirror-lines { color: #abb2bf !important; background-color: transparent; }
.cm-s-one-dark .CodeMirror-cursor { border-left: 2px solid #56b6c2 !important; }
.cm-s-one-dark .CodeMirror-matchingbracket,
.cm-s-one-dark .CodeMirror-matchingtag { border-bottom: 2px solid #56b6c2; color: #abb2bf !important; background-color: transparent; }
.cm-s-one-dark .CodeMirror-nonmatchingbracket { border-bottom: 2px solid #e06c75; color: #abb2bf !important; background-color: transparent; }
.cm-s-one-dark .CodeMirror-foldmarker,
.cm-s-one-dark .CodeMirror-foldgutter,
.cm-s-one-dark .CodeMirror-foldgutter-open,
.cm-s-one-dark .CodeMirror-foldgutter-folded { border: none; text-shadow: none; color: #5c6370 !important; background-color: transparent; }
.cm-s-one-dark .CodeMirror-activeline-background { background-color: rgba(153, 187, 255, 0.04); }
.cm-s-one-dark .cm-header {color: #e06c75;}
.cm-s-one-dark .cm-quote {color: #5c6370;font-style: italic;}
.cm-s-one-dark .cm-negative {color: #e06c75;}
.cm-s-one-dark .cm-positive {color: #e06c75;}
.cm-s-one-dark .cm-strong {color: #d19a66;font-weight: bold;}
.cm-s-one-dark .cm-header .cm-strong {color: #d19a66;font-weight: bold;}
.cm-s-one-dark .cm-em {color: #c678dd;font-style: italic;}
.cm-s-one-dark .cm-header .cm-em {color: #c678dd;font-style: italic;}
.cm-s-one-dark .cm-tag {color: #e06c75;}
.cm-s-one-dark .cm-attribute {color: #d19a66;}
.cm-s-one-dark .cm-link {color: #98c379;border-bottom: solid 1px #98c379;}
.cm-s-one-dark .cm-builtin {color: #e06c75;}
.cm-s-one-dark .cm-keyword {color: #c678dd;}
.cm-s-one-dark .cm-def {color: #e5c07b;} /* original:  #d19a66; */
.cm-s-one-dark .cm-atom {color: #d19a66;}
.cm-s-one-dark .cm-number {color: #d19a66;}
.cm-s-one-dark .cm-property {color: #56b6c2;} /* original: #abb2bf */
.cm-s-one-dark .cm-qualifier {color: #d19a66;}
.cm-s-one-dark .cm-variable {color: #e06c75;}
.cm-s-one-dark .cm-string {color: #98c379;}
.cm-s-one-dark .cm-punctuation {color: #abb2bf;}
.cm-s-one-dark .cm-operator {color: #56b6c2;} /* original: #abb2bf */
.cm-s-one-dark .cm-meta {color: #abb2bf;}
.cm-s-one-dark .cm-bracket {color: #abb2bf;}
.cm-s-one-dark .cm-comment {color: #5c6370;font-style: italic;}
.cm-s-one-dark .cm-error {color: #e06c75;}
.cm-s-one-dark .cm-m-css.cm-variable {color: #828997;}
.cm-s-one-dark .cm-m-css.cm-property  {color: #abb2bf;}
.cm-s-one-dark .cm-m-css.cm-atom  {color: #56b6c2;}
.cm-s-one-dark .cm-m-css.cm-builtin {color: #56b6c2;}
.cm-s-one-dark .cm-m-lua.cm-variable {color: #56b6c2;}
`;
var onelight = `
/* Source: https://www.npmjs.com/package/codemirror-one-light-theme*/
.cm-s-one-light {
  font-family: Menlo, Monaco, 'Courier New', monospace;
  line-height: 18px;
  color: #50a14f; background-color: #fff;}
.cm-s-one-light .CodeMirror-selected {
  background-color: #C7DEFA;
}
.cm-s-one-light .CodeMirror-gutter,
.cm-s-one-light .CodeMirror-gutters {
  border: none;
  background-color: #fff;
}
.cm-s-one-light .CodeMirror-linenumber,
.cm-s-one-light .CodeMirror-linenumbers {
  color: #9d9d9f !important;
  background-color: transparent;
}
.cm-s-one-light .CodeMirror-lines {
  color: #383a42 !important;
  background-color: transparent;
}
.cm-s-one-light .CodeMirror-cursor {
  border-left: 2px solid #56b6c2 !important;
}
.cm-s-one-light .CodeMirror-matchingbracket,
.cm-s-one-light .CodeMirror-matchingtag {
  border-bottom: 2px solid #56b6c2;
  color: #383a42 !important;
  background-color: transparent;
}
.cm-s-one-light .CodeMirror-nonmatchingbracket {
  border-bottom: 2px solid #e06c75;
  color: #383a42 !important;
  background-color: transparent;
}
.cm-s-one-light .CodeMirror-foldmarker,
.cm-s-one-light .CodeMirror-foldgutter,
.cm-s-one-light .CodeMirror-foldgutter-open,
.cm-s-one-light .CodeMirror-foldgutter-folded {
  border: none;
  text-shadow: none;
  color: #9d9d9f !important;
  background-color: transparent;
}
.cm-s-one-light .CodeMirror-activeline-background {
  background-color: #C7DEFA;
}
.cm-s-one-light .cm-header {
  color: #e06c75;
}
.cm-s-one-light .cm-quote {
  color: #9d9d9f;
  font-style: italic;
}
.cm-s-one-light .cm-negative {
  color: #e06c75;
}
.cm-s-one-light .cm-positive {
  color: #e06c75;
}
.cm-s-one-light .cm-strong {
  color: #e45649;
  font-weight: bold;
}
.cm-s-one-light .cm-header .cm-strong {
  color: #e45649;
  font-weight: bold;
}
.cm-s-one-light .cm-em {
  color: #c678dd;
  font-style: italic;
}
.cm-s-one-light .cm-header .cm-em {
  color: #c678dd;
  font-style: italic;
}
.cm-s-one-light .cm-tag {
  color: #e45649;
}
.cm-s-one-light .cm-attribute {
  color: #986801;
}
.cm-s-one-light .cm-link {
  color: #50a14f;
  border-bottom: solid 1px #50a14f;
}
.cm-s-one-light .cm-builtin {
  color: #e06c75;
}
.cm-s-one-light .cm-keyword {
  color: #0184bc;
}
.cm-s-one-light .cm-def {
  color: #e5c07b;
} 
.cm-s-one-light .cm-atom {
  color: #0184bc;
}
.cm-s-one-light .cm-number {
  color: #986801;
}
.cm-s-one-light .cm-property {
  color: #e45649;
} 
.cm-s-one-light .cm-qualifier {
  color: #e45649;
}
.cm-s-one-light .cm-variable {
  color: #e06c75;
}
.cm-s-one-light .cm-string {
  color: #50a14f;
}
.cm-s-one-light .cm-punctuation {
  color: #383a42;
}
.cm-s-one-light .cm-operator {
  color: #56b6c2;
} 
.cm-s-one-light .cm-meta {
  color: #808080;
}
.cm-s-one-light .cm-bracket {
  color: #383a42;
}
.cm-s-one-light .cm-comment {
  color: #9d9d9f;
  font-style: italic;
}
.cm-s-one-light .cm-error {
  color: #e06c75;
}
.cm-s-one-light .cm-m-css.cm-variable {
  color: #828997;
}
.cm-s-one-light .cm-m-css.cm-property {
  color: #383a42;
}
.cm-s-one-light .cm-m-css.cm-atom {
  color: #0184bc;
}
.cm-s-one-light .cm-m-css.cm-builtin {
  color: #56b6c2;
}
.cm-s-one-light .cm-m-lua.cm-variable {
  color: #56b6c2;
}
`;
var panda_syntax = `/*
	Name:       Panda Syntax
	Author:     Siamak Mokhtari (http://github.com/siamak/)
	CodeMirror template by Siamak Mokhtari (https://github.com/siamak/atom-panda-syntax)
*/
.cm-s-panda-syntax {
	background: #292A2B;
	color: #E6E6E6;
	line-height: 1.5;
	font-family: 'Operator Mono', 'Source Code Pro', Menlo, Monaco, Consolas, Courier New, monospace;
}
.cm-s-panda-syntax .CodeMirror-cursor { border-color: #ff2c6d; }
.cm-s-panda-syntax .CodeMirror-activeline-background {
	background: rgba(99, 123, 156, 0.1);
}
.cm-s-panda-syntax .CodeMirror-selected {
	background: #FFF;
}
.cm-s-panda-syntax .cm-comment {
	font-style: italic;
	color: #676B79;
}
.cm-s-panda-syntax .cm-operator {
	color: #f3f3f3;
}
.cm-s-panda-syntax .cm-string {
	color: #19F9D8;
}
.cm-s-panda-syntax .cm-string-2 {
    color: #FFB86C;
}

.cm-s-panda-syntax .cm-tag {
	color: #ff2c6d;
}
.cm-s-panda-syntax .cm-meta {
	color: #b084eb;
}

.cm-s-panda-syntax .cm-number {
	color: #FFB86C;
}
.cm-s-panda-syntax .cm-atom {
	color: #ff2c6d;
}
.cm-s-panda-syntax .cm-keyword {
	color: #FF75B5;
}
.cm-s-panda-syntax .cm-variable {
	color: #ffb86c;
}
.cm-s-panda-syntax .cm-variable-2 {
	color: #ff9ac1;
}
.cm-s-panda-syntax .cm-variable-3, .cm-s-panda-syntax .cm-type {
	color: #ff9ac1;
}

.cm-s-panda-syntax .cm-def {
	color: #e6e6e6;
}
.cm-s-panda-syntax .cm-property {
	color: #f3f3f3;
}
.cm-s-panda-syntax .cm-unit {
    color: #ffb86c;
}

.cm-s-panda-syntax .cm-attribute {
    color: #ffb86c;
}

.cm-s-panda-syntax .CodeMirror-matchingbracket {
    border-bottom: 1px dotted #19F9D8;
    padding-bottom: 2px;
    color: #e6e6e6;
}
.cm-s-panda-syntax .CodeMirror-gutters {
    background: #292a2b;
    border-right-color: rgba(255, 255, 255, 0.1);
}
.cm-s-panda-syntax .CodeMirror-linenumber {
    color: #e6e6e6;
    opacity: 0.6;
}
`;
var paraiso_dark = `/*

    Name:       Paraíso (Dark)
    Author:     Jan T. Sott

    Color scheme by Jan T. Sott (https://github.com/idleberg/Paraiso-CodeMirror)
    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)

*/

.cm-s-paraiso-dark.CodeMirror { background: #2f1e2e; color: #b9b6b0; }
.cm-s-paraiso-dark div.CodeMirror-selected { background: #41323f; }
.cm-s-paraiso-dark .CodeMirror-line::selection, .cm-s-paraiso-dark .CodeMirror-line > span::selection, .cm-s-paraiso-dark .CodeMirror-line > span > span::selection { background: rgba(65, 50, 63, .99); }
.cm-s-paraiso-dark .CodeMirror-line::-moz-selection, .cm-s-paraiso-dark .CodeMirror-line > span::-moz-selection, .cm-s-paraiso-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(65, 50, 63, .99); }
.cm-s-paraiso-dark .CodeMirror-gutters { background: #2f1e2e; border-right: 0px; }
.cm-s-paraiso-dark .CodeMirror-guttermarker { color: #ef6155; }
.cm-s-paraiso-dark .CodeMirror-guttermarker-subtle { color: #776e71; }
.cm-s-paraiso-dark .CodeMirror-linenumber { color: #776e71; }
.cm-s-paraiso-dark .CodeMirror-cursor { border-left: 1px solid #8d8687; }

.cm-s-paraiso-dark span.cm-comment { color: #e96ba8; }
.cm-s-paraiso-dark span.cm-atom { color: #815ba4; }
.cm-s-paraiso-dark span.cm-number { color: #815ba4; }

.cm-s-paraiso-dark span.cm-property, .cm-s-paraiso-dark span.cm-attribute { color: #48b685; }
.cm-s-paraiso-dark span.cm-keyword { color: #ef6155; }
.cm-s-paraiso-dark span.cm-string { color: #fec418; }

.cm-s-paraiso-dark span.cm-variable { color: #48b685; }
.cm-s-paraiso-dark span.cm-variable-2 { color: #06b6ef; }
.cm-s-paraiso-dark span.cm-def { color: #f99b15; }
.cm-s-paraiso-dark span.cm-bracket { color: #b9b6b0; }
.cm-s-paraiso-dark span.cm-tag { color: #ef6155; }
.cm-s-paraiso-dark span.cm-link { color: #815ba4; }
.cm-s-paraiso-dark span.cm-error { background: #ef6155; color: #8d8687; }

.cm-s-paraiso-dark .CodeMirror-activeline-background { background: #4D344A; }
.cm-s-paraiso-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }
`;
var paraiso_light = `/*

    Name:       Paraíso (Light)
    Author:     Jan T. Sott

    Color scheme by Jan T. Sott (https://github.com/idleberg/Paraiso-CodeMirror)
    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)

*/

.cm-s-paraiso-light.CodeMirror { background: #e7e9db; color: #41323f; }
.cm-s-paraiso-light div.CodeMirror-selected { background: #b9b6b0; }
.cm-s-paraiso-light .CodeMirror-line::selection, .cm-s-paraiso-light .CodeMirror-line > span::selection, .cm-s-paraiso-light .CodeMirror-line > span > span::selection { background: #b9b6b0; }
.cm-s-paraiso-light .CodeMirror-line::-moz-selection, .cm-s-paraiso-light .CodeMirror-line > span::-moz-selection, .cm-s-paraiso-light .CodeMirror-line > span > span::-moz-selection { background: #b9b6b0; }
.cm-s-paraiso-light .CodeMirror-gutters { background: #e7e9db; border-right: 0px; }
.cm-s-paraiso-light .CodeMirror-guttermarker { color: black; }
.cm-s-paraiso-light .CodeMirror-guttermarker-subtle { color: #8d8687; }
.cm-s-paraiso-light .CodeMirror-linenumber { color: #8d8687; }
.cm-s-paraiso-light .CodeMirror-cursor { border-left: 1px solid #776e71; }

.cm-s-paraiso-light span.cm-comment { color: #e96ba8; }
.cm-s-paraiso-light span.cm-atom { color: #815ba4; }
.cm-s-paraiso-light span.cm-number { color: #815ba4; }

.cm-s-paraiso-light span.cm-property, .cm-s-paraiso-light span.cm-attribute { color: #48b685; }
.cm-s-paraiso-light span.cm-keyword { color: #ef6155; }
.cm-s-paraiso-light span.cm-string { color: #fec418; }

.cm-s-paraiso-light span.cm-variable { color: #48b685; }
.cm-s-paraiso-light span.cm-variable-2 { color: #06b6ef; }
.cm-s-paraiso-light span.cm-def { color: #f99b15; }
.cm-s-paraiso-light span.cm-bracket { color: #41323f; }
.cm-s-paraiso-light span.cm-tag { color: #ef6155; }
.cm-s-paraiso-light span.cm-link { color: #815ba4; }
.cm-s-paraiso-light span.cm-error { background: #ef6155; color: #776e71; }

.cm-s-paraiso-light .CodeMirror-activeline-background { background: #CFD1C4; }
.cm-s-paraiso-light .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }
`;
var pastel_on_dark = `/**
 * Pastel On Dark theme ported from ACE editor
 * @license MIT
 * @copyright AtomicPages LLC 2014
 * @author Dennis Thompson, AtomicPages LLC
 * @version 1.1
 * @source https://github.com/atomicpages/codemirror-pastel-on-dark-theme
 */

.cm-s-pastel-on-dark.CodeMirror {
	background: #2c2827;
	color: #8F938F;
	line-height: 1.5;
}
.cm-s-pastel-on-dark div.CodeMirror-selected { background: rgba(221,240,255,0.2); }
.cm-s-pastel-on-dark .CodeMirror-line::selection, .cm-s-pastel-on-dark .CodeMirror-line > span::selection, .cm-s-pastel-on-dark .CodeMirror-line > span > span::selection { background: rgba(221,240,255,0.2); }
.cm-s-pastel-on-dark .CodeMirror-line::-moz-selection, .cm-s-pastel-on-dark .CodeMirror-line > span::-moz-selection, .cm-s-pastel-on-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(221,240,255,0.2); }

.cm-s-pastel-on-dark .CodeMirror-gutters {
	background: #34302f;
	border-right: 0px;
	padding: 0 3px;
}
.cm-s-pastel-on-dark .CodeMirror-guttermarker { color: white; }
.cm-s-pastel-on-dark .CodeMirror-guttermarker-subtle { color: #8F938F; }
.cm-s-pastel-on-dark .CodeMirror-linenumber { color: #8F938F; }
.cm-s-pastel-on-dark .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }
.cm-s-pastel-on-dark span.cm-comment { color: #A6C6FF; }
.cm-s-pastel-on-dark span.cm-atom { color: #DE8E30; }
.cm-s-pastel-on-dark span.cm-number { color: #CCCCCC; }
.cm-s-pastel-on-dark span.cm-property { color: #8F938F; }
.cm-s-pastel-on-dark span.cm-attribute { color: #a6e22e; }
.cm-s-pastel-on-dark span.cm-keyword { color: #AEB2F8; }
.cm-s-pastel-on-dark span.cm-string { color: #66A968; }
.cm-s-pastel-on-dark span.cm-variable { color: #AEB2F8; }
.cm-s-pastel-on-dark span.cm-variable-2 { color: #BEBF55; }
.cm-s-pastel-on-dark span.cm-variable-3, .cm-s-pastel-on-dark span.cm-type { color: #DE8E30; }
.cm-s-pastel-on-dark span.cm-def { color: #757aD8; }
.cm-s-pastel-on-dark span.cm-bracket { color: #f8f8f2; }
.cm-s-pastel-on-dark span.cm-tag { color: #C1C144; }
.cm-s-pastel-on-dark span.cm-link { color: #ae81ff; }
.cm-s-pastel-on-dark span.cm-qualifier,.cm-s-pastel-on-dark span.cm-builtin { color: #C1C144; }
.cm-s-pastel-on-dark span.cm-error {
	background: #757aD8;
	color: #f8f8f0;
}
.cm-s-pastel-on-dark .CodeMirror-activeline-background { background: rgba(255, 255, 255, 0.031); }
.cm-s-pastel-on-dark .CodeMirror-matchingbracket {
	border: 1px solid rgba(255,255,255,0.25);
	color: #8F938F !important;
	margin: -1px -1px 0 -1px;
}
`;
var railscasts = `/*

    Name:       Railscasts
    Author:     Ryan Bates (http://railscasts.com)

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-railscasts.CodeMirror {background: #2b2b2b; color: #f4f1ed;}
.cm-s-railscasts div.CodeMirror-selected {background: #272935 !important;}
.cm-s-railscasts .CodeMirror-gutters {background: #2b2b2b; border-right: 0px;}
.cm-s-railscasts .CodeMirror-linenumber {color: #5a647e;}
.cm-s-railscasts .CodeMirror-cursor {border-left: 1px solid #d4cfc9 !important;}

.cm-s-railscasts span.cm-comment {color: #bc9458;}
.cm-s-railscasts span.cm-atom {color: #b6b3eb;}
.cm-s-railscasts span.cm-number {color: #b6b3eb;}

.cm-s-railscasts span.cm-property, .cm-s-railscasts span.cm-attribute {color: #a5c261;}
.cm-s-railscasts span.cm-keyword {color: #da4939;}
.cm-s-railscasts span.cm-string {color: #ffc66d;}

.cm-s-railscasts span.cm-variable {color: #a5c261;}
.cm-s-railscasts span.cm-variable-2 {color: #6d9cbe;}
.cm-s-railscasts span.cm-def {color: #cc7833;}
.cm-s-railscasts span.cm-error {background: #da4939; color: #d4cfc9;}
.cm-s-railscasts span.cm-bracket {color: #f4f1ed;}
.cm-s-railscasts span.cm-tag {color: #da4939;}
.cm-s-railscasts span.cm-link {color: #b6b3eb;}

.cm-s-railscasts .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}
.cm-s-railscasts .CodeMirror-activeline-background { background: #303040; }
`;
var rubyblue = `.cm-s-rubyblue.CodeMirror { background: #112435; color: white; }
.cm-s-rubyblue div.CodeMirror-selected { background: #38566F; }
.cm-s-rubyblue .CodeMirror-line::selection, .cm-s-rubyblue .CodeMirror-line > span::selection, .cm-s-rubyblue .CodeMirror-line > span > span::selection { background: rgba(56, 86, 111, 0.99); }
.cm-s-rubyblue .CodeMirror-line::-moz-selection, .cm-s-rubyblue .CodeMirror-line > span::-moz-selection, .cm-s-rubyblue .CodeMirror-line > span > span::-moz-selection { background: rgba(56, 86, 111, 0.99); }
.cm-s-rubyblue .CodeMirror-gutters { background: #1F4661; border-right: 7px solid #3E7087; }
.cm-s-rubyblue .CodeMirror-guttermarker { color: white; }
.cm-s-rubyblue .CodeMirror-guttermarker-subtle { color: #3E7087; }
.cm-s-rubyblue .CodeMirror-linenumber { color: white; }
.cm-s-rubyblue .CodeMirror-cursor { border-left: 1px solid white; }

.cm-s-rubyblue span.cm-comment { color: #999; font-style:italic; line-height: 1em; }
.cm-s-rubyblue span.cm-atom { color: #F4C20B; }
.cm-s-rubyblue span.cm-number, .cm-s-rubyblue span.cm-attribute { color: #82C6E0; }
.cm-s-rubyblue span.cm-keyword { color: #F0F; }
.cm-s-rubyblue span.cm-string { color: #F08047; }
.cm-s-rubyblue span.cm-meta { color: #F0F; }
.cm-s-rubyblue span.cm-variable-2, .cm-s-rubyblue span.cm-tag { color: #7BD827; }
.cm-s-rubyblue span.cm-variable-3, .cm-s-rubyblue span.cm-def, .cm-s-rubyblue span.cm-type { color: white; }
.cm-s-rubyblue span.cm-bracket { color: #F0F; }
.cm-s-rubyblue span.cm-link { color: #F4C20B; }
.cm-s-rubyblue span.CodeMirror-matchingbracket { color:#F0F !important; }
.cm-s-rubyblue span.cm-builtin, .cm-s-rubyblue span.cm-special { color: #FF9D00; }
.cm-s-rubyblue span.cm-error { color: #AF2018; }

.cm-s-rubyblue .CodeMirror-activeline-background { background: #173047; }
`;
var seti = `/*

    Name:       seti
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original seti color scheme by Jesse Weed (https://github.com/jesseweed/seti-syntax)

*/


.cm-s-seti.CodeMirror {
  background-color: #151718 !important;
  color: #CFD2D1 !important;
  border: none;
}
.cm-s-seti .CodeMirror-gutters {
  color: #404b53;
  background-color: #0E1112;
  border: none;
}
.cm-s-seti .CodeMirror-cursor { border-left: solid thin #f8f8f0; }
.cm-s-seti .CodeMirror-linenumber { color: #6D8A88; }
.cm-s-seti.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }
.cm-s-seti .CodeMirror-line::selection, .cm-s-seti .CodeMirror-line > span::selection, .cm-s-seti .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-seti .CodeMirror-line::-moz-selection, .cm-s-seti .CodeMirror-line > span::-moz-selection, .cm-s-seti .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-seti span.cm-comment { color: #41535b; }
.cm-s-seti span.cm-string, .cm-s-seti span.cm-string-2 { color: #55b5db; }
.cm-s-seti span.cm-number { color: #cd3f45; }
.cm-s-seti span.cm-variable { color: #55b5db; }
.cm-s-seti span.cm-variable-2 { color: #a074c4; }
.cm-s-seti span.cm-def { color: #55b5db; }
.cm-s-seti span.cm-keyword { color: #ff79c6; }
.cm-s-seti span.cm-operator { color: #9fca56; }
.cm-s-seti span.cm-keyword { color: #e6cd69; }
.cm-s-seti span.cm-atom { color: #cd3f45; }
.cm-s-seti span.cm-meta { color: #55b5db; }
.cm-s-seti span.cm-tag { color: #55b5db; }
.cm-s-seti span.cm-attribute { color: #9fca56; }
.cm-s-seti span.cm-qualifier { color: #9fca56; }
.cm-s-seti span.cm-property { color: #a074c4; }
.cm-s-seti span.cm-variable-3, .cm-s-seti span.cm-type { color: #9fca56; }
.cm-s-seti span.cm-builtin { color: #9fca56; }
.cm-s-seti .CodeMirror-activeline-background { background: #101213; }
.cm-s-seti .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }
`;
var shadowfox = `/*

    Name:       shadowfox
    Author:     overdodactyl (http://github.com/overdodactyl)

    Original shadowfox color scheme by Firefox

*/

.cm-s-shadowfox.CodeMirror { background: #2a2a2e; color: #b1b1b3; }
.cm-s-shadowfox div.CodeMirror-selected { background: #353B48; }
.cm-s-shadowfox .CodeMirror-line::selection, .cm-s-shadowfox .CodeMirror-line > span::selection, .cm-s-shadowfox .CodeMirror-line > span > span::selection { background: #353B48; }
.cm-s-shadowfox .CodeMirror-line::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span > span::-moz-selection { background: #353B48; }
.cm-s-shadowfox .CodeMirror-gutters { background: #0c0c0d ; border-right: 1px solid #0c0c0d; }
.cm-s-shadowfox .CodeMirror-guttermarker { color: #555; }
.cm-s-shadowfox .CodeMirror-linenumber { color: #939393; }
.cm-s-shadowfox .CodeMirror-cursor { border-left: 1px solid #fff; }

.cm-s-shadowfox span.cm-comment { color: #939393; }
.cm-s-shadowfox span.cm-atom { color: #FF7DE9; }
.cm-s-shadowfox span.cm-quote { color: #FF7DE9; }
.cm-s-shadowfox span.cm-builtin { color: #FF7DE9; }
.cm-s-shadowfox span.cm-attribute { color: #FF7DE9; }
.cm-s-shadowfox span.cm-keyword { color: #FF7DE9; }
.cm-s-shadowfox span.cm-error { color: #FF7DE9; }

.cm-s-shadowfox span.cm-number { color: #6B89FF; }
.cm-s-shadowfox span.cm-string { color: #6B89FF; }
.cm-s-shadowfox span.cm-string-2 { color: #6B89FF; }

.cm-s-shadowfox span.cm-meta { color: #939393; }
.cm-s-shadowfox span.cm-hr { color: #939393; }

.cm-s-shadowfox span.cm-header { color: #75BFFF; }
.cm-s-shadowfox span.cm-qualifier { color: #75BFFF; }
.cm-s-shadowfox span.cm-variable-2 { color: #75BFFF; }

.cm-s-shadowfox span.cm-property { color: #86DE74; }

.cm-s-shadowfox span.cm-def { color: #75BFFF; }
.cm-s-shadowfox span.cm-bracket { color: #75BFFF; }
.cm-s-shadowfox span.cm-tag { color: #75BFFF; }
.cm-s-shadowfox span.cm-link:visited { color: #75BFFF; }

.cm-s-shadowfox span.cm-variable { color: #B98EFF; }
.cm-s-shadowfox span.cm-variable-3 { color: #d7d7db; }
.cm-s-shadowfox span.cm-link { color: #737373; }
.cm-s-shadowfox span.cm-operator { color: #b1b1b3; }
.cm-s-shadowfox span.cm-special { color: #d7d7db; }

.cm-s-shadowfox .CodeMirror-activeline-background { background: rgba(185, 215, 253, .15) }
.cm-s-shadowfox .CodeMirror-matchingbracket { outline: solid 1px rgba(255, 255, 255, .25); color: white !important; }
`;
var solarized = `/*
Solarized theme for code-mirror
http://ethanschoonover.com/solarized
*/

/*
Solarized color palette
http://ethanschoonover.com/solarized/img/solarized-palette.png
*/

.solarized.base03 { color: #002b36; }
.solarized.base02 { color: #073642; }
.solarized.base01 { color: #586e75; }
.solarized.base00 { color: #657b83; }
.solarized.base0 { color: #839496; }
.solarized.base1 { color: #93a1a1; }
.solarized.base2 { color: #eee8d5; }
.solarized.base3  { color: #fdf6e3; }
.solarized.solar-yellow  { color: #b58900; }
.solarized.solar-orange  { color: #cb4b16; }
.solarized.solar-red { color: #dc322f; }
.solarized.solar-magenta { color: #d33682; }
.solarized.solar-violet  { color: #6c71c4; }
.solarized.solar-blue { color: #268bd2; }
.solarized.solar-cyan { color: #2aa198; }
.solarized.solar-green { color: #859900; }

/* Color scheme for code-mirror */

.cm-s-solarized {
  line-height: 1.45em;
  color-profile: sRGB;
  rendering-intent: auto;
}
.cm-s-solarized.cm-s-dark {
  color: #839496;
  background-color: #002b36;
}
.cm-s-solarized.cm-s-light {
  background-color: #fdf6e3;
  color: #657b83;
}

.cm-s-solarized .CodeMirror-widget {
  text-shadow: none;
}

.cm-s-solarized .cm-header { color: #586e75; }
.cm-s-solarized .cm-quote { color: #93a1a1; }

.cm-s-solarized .cm-keyword { color: #cb4b16; }
.cm-s-solarized .cm-atom { color: #d33682; }
.cm-s-solarized .cm-number { color: #d33682; }
.cm-s-solarized .cm-def { color: #2aa198; }

.cm-s-solarized .cm-variable { color: #839496; }
.cm-s-solarized .cm-variable-2 { color: #b58900; }
.cm-s-solarized .cm-variable-3, .cm-s-solarized .cm-type { color: #6c71c4; }

.cm-s-solarized .cm-property { color: #2aa198; }
.cm-s-solarized .cm-operator { color: #6c71c4; }

.cm-s-solarized .cm-comment { color: #586e75; font-style:italic; }

.cm-s-solarized .cm-string { color: #859900; }
.cm-s-solarized .cm-string-2 { color: #b58900; }

.cm-s-solarized .cm-meta { color: #859900; }
.cm-s-solarized .cm-qualifier { color: #b58900; }
.cm-s-solarized .cm-builtin { color: #d33682; }
.cm-s-solarized .cm-bracket { color: #cb4b16; }
.cm-s-solarized .CodeMirror-matchingbracket { color: #859900; }
.cm-s-solarized .CodeMirror-nonmatchingbracket { color: #dc322f; }
.cm-s-solarized .cm-tag { color: #93a1a1; }
.cm-s-solarized .cm-attribute { color: #2aa198; }
.cm-s-solarized .cm-hr {
  color: transparent;
  border-top: 1px solid #586e75;
  display: block;
}
.cm-s-solarized .cm-link { color: #93a1a1; cursor: pointer; }
.cm-s-solarized .cm-special { color: #6c71c4; }
.cm-s-solarized .cm-em {
  color: #999;
  text-decoration: underline;
  text-decoration-style: dotted;
}
.cm-s-solarized .cm-error,
.cm-s-solarized .cm-invalidchar {
  color: #586e75;
  border-bottom: 1px dotted #dc322f;
}

.cm-s-solarized.cm-s-dark div.CodeMirror-selected { background: #073642; }
.cm-s-solarized.cm-s-dark.CodeMirror ::selection { background: rgba(7, 54, 66, 0.99); }
.cm-s-solarized.cm-s-dark .CodeMirror-line::-moz-selection, .cm-s-dark .CodeMirror-line > span::-moz-selection, .cm-s-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(7, 54, 66, 0.99); }

.cm-s-solarized.cm-s-light div.CodeMirror-selected { background: #eee8d5; }
.cm-s-solarized.cm-s-light .CodeMirror-line::selection, .cm-s-light .CodeMirror-line > span::selection, .cm-s-light .CodeMirror-line > span > span::selection { background: #eee8d5; }
.cm-s-solarized.cm-s-light .CodeMirror-line::-moz-selection, .cm-s-light .CodeMirror-line > span::-moz-selection, .cm-s-light .CodeMirror-line > span > span::-moz-selection { background: #eee8d5; }

/* Editor styling */



/* Little shadow on the view-port of the buffer view */
.cm-s-solarized.CodeMirror {
  -moz-box-shadow: inset 7px 0 12px -6px #000;
  -webkit-box-shadow: inset 7px 0 12px -6px #000;
  box-shadow: inset 7px 0 12px -6px #000;
}

/* Remove gutter border */
.cm-s-solarized .CodeMirror-gutters {
  border-right: 0;
}

/* Gutter colors and line number styling based of color scheme (dark / light) */

/* Dark */
.cm-s-solarized.cm-s-dark .CodeMirror-gutters {
  background-color: #073642;
}

.cm-s-solarized.cm-s-dark .CodeMirror-linenumber {
  color: #586e75;
}

/* Light */
.cm-s-solarized.cm-s-light .CodeMirror-gutters {
  background-color: #eee8d5;
}

.cm-s-solarized.cm-s-light .CodeMirror-linenumber {
  color: #839496;
}

/* Common */
.cm-s-solarized .CodeMirror-linenumber {
  padding: 0 5px;
}
.cm-s-solarized .CodeMirror-guttermarker-subtle { color: #586e75; }
.cm-s-solarized.cm-s-dark .CodeMirror-guttermarker { color: #ddd; }
.cm-s-solarized.cm-s-light .CodeMirror-guttermarker { color: #cb4b16; }

.cm-s-solarized .CodeMirror-gutter .CodeMirror-gutter-text {
  color: #586e75;
}

/* Cursor */
.cm-s-solarized .CodeMirror-cursor { border-left: 1px solid #819090; }

/* Fat cursor */
.cm-s-solarized.cm-s-light.cm-fat-cursor .CodeMirror-cursor { background: #77ee77; }
.cm-s-solarized.cm-s-light .cm-animate-fat-cursor { background-color: #77ee77; }
.cm-s-solarized.cm-s-dark.cm-fat-cursor .CodeMirror-cursor { background: #586e75; }
.cm-s-solarized.cm-s-dark .cm-animate-fat-cursor { background-color: #586e75; }

/* Active line */
.cm-s-solarized.cm-s-dark .CodeMirror-activeline-background {
  background: rgba(255, 255, 255, 0.06);
}
.cm-s-solarized.cm-s-light .CodeMirror-activeline-background {
  background: rgba(0, 0, 0, 0.06);
}
`;
var ssms = `.cm-s-ssms span.cm-keyword { color: blue; }
.cm-s-ssms span.cm-comment { color: darkgreen; }
.cm-s-ssms span.cm-string { color: red; }
.cm-s-ssms span.cm-def { color: black; }
.cm-s-ssms span.cm-variable { color: black; }
.cm-s-ssms span.cm-variable-2 { color: black; }
.cm-s-ssms span.cm-atom { color: darkgray; }
.cm-s-ssms .CodeMirror-linenumber { color: teal; }
.cm-s-ssms .CodeMirror-activeline-background { background: #ffffff; }
.cm-s-ssms span.cm-string-2 { color: #FF00FF; }
.cm-s-ssms span.cm-operator, 
.cm-s-ssms span.cm-bracket, 
.cm-s-ssms span.cm-punctuation { color: darkgray; }
.cm-s-ssms .CodeMirror-gutters { border-right: 3px solid #ffee62; background-color: #ffffff; }
.cm-s-ssms div.CodeMirror-selected { background: #ADD6FF; }

`;
var the_matrix = `.cm-s-the-matrix.CodeMirror { background: #000000; color: #00FF00; }
.cm-s-the-matrix div.CodeMirror-selected { background: #2D2D2D; }
.cm-s-the-matrix .CodeMirror-line::selection, .cm-s-the-matrix .CodeMirror-line > span::selection, .cm-s-the-matrix .CodeMirror-line > span > span::selection { background: rgba(45, 45, 45, 0.99); }
.cm-s-the-matrix .CodeMirror-line::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span > span::-moz-selection { background: rgba(45, 45, 45, 0.99); }
.cm-s-the-matrix .CodeMirror-gutters { background: #060; border-right: 2px solid #00FF00; }
.cm-s-the-matrix .CodeMirror-guttermarker { color: #0f0; }
.cm-s-the-matrix .CodeMirror-guttermarker-subtle { color: white; }
.cm-s-the-matrix .CodeMirror-linenumber { color: #FFFFFF; }
.cm-s-the-matrix .CodeMirror-cursor { border-left: 1px solid #00FF00; }

.cm-s-the-matrix span.cm-keyword { color: #008803; font-weight: bold; }
.cm-s-the-matrix span.cm-atom { color: #3FF; }
.cm-s-the-matrix span.cm-number { color: #FFB94F; }
.cm-s-the-matrix span.cm-def { color: #99C; }
.cm-s-the-matrix span.cm-variable { color: #F6C; }
.cm-s-the-matrix span.cm-variable-2 { color: #C6F; }
.cm-s-the-matrix span.cm-variable-3, .cm-s-the-matrix span.cm-type { color: #96F; }
.cm-s-the-matrix span.cm-property { color: #62FFA0; }
.cm-s-the-matrix span.cm-operator { color: #999; }
.cm-s-the-matrix span.cm-comment { color: #CCCCCC; }
.cm-s-the-matrix span.cm-string { color: #39C; }
.cm-s-the-matrix span.cm-meta { color: #C9F; }
.cm-s-the-matrix span.cm-qualifier { color: #FFF700; }
.cm-s-the-matrix span.cm-builtin { color: #30a; }
.cm-s-the-matrix span.cm-bracket { color: #cc7; }
.cm-s-the-matrix span.cm-tag { color: #FFBD40; }
.cm-s-the-matrix span.cm-attribute { color: #FFF700; }
.cm-s-the-matrix span.cm-error { color: #FF0000; }

.cm-s-the-matrix .CodeMirror-activeline-background { background: #040; }
`;
var tomorrow_night_bright = `/*

    Name:       Tomorrow Night - Bright
    Author:     Chris Kempson

    Port done by Gerard Braad <me@gbraad.nl>

*/

.cm-s-tomorrow-night-bright.CodeMirror { background: #000000; color: #eaeaea; }
.cm-s-tomorrow-night-bright div.CodeMirror-selected { background: #424242; }
.cm-s-tomorrow-night-bright .CodeMirror-gutters { background: #000000; border-right: 0px; }
.cm-s-tomorrow-night-bright .CodeMirror-guttermarker { color: #e78c45; }
.cm-s-tomorrow-night-bright .CodeMirror-guttermarker-subtle { color: #777; }
.cm-s-tomorrow-night-bright .CodeMirror-linenumber { color: #424242; }
.cm-s-tomorrow-night-bright .CodeMirror-cursor { border-left: 1px solid #6A6A6A; }

.cm-s-tomorrow-night-bright span.cm-comment { color: #d27b53; }
.cm-s-tomorrow-night-bright span.cm-atom { color: #a16a94; }
.cm-s-tomorrow-night-bright span.cm-number { color: #a16a94; }

.cm-s-tomorrow-night-bright span.cm-property, .cm-s-tomorrow-night-bright span.cm-attribute { color: #99cc99; }
.cm-s-tomorrow-night-bright span.cm-keyword { color: #d54e53; }
.cm-s-tomorrow-night-bright span.cm-string { color: #e7c547; }

.cm-s-tomorrow-night-bright span.cm-variable { color: #b9ca4a; }
.cm-s-tomorrow-night-bright span.cm-variable-2 { color: #7aa6da; }
.cm-s-tomorrow-night-bright span.cm-def { color: #e78c45; }
.cm-s-tomorrow-night-bright span.cm-bracket { color: #eaeaea; }
.cm-s-tomorrow-night-bright span.cm-tag { color: #d54e53; }
.cm-s-tomorrow-night-bright span.cm-link { color: #a16a94; }
.cm-s-tomorrow-night-bright span.cm-error { background: #d54e53; color: #6A6A6A; }

.cm-s-tomorrow-night-bright .CodeMirror-activeline-background { background: #2a2a2a; }
.cm-s-tomorrow-night-bright .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }
`;
var tomorrow_night_eighties = `/*

    Name:       Tomorrow Night - Eighties
    Author:     Chris Kempson

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-tomorrow-night-eighties.CodeMirror { background: #000000; color: #CCCCCC; }
.cm-s-tomorrow-night-eighties div.CodeMirror-selected { background: #2D2D2D; }
.cm-s-tomorrow-night-eighties .CodeMirror-line::selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span::selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span > span::selection { background: rgba(45, 45, 45, 0.99); }
.cm-s-tomorrow-night-eighties .CodeMirror-line::-moz-selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span::-moz-selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span > span::-moz-selection { background: rgba(45, 45, 45, 0.99); }
.cm-s-tomorrow-night-eighties .CodeMirror-gutters { background: #000000; border-right: 0px; }
.cm-s-tomorrow-night-eighties .CodeMirror-guttermarker { color: #f2777a; }
.cm-s-tomorrow-night-eighties .CodeMirror-guttermarker-subtle { color: #777; }
.cm-s-tomorrow-night-eighties .CodeMirror-linenumber { color: #515151; }
.cm-s-tomorrow-night-eighties .CodeMirror-cursor { border-left: 1px solid #6A6A6A; }

.cm-s-tomorrow-night-eighties span.cm-comment { color: #d27b53; }
.cm-s-tomorrow-night-eighties span.cm-atom { color: #a16a94; }
.cm-s-tomorrow-night-eighties span.cm-number { color: #a16a94; }

.cm-s-tomorrow-night-eighties span.cm-property, .cm-s-tomorrow-night-eighties span.cm-attribute { color: #99cc99; }
.cm-s-tomorrow-night-eighties span.cm-keyword { color: #f2777a; }
.cm-s-tomorrow-night-eighties span.cm-string { color: #ffcc66; }

.cm-s-tomorrow-night-eighties span.cm-variable { color: #99cc99; }
.cm-s-tomorrow-night-eighties span.cm-variable-2 { color: #6699cc; }
.cm-s-tomorrow-night-eighties span.cm-def { color: #f99157; }
.cm-s-tomorrow-night-eighties span.cm-bracket { color: #CCCCCC; }
.cm-s-tomorrow-night-eighties span.cm-tag { color: #f2777a; }
.cm-s-tomorrow-night-eighties span.cm-link { color: #a16a94; }
.cm-s-tomorrow-night-eighties span.cm-error { background: #f2777a; color: #6A6A6A; }

.cm-s-tomorrow-night-eighties .CodeMirror-activeline-background { background: #343600; }
.cm-s-tomorrow-night-eighties .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }
`;
var ttcn = `.cm-s-ttcn .cm-quote { color: #090; }
.cm-s-ttcn .cm-negative { color: #d44; }
.cm-s-ttcn .cm-positive { color: #292; }
.cm-s-ttcn .cm-header, .cm-strong { font-weight: bold; }
.cm-s-ttcn .cm-em { font-style: italic; }
.cm-s-ttcn .cm-link { text-decoration: underline; }
.cm-s-ttcn .cm-strikethrough { text-decoration: line-through; }
.cm-s-ttcn .cm-header { color: #00f; font-weight: bold; }

.cm-s-ttcn .cm-atom { color: #219; }
.cm-s-ttcn .cm-attribute { color: #00c; }
.cm-s-ttcn .cm-bracket { color: #997; }
.cm-s-ttcn .cm-comment { color: #333333; }
.cm-s-ttcn .cm-def { color: #00f; }
.cm-s-ttcn .cm-em { font-style: italic; }
.cm-s-ttcn .cm-error { color: #f00; }
.cm-s-ttcn .cm-hr { color: #999; }
.cm-s-ttcn .cm-invalidchar { color: #f00; }
.cm-s-ttcn .cm-keyword { font-weight:bold; }
.cm-s-ttcn .cm-link { color: #00c; text-decoration: underline; }
.cm-s-ttcn .cm-meta { color: #555; }
.cm-s-ttcn .cm-negative { color: #d44; }
.cm-s-ttcn .cm-positive { color: #292; }
.cm-s-ttcn .cm-qualifier { color: #555; }
.cm-s-ttcn .cm-strikethrough { text-decoration: line-through; }
.cm-s-ttcn .cm-string { color: #006400; }
.cm-s-ttcn .cm-string-2 { color: #f50; }
.cm-s-ttcn .cm-strong { font-weight: bold; }
.cm-s-ttcn .cm-tag { color: #170; }
.cm-s-ttcn .cm-variable { color: #8B2252; }
.cm-s-ttcn .cm-variable-2 { color: #05a; }
.cm-s-ttcn .cm-variable-3, .cm-s-ttcn .cm-type { color: #085; }

.cm-s-ttcn .cm-invalidchar { color: #f00; }

/* ASN */
.cm-s-ttcn .cm-accessTypes,
.cm-s-ttcn .cm-compareTypes { color: #27408B; }
.cm-s-ttcn .cm-cmipVerbs { color: #8B2252; }
.cm-s-ttcn .cm-modifier { color:#D2691E; }
.cm-s-ttcn .cm-status { color:#8B4545; }
.cm-s-ttcn .cm-storage { color:#A020F0; }
.cm-s-ttcn .cm-tags { color:#006400; }

/* CFG */
.cm-s-ttcn .cm-externalCommands { color: #8B4545; font-weight:bold; }
.cm-s-ttcn .cm-fileNCtrlMaskOptions,
.cm-s-ttcn .cm-sectionTitle { color: #2E8B57; font-weight:bold; }

/* TTCN */
.cm-s-ttcn .cm-booleanConsts,
.cm-s-ttcn .cm-otherConsts,
.cm-s-ttcn .cm-verdictConsts { color: #006400; }
.cm-s-ttcn .cm-configOps,
.cm-s-ttcn .cm-functionOps,
.cm-s-ttcn .cm-portOps,
.cm-s-ttcn .cm-sutOps,
.cm-s-ttcn .cm-timerOps,
.cm-s-ttcn .cm-verdictOps { color: #0000FF; }
.cm-s-ttcn .cm-preprocessor,
.cm-s-ttcn .cm-templateMatch,
.cm-s-ttcn .cm-ttcn3Macros { color: #27408B; }
.cm-s-ttcn .cm-types { color: #A52A2A; font-weight:bold; }
.cm-s-ttcn .cm-visibilityModifiers { font-weight:bold; }
`;
var twilight = `.cm-s-twilight.CodeMirror { background: #141414; color: #f7f7f7; } /**/
.cm-s-twilight div.CodeMirror-selected { background: #323232; } /**/
.cm-s-twilight .CodeMirror-line::selection, .cm-s-twilight .CodeMirror-line > span::selection, .cm-s-twilight .CodeMirror-line > span > span::selection { background: rgba(50, 50, 50, 0.99); }
.cm-s-twilight .CodeMirror-line::-moz-selection, .cm-s-twilight .CodeMirror-line > span::-moz-selection, .cm-s-twilight .CodeMirror-line > span > span::-moz-selection { background: rgba(50, 50, 50, 0.99); }

.cm-s-twilight .CodeMirror-gutters { background: #222; border-right: 1px solid #aaa; }
.cm-s-twilight .CodeMirror-guttermarker { color: white; }
.cm-s-twilight .CodeMirror-guttermarker-subtle { color: #aaa; }
.cm-s-twilight .CodeMirror-linenumber { color: #aaa; }
.cm-s-twilight .CodeMirror-cursor { border-left: 1px solid white; }

.cm-s-twilight .cm-keyword { color: #f9ee98; } /**/
.cm-s-twilight .cm-atom { color: #FC0; }
.cm-s-twilight .cm-number { color:  #ca7841; } /**/
.cm-s-twilight .cm-def { color: #8DA6CE; }
.cm-s-twilight span.cm-variable-2, .cm-s-twilight span.cm-tag { color: #607392; } /**/
.cm-s-twilight span.cm-variable-3, .cm-s-twilight span.cm-def, .cm-s-twilight span.cm-type { color: #607392; } /**/
.cm-s-twilight .cm-operator { color: #cda869; } /**/
.cm-s-twilight .cm-comment { color:#777; font-style:italic; font-weight:normal; } /**/
.cm-s-twilight .cm-string { color:#8f9d6a; font-style:italic; } /**/
.cm-s-twilight .cm-string-2 { color:#bd6b18; } /*?*/
.cm-s-twilight .cm-meta { background-color:#141414; color:#f7f7f7; } /*?*/
.cm-s-twilight .cm-builtin { color: #cda869; } /*?*/
.cm-s-twilight .cm-tag { color: #997643; } /**/
.cm-s-twilight .cm-attribute { color: #d6bb6d; } /*?*/
.cm-s-twilight .cm-header { color: #FF6400; }
.cm-s-twilight .cm-hr { color: #AEAEAE; }
.cm-s-twilight .cm-link { color:#ad9361; font-style:italic; text-decoration:none; } /**/
.cm-s-twilight .cm-error { border-bottom: 1px solid red; }

.cm-s-twilight .CodeMirror-activeline-background { background: #27282E; }
.cm-s-twilight .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }
`;
var vibrant_ink = `/* Taken from the popular Visual Studio Vibrant Ink Schema */

.cm-s-vibrant-ink.CodeMirror { background: black; color: white; }
.cm-s-vibrant-ink div.CodeMirror-selected { background: #35493c; }
.cm-s-vibrant-ink .CodeMirror-line::selection, .cm-s-vibrant-ink .CodeMirror-line > span::selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::selection { background: rgba(53, 73, 60, 0.99); }
.cm-s-vibrant-ink .CodeMirror-line::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::-moz-selection { background: rgba(53, 73, 60, 0.99); }

.cm-s-vibrant-ink .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }
.cm-s-vibrant-ink .CodeMirror-guttermarker { color: white; }
.cm-s-vibrant-ink .CodeMirror-guttermarker-subtle { color: #d0d0d0; }
.cm-s-vibrant-ink .CodeMirror-linenumber { color: #d0d0d0; }
.cm-s-vibrant-ink .CodeMirror-cursor { border-left: 1px solid white; }

.cm-s-vibrant-ink .cm-keyword { color: #CC7832; }
.cm-s-vibrant-ink .cm-atom { color: #FC0; }
.cm-s-vibrant-ink .cm-number { color:  #FFEE98; }
.cm-s-vibrant-ink .cm-def { color: #8DA6CE; }
.cm-s-vibrant-ink span.cm-variable-2, .cm-s-vibrant span.cm-tag { color: #FFC66D; }
.cm-s-vibrant-ink span.cm-variable-3, .cm-s-vibrant span.cm-def, .cm-s-vibrant span.cm-type { color: #FFC66D; }
.cm-s-vibrant-ink .cm-operator { color: #888; }
.cm-s-vibrant-ink .cm-comment { color: gray; font-weight: bold; }
.cm-s-vibrant-ink .cm-string { color:  #A5C25C; }
.cm-s-vibrant-ink .cm-string-2 { color: red; }
.cm-s-vibrant-ink .cm-meta { color: #D8FA3C; }
.cm-s-vibrant-ink .cm-builtin { color: #8DA6CE; }
.cm-s-vibrant-ink .cm-tag { color: #8DA6CE; }
.cm-s-vibrant-ink .cm-attribute { color: #8DA6CE; }
.cm-s-vibrant-ink .cm-header { color: #FF6400; }
.cm-s-vibrant-ink .cm-hr { color: #AEAEAE; }
.cm-s-vibrant-ink .cm-link { color: #5656F3; }
.cm-s-vibrant-ink .cm-error { border-bottom: 1px solid red; }

.cm-s-vibrant-ink .CodeMirror-activeline-background { background: #27282E; }
.cm-s-vibrant-ink .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }
`;
var xq_dark = `/*
Copyright (C) 2011 by MarkLogic Corporation
Author: Mike Brevoort <mike@brevoort.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
.cm-s-xq-dark.CodeMirror { background: #0a001f; color: #f8f8f8; }
.cm-s-xq-dark div.CodeMirror-selected { background: #27007A; }
.cm-s-xq-dark .CodeMirror-line::selection, .cm-s-xq-dark .CodeMirror-line > span::selection, .cm-s-xq-dark .CodeMirror-line > span > span::selection { background: rgba(39, 0, 122, 0.99); }
.cm-s-xq-dark .CodeMirror-line::-moz-selection, .cm-s-xq-dark .CodeMirror-line > span::-moz-selection, .cm-s-xq-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 0, 122, 0.99); }
.cm-s-xq-dark .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }
.cm-s-xq-dark .CodeMirror-guttermarker { color: #FFBD40; }
.cm-s-xq-dark .CodeMirror-guttermarker-subtle { color: #f8f8f8; }
.cm-s-xq-dark .CodeMirror-linenumber { color: #f8f8f8; }
.cm-s-xq-dark .CodeMirror-cursor { border-left: 1px solid white; }

.cm-s-xq-dark span.cm-keyword { color: #FFBD40; }
.cm-s-xq-dark span.cm-atom { color: #6C8CD5; }
.cm-s-xq-dark span.cm-number { color: #164; }
.cm-s-xq-dark span.cm-def { color: #FFF; text-decoration:underline; }
.cm-s-xq-dark span.cm-variable { color: #FFF; }
.cm-s-xq-dark span.cm-variable-2 { color: #EEE; }
.cm-s-xq-dark span.cm-variable-3, .cm-s-xq-dark span.cm-type { color: #DDD; }
.cm-s-xq-dark span.cm-property {}
.cm-s-xq-dark span.cm-operator {}
.cm-s-xq-dark span.cm-comment { color: gray; }
.cm-s-xq-dark span.cm-string { color: #9FEE00; }
.cm-s-xq-dark span.cm-meta { color: yellow; }
.cm-s-xq-dark span.cm-qualifier { color: #FFF700; }
.cm-s-xq-dark span.cm-builtin { color: #30a; }
.cm-s-xq-dark span.cm-bracket { color: #cc7; }
.cm-s-xq-dark span.cm-tag { color: #FFBD40; }
.cm-s-xq-dark span.cm-attribute { color: #FFF700; }
.cm-s-xq-dark span.cm-error { color: #f00; }

.cm-s-xq-dark .CodeMirror-activeline-background { background: #27282E; }
.cm-s-xq-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }
`;
var xq_light = `/*
Copyright (C) 2011 by MarkLogic Corporation
Author: Mike Brevoort <mike@brevoort.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
.cm-s-xq-light span.cm-keyword { line-height: 1em; font-weight: bold; color: #5A5CAD; }
.cm-s-xq-light span.cm-atom { color: #6C8CD5; }
.cm-s-xq-light span.cm-number { color: #164; }
.cm-s-xq-light span.cm-def { text-decoration:underline; }
.cm-s-xq-light span.cm-variable { color: black; }
.cm-s-xq-light span.cm-variable-2 { color:black; }
.cm-s-xq-light span.cm-variable-3, .cm-s-xq-light span.cm-type { color: black; }
.cm-s-xq-light span.cm-property {}
.cm-s-xq-light span.cm-operator {}
.cm-s-xq-light span.cm-comment { color: #0080FF; font-style: italic; }
.cm-s-xq-light span.cm-string { color: red; }
.cm-s-xq-light span.cm-meta { color: yellow; }
.cm-s-xq-light span.cm-qualifier { color: grey; }
.cm-s-xq-light span.cm-builtin { color: #7EA656; }
.cm-s-xq-light span.cm-bracket { color: #cc7; }
.cm-s-xq-light span.cm-tag { color: #3F7F7F; }
.cm-s-xq-light span.cm-attribute { color: #7F007F; }
.cm-s-xq-light span.cm-error { color: #f00; }

.cm-s-xq-light .CodeMirror-activeline-background { background: #e8f2ff; }
.cm-s-xq-light .CodeMirror-matchingbracket { outline:1px solid grey;color:black !important;background:yellow; }
`;
var yeti = `/*

    Name:       yeti
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original yeti color scheme by Jesse Weed (https://github.com/jesseweed/yeti-syntax)

*/


.cm-s-yeti.CodeMirror {
  background-color: #ECEAE8 !important;
  color: #d1c9c0 !important;
  border: none;
}

.cm-s-yeti .CodeMirror-gutters {
  color: #adaba6;
  background-color: #E5E1DB;
  border: none;
}
.cm-s-yeti .CodeMirror-cursor { border-left: solid thin #d1c9c0; }
.cm-s-yeti .CodeMirror-linenumber { color: #adaba6; }
.cm-s-yeti.CodeMirror-focused div.CodeMirror-selected { background: #DCD8D2; }
.cm-s-yeti .CodeMirror-line::selection, .cm-s-yeti .CodeMirror-line > span::selection, .cm-s-yeti .CodeMirror-line > span > span::selection { background: #DCD8D2; }
.cm-s-yeti .CodeMirror-line::-moz-selection, .cm-s-yeti .CodeMirror-line > span::-moz-selection, .cm-s-yeti .CodeMirror-line > span > span::-moz-selection { background: #DCD8D2; }
.cm-s-yeti span.cm-comment { color: #d4c8be; }
.cm-s-yeti span.cm-string, .cm-s-yeti span.cm-string-2 { color: #96c0d8; }
.cm-s-yeti span.cm-number { color: #a074c4; }
.cm-s-yeti span.cm-variable { color: #55b5db; }
.cm-s-yeti span.cm-variable-2 { color: #a074c4; }
.cm-s-yeti span.cm-def { color: #55b5db; }
.cm-s-yeti span.cm-operator { color: #9fb96e; }
.cm-s-yeti span.cm-keyword { color: #9fb96e; }
.cm-s-yeti span.cm-atom { color: #a074c4; }
.cm-s-yeti span.cm-meta { color: #96c0d8; }
.cm-s-yeti span.cm-tag { color: #96c0d8; }
.cm-s-yeti span.cm-attribute { color: #9fb96e; }
.cm-s-yeti span.cm-qualifier { color: #96c0d8; }
.cm-s-yeti span.cm-property { color: #a074c4; }
.cm-s-yeti span.cm-builtin { color: #a074c4; }
.cm-s-yeti span.cm-variable-3, .cm-s-yeti span.cm-type { color: #96c0d8; }
.cm-s-yeti .CodeMirror-activeline-background { background: #E7E4E0; }
.cm-s-yeti .CodeMirror-matchingbracket { text-decoration: underline; }
`;
var yonce = `/*

    Name:       yoncé
    Author:     Thomas MacLean (http://github.com/thomasmaclean)

    Original yoncé color scheme by Mina Markham (https://github.com/minamarkham)

*/

.cm-s-yonce.CodeMirror { background: #1C1C1C; color: #d4d4d4; } /**/
.cm-s-yonce div.CodeMirror-selected { background: rgba(252, 69, 133, 0.478); } /**/
.cm-s-yonce .CodeMirror-selectedtext,
.cm-s-yonce .CodeMirror-selected,
.cm-s-yonce .CodeMirror-line::selection,
.cm-s-yonce .CodeMirror-line > span::selection,
.cm-s-yonce .CodeMirror-line > span > span::selection,
.cm-s-yonce .CodeMirror-line::-moz-selection,
.cm-s-yonce .CodeMirror-line > span::-moz-selection,
.cm-s-yonce .CodeMirror-line > span > span::-moz-selection { background: rgba(252, 67, 132, 0.47); }

.cm-s-yonce.CodeMirror pre { padding-left: 0px; }
.cm-s-yonce .CodeMirror-gutters {background: #1C1C1C; border-right: 0px;}
.cm-s-yonce .CodeMirror-linenumber {color: #777777;  padding-right: 10px; }
.cm-s-yonce .CodeMirror-activeline .CodeMirror-linenumber.CodeMirror-gutter-elt { background: #1C1C1C; color: #fc4384; }
.cm-s-yonce .CodeMirror-linenumber { color: #777; }
.cm-s-yonce .CodeMirror-cursor { border-left: 2px solid #FC4384; }
.cm-s-yonce .cm-searching { background: rgba(243, 155, 53, .3) !important; outline: 1px solid #F39B35; }
.cm-s-yonce .cm-searching.CodeMirror-selectedtext { background: rgba(243, 155, 53, .7) !important; color: white; }

.cm-s-yonce .cm-keyword { color: #00A7AA; } /**/
.cm-s-yonce .cm-atom { color: #F39B35; }
.cm-s-yonce .cm-number, .cm-s-yonce span.cm-type { color:  #A06FCA; } /**/
.cm-s-yonce .cm-def { color: #98E342; }
.cm-s-yonce .cm-property,
.cm-s-yonce span.cm-variable { color: #D4D4D4; font-style: italic; }
.cm-s-yonce span.cm-variable-2 { color: #da7dae; font-style: italic; }
.cm-s-yonce span.cm-variable-3 { color: #A06FCA; }
.cm-s-yonce .cm-type.cm-def { color: #FC4384; font-style: normal; text-decoration: underline; }
.cm-s-yonce .cm-property.cm-def { color: #FC4384; font-style: normal; }
.cm-s-yonce .cm-callee { color: #FC4384; font-style: normal; }
.cm-s-yonce .cm-operator { color: #FC4384; } /**/
.cm-s-yonce .cm-qualifier,
.cm-s-yonce .cm-tag { color: #FC4384; }
.cm-s-yonce .cm-tag.cm-bracket { color: #D4D4D4; }
.cm-s-yonce .cm-attribute { color: #A06FCA; }
.cm-s-yonce .cm-comment { color:#696d70; font-style:italic; font-weight:normal; } /**/
.cm-s-yonce .cm-comment.cm-tag { color: #FC4384 }
.cm-s-yonce .cm-comment.cm-attribute { color: #D4D4D4; }
.cm-s-yonce .cm-string { color:#E6DB74; } /**/
.cm-s-yonce .cm-string-2 { color:#F39B35; } /*?*/
.cm-s-yonce .cm-meta { color: #D4D4D4; background: inherit; }
.cm-s-yonce .cm-builtin { color: #FC4384; } /*?*/
.cm-s-yonce .cm-header { color: #da7dae; }
.cm-s-yonce .cm-hr { color: #98E342; }
.cm-s-yonce .cm-link { color:#696d70; font-style:italic; text-decoration:none; } /**/
.cm-s-yonce .cm-error { border-bottom: 1px solid #C42412; }

.cm-s-yonce .CodeMirror-activeline-background { background: #272727; }
.cm-s-yonce .CodeMirror-matchingbracket { outline:1px solid grey; color:#D4D4D4 !important; }
`;
var zenburn = `/**
 * "
 *  Using Zenburn color palette from the Emacs Zenburn Theme
 *  https://github.com/bbatsov/zenburn-emacs/blob/master/zenburn-theme.el
 *
 *  Also using parts of https://github.com/xavi/coderay-lighttable-theme
 * "
 * From: https://github.com/wisenomad/zenburn-lighttable-theme/blob/master/zenburn.css
 */

.cm-s-zenburn .CodeMirror-gutters { background: #3f3f3f !important; }
.cm-s-zenburn .CodeMirror-foldgutter-open, .CodeMirror-foldgutter-folded { color: #999; }
.cm-s-zenburn .CodeMirror-cursor { border-left: 1px solid white; }
.cm-s-zenburn.CodeMirror { background-color: #3f3f3f; color: #dcdccc; }
.cm-s-zenburn span.cm-builtin { color: #dcdccc; font-weight: bold; }
.cm-s-zenburn span.cm-comment { color: #7f9f7f; }
.cm-s-zenburn span.cm-keyword { color: #f0dfaf; font-weight: bold; }
.cm-s-zenburn span.cm-atom { color: #bfebbf; }
.cm-s-zenburn span.cm-def { color: #dcdccc; }
.cm-s-zenburn span.cm-variable { color: #dfaf8f; }
.cm-s-zenburn span.cm-variable-2 { color: #dcdccc; }
.cm-s-zenburn span.cm-string { color: #cc9393; }
.cm-s-zenburn span.cm-string-2 { color: #cc9393; }
.cm-s-zenburn span.cm-number { color: #dcdccc; }
.cm-s-zenburn span.cm-tag { color: #93e0e3; }
.cm-s-zenburn span.cm-property { color: #dfaf8f; }
.cm-s-zenburn span.cm-attribute { color: #dfaf8f; }
.cm-s-zenburn span.cm-qualifier { color: #7cb8bb; }
.cm-s-zenburn span.cm-meta { color: #f0dfaf; }
.cm-s-zenburn span.cm-header { color: #f0efd0; }
.cm-s-zenburn span.cm-operator { color: #f0efd0; }
.cm-s-zenburn span.CodeMirror-matchingbracket { box-sizing: border-box; background: transparent; border-bottom: 1px solid; }
.cm-s-zenburn span.CodeMirror-nonmatchingbracket { border-bottom: 1px solid; background: none; }
.cm-s-zenburn .CodeMirror-activeline { background: #000000; }
.cm-s-zenburn .CodeMirror-activeline-background { background: #000000; }
.cm-s-zenburn div.CodeMirror-selected { background: #545454; }
.cm-s-zenburn .CodeMirror-focused div.CodeMirror-selected { background: #4f4f4f; }
`;

var styles = {
    "cm-s-3024-day": _3024_day,
    "cm-s-3024-night": _3024_night,
    "cm-s-abbott": abbott,
    "cm-s-abcdef": abcdef,
    "cm-s-ambiance-mobile": ambiance_mobile,
    "cm-s-ambiance": ambiance,
    "cm-s-ayu-dark": ayu_dark,
    "cm-s-ayu-mirage": ayu_mirage,
    "cm-s-base16-dark": base16_dark,
    "cm-s-base16-light": base16_light,
    "cm-s-bespin": bespin,
    "cm-s-blackboard": blackboard,
    "cm-s-cobalt": cobalt,
    "cm-s-colorforth": colorforth,
    "cm-s-darcula": darcula,
    "cm-s-dracula": dracula,
    "cm-s-duotone-dark": duotone_dark,
    "cm-s-duotone-light": duotone_light,
    "cm-s-eclipse": eclipse,
    "cm-s-elegant": elegant,
    "cm-s-erlang-dark": erlang_dark,
    "cm-s-gruvbox-dark": gruvbox_dark,
    "cm-s-hopscotch": hopscotch,
    "cm-s-icecoder": icecoder,
    "cm-s-idea": idea,
    "cm-s-isotope": isotope,
    "cm-s-juejin": juejin,
    "cm-s-lesser-dark": lesser_dark,
    "cm-s-liquibyte": liquibyte,
    "cm-s-lucario": lucario,
    "cm-s-material-darker": material_darker,
    "cm-s-material-ocean": material_ocean,
    "cm-s-material-palenight": material_palenight,
    "cm-s-material": material,
    "cm-s-mbo": mbo,
    "cm-s-mdn-like": mdn_like,
    "cm-s-midnight": midnight,
    "cm-s-monokai": monokai,
    "cm-s-moxer": moxer,
    "cm-s-neat": neat,
    "cm-s-neo": neo,
    "cm-s-night": night,
    "cm-s-nord": nord,
    "cm-s-oceanic-next": oceanic_next,
    "cm-s-one-dark": onedark,
    "cm-s-one-light": onelight,
    "cm-s-panda-syntax": panda_syntax,
    "cm-s-paraiso-dark": paraiso_dark,
    "cm-s-paraiso-light": paraiso_light,
    "cm-s-pastel-on-dark": pastel_on_dark,
    "cm-s-railscasts": railscasts,
    "cm-s-rubyblue": rubyblue,
    "cm-s-seti": seti,
    "cm-s-shadowfox": shadowfox,
    "cm-s-solarized": solarized,
    "cm-s-ssms": ssms,
    "cm-s-the-matrix": the_matrix,
    "cm-s-tomorrow-night-bright": tomorrow_night_bright,
    "cm-s-tomorrow-night-eighties": tomorrow_night_eighties,
    "cm-s-ttcn": ttcn,
    "cm-s-twilight": twilight,
    "cm-s-vibrant-ink": vibrant_ink,
    "cm-s-xq-dark": xq_dark,
    "cm-s-xq-light": xq_light,
    "cm-s-yeti": yeti,
    "cm-s-yonce": yonce,
    "cm-s-zenburn": zenburn,
};
