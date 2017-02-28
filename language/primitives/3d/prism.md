# prism

Create an n-side prism solid.

* `sides` controls the number of sides (default = 3).
* `sideLength` controls the size of each side.
* `radius` controls the radius of the circle that contains this prism.

### sides="_number_"

{% craftml %}
<row spacing="10">
  <prism sides="3"/>
  <prism sides="4"/>
  <prism sides="5"/>
  <prism sides="6"/>
  <prism sides="7"/>
</row>
{% endcraftml %}

## sideLength="_number_"

{% craftml %}
<col>
  <prism sideLength="10" sides="5"/>
  <rectangle width="10" height="10"/>
</col>
{% endcraftml %}

## radius="_number_"

{% craftml %}
<stack>
  <prism radius="10" sides="5"/>
  <circle radius="10"/>
</stack>
{% endcraftml %}
