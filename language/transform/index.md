# transform

CraftML provides a versatile set of transformation commands to change the
position, size, and shape of an object. Most
transformation commands expect three arguments that correspond to the x, y, z
dimensions.

```
command:string  x:number  y:number  z:number
```

For example,

* `translate 4 5 3` translates a solid by 4, 5, and 3 along the x, y, and z dimension.
* `scale 1 1.5 2` scales a solid by a factor of 1, 1.5, and 2 along the x, y, and z dimensions.

An alternative form is to specify each axe or set of axes followed by a value,
which has the following form:

```
command:string  axes1:string v2:number  axes2:string  v2:number ... axesN:string vN:number
```

For example,

* `translate x 4 y 5` translates a solid by 4 and 5 along the x and y axis; nothing
is done along the z axis.
* `scale x 1 z 2` scales a solid by 2 and 3 along the x and y axis; nothing
is done along the y axis.
* `position xy 5 z 3` positions a solid at (5, 5, 3).
* `scale xyz 5` scales a solid by a factor of 5 along all dimensions. This is
equivalent to `scale 5`.

### Positioning
* {{'translate' | t}}
* {{'position' | t}}
* {{'center' | t}}
* {{'land' | t}}

### Sizing
* {{'scale' | t}}
* {{'size' | t}}
* {{'fit' | t}}

### Orienting
* {{'rotate' | t}}
* {{'flip' | t}}

### Changing Shapes
* {{'crop' | t}}
* {{'cut' | t}}
* {{'clip' | t}}
* {{'hull' | t}}
* {{'wall' | t}}
