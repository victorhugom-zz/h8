h8
======

A bunch of things in angular that I use a lot

```
bower install h8 --save
```

Usage
==

**titlecase filter**

Change the case of a string to a human readable case:

Ex: This IS A STRING --> This Is a String
```
 {{firstName | titleCase}}
 ```
 
 **range filter**
 
 To be used with a 'for loop' in angular, provides a number array in a range
 
 Ex: Creating an input for each month (1 to 12)
```
   <select ng-model="months" ng-options="n for n in [] | range:1:12"></select>
```

**states and cities directive**

localized input helper for states and brazilian cities (uses bootstrap3)

Ex: **br-states** will create an input with all the 27 brazilian states
```
<br-states ng-model="state">
```
Ex: **br-cities** will create an input with all the cities of a brazilian state
```
<br-cities ng-model="city" state="state">
```

the **br-cities** directive can be used without the **br-states**, but the state provided can be an abbreviation of the full state name
