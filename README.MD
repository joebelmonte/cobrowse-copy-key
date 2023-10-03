# LoginKey Front End

**By Joe Belmonte**

# About

This is a Chrome extension that detects when a cobrowse session has started and automatically copies the session key to the system clipboard so you don't have to.

# How it works

The extention adds a `MutationObserver` to the page. When an element with the id `glance_ssn_key` appears on the page, it copies the outerText of that element to the clipboard.

This works for both presence and non-presence sessions.

# Limitations

1. Because it relies on identifying the `glance_ssn_key` element, it will likely not work for pages using a custom UI.
