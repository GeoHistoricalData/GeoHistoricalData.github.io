<?xml version="1.0" encoding="UTF-8"?><sld:StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0.0">
  <sld:NamedLayer>
    <sld:Name>Cassini places</sld:Name>
    <sld:UserStyle>
      <sld:Name>Places with cassini-like icons</sld:Name>
      <sld:FeatureTypeStyle>
        <!--
        <Rule>
          <Title>gold point</Title>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>square</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#ffcc00</CssParameter>
                </Fill>
              </Mark>
              <Size>4</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        -->
        <!-- LABELS -->
        <sld:Rule>
          <sld:Name>Label placement</sld:Name>
            <TextSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
              <Label>
                <ogc:PropertyName>nom</ogc:PropertyName>
              </Label>      
              <Font>
                <CssParameter name="font-family">Arial</CssParameter>
                <CssParameter name="font-style">normal</CssParameter>
                 <CssParameter name="font-size">
                   <ogc:Function name="Categorize">
                     <!-- Value to transform -->
                     <ogc:Function name="env">
                       <ogc:Literal>wms_scale_denominator</ogc:Literal>
                     </ogc:Function>
                     <!-- Output values and thresholds -->
                     <!-- Ranges: -->
                     <!-- [scale <= 20000, label size = 100m] -->
                     <!-- [scale > 20000, <= 100000, label size = 200m] -->
                     <!-- [scale > 100000, hide label] -->
                     <ogc:Literal>100</ogc:Literal>
                     <ogc:Literal>20000</ogc:Literal>
                     <ogc:Literal>300</ogc:Literal>
                     <ogc:Literal>100000</ogc:Literal>
                     <ogc:Literal>0</ogc:Literal>
                   </ogc:Function>
                 </CssParameter>              
              </Font>
              <LabelPlacement>
                <PointPlacement >
                  <AnchorPoint>
                    <AnchorPointX>0.0</AnchorPointX>
                    <AnchorPointY>0.0</AnchorPointY>
                  </AnchorPoint>
                  <Displacement >
                    <DisplacementX>150</DisplacementX>
                    <DisplacementY>0</DisplacementY>
                  </Displacement>
                </PointPlacement>
              </LabelPlacement>
              <Fill>
                <CssParameter name="fill">#000000</CssParameter>
              </Fill>
          </TextSymbolizer>           
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Chapel</sld:Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>type_id</ogc:PropertyName>
              <ogc:Literal>5</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/chapel-1.png"/>
                <sld:Format>image/png</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>400</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
      <sld:Rule>
          <sld:Name>Cross</sld:Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>type_id</ogc:PropertyName>
              <ogc:Literal>6</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/cross-1.png"/>
                <sld:Format>image/png</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>550</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Cemetery</sld:Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>type_id</ogc:PropertyName>
              <ogc:Literal>7</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/cemetery-1.png"/>
                <sld:Format>image/png</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>500</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Hamlet</sld:Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>type_id</ogc:PropertyName>
              <ogc:Literal>10</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/hamlet-2.png"/>
                <sld:Format>image/png</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>450</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Castle</sld:Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>type_id</ogc:PropertyName>
              <ogc:Literal>11</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/castle-1.png"/>
                <sld:Format>image/png</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>450</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>House</sld:Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>type_id</ogc:PropertyName>
              <ogc:Literal>12</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/house-2.png"/>
                <sld:Format>image/png</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>400</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Manor</sld:Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>type_id</ogc:PropertyName>
              <ogc:Literal>13</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/manor-1.png"/>
                <sld:Format>image/png</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>400</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>        
        <sld:Rule>
          <sld:Name>Water Mill</sld:Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>type_id</ogc:PropertyName>
              <ogc:Literal>14</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/watermill-1.png"/>
                <sld:Format>image/png</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>200</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Windmill</sld:Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>type_id</ogc:PropertyName>
              <ogc:Literal>15</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/windmill-1.png"/>
                <sld:Format>image/png</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>680</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Redoubt</sld:Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>type_id</ogc:PropertyName>
              <ogc:Literal>17</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/redoubt-1.png"/>
                <sld:Format>image/png</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>200</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Gallow</sld:Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>type_id</ogc:PropertyName>
              <ogc:Literal>21</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/gallow-1.png"/>
                <sld:Format>image/png</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>200</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Other</sld:Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>type_id</ogc:PropertyName>
              <ogc:Literal>28</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/other-1.png"/>
                <sld:Format>image/png</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>400</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Undefined</sld:Name>
          <ogc:Filter>
            <ogc:Or>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_id</ogc:PropertyName>
                <ogc:Literal>4</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_id</ogc:PropertyName>
                <ogc:Literal>9</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_id</ogc:PropertyName>
                <ogc:Literal>17</ogc:Literal>
              </ogc:PropertyIsEqualTo>           
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_id</ogc:PropertyName>
                <ogc:Literal>18</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_id</ogc:PropertyName>
                <ogc:Literal>19</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_id</ogc:PropertyName>
                <ogc:Literal>19</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_id</ogc:PropertyName>
                <ogc:Literal>26</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_id</ogc:PropertyName>
                <ogc:Literal>29</ogc:Literal>
              </ogc:PropertyIsEqualTo>              
            </ogc:Or>
          </ogc:Filter>
          <PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <Graphic>
              <Mark>
                <WellKnownName>square</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#ff0000</CssParameter>
                </Fill>
              </Mark>
              <Size>50</Size>
            </Graphic>
          </PointSymbolizer>
        </sld:Rule>        
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>
