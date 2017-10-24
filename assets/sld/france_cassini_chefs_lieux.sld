<?xml version="1.0" encoding="UTF-8"?><sld:StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0.0">
    <sld:NamedLayer>
      <sld:Name>Cassini administrative centres</sld:Name>
      <sld:UserStyle>
        <sld:Name>Administrative centers with cassini-like icons</sld:Name>
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
                  <ogc:PropertyName>nomcart</ogc:PropertyName>
                </Label>      
                <Font>
                  <CssParameter name="font-family">Arial</CssParameter>
                  <CssParameter name="font-style">normal</CssParameter>
                  <CssParameter name="font-weight">bold</CssParameter>

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
                       <ogc:Literal>600</ogc:Literal>
                       <ogc:Literal>300000</ogc:Literal>
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
                  <CssParameter name="fill">#a51a04</CssParameter>
                </Fill>
            </TextSymbolizer>           
          </sld:Rule>
          <sld:Rule>
            <sld:Name>City</sld:Name>
            <ogc:Filter>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>typecart</ogc:PropertyName>
                <ogc:Literal>ville</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            </ogc:Filter>
            <PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
              <Graphic>
                <Mark>
                  <WellKnownName>square</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#7a2712</CssParameter>
                  </Fill>
                </Mark>
                <Size>100</Size>
              </Graphic>
            </PointSymbolizer>
          </sld:Rule>
          <sld:Rule>
            <sld:Name>Commandery</sld:Name>
            <ogc:Filter>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>typecart</ogc:PropertyName>
                <ogc:Literal>commanderie</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            </ogc:Filter>
            <PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
              <Graphic>
                <Mark>
                  <WellKnownName>square</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#a58609</CssParameter>
                  </Fill>
                </Mark>
                <Size>100</Size>
              </Graphic>
            </PointSymbolizer>
          </sld:Rule>    
          <sld:Rule>
            <sld:Name>Other</sld:Name>
            <ogc:Filter>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>typecart</ogc:PropertyName>
                <ogc:Literal>autre</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            </ogc:Filter>
            <PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
              <Graphic>
                <Mark>
                  <WellKnownName>square</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#30002c</CssParameter>
                  </Fill>
                </Mark>
                <Size>100</Size>
              </Graphic>
            </PointSymbolizer>
          </sld:Rule>   
          <sld:Rule>
            <sld:Name>Hamlet</sld:Name>
            <ogc:Filter>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>typecart</ogc:PropertyName>
                <ogc:Literal>hameau</ogc:Literal>
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
            <sld:Name>Abbey</sld:Name>
            <ogc:Filter>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>typecart</ogc:PropertyName>
                <ogc:Literal>abbaye</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            </ogc:Filter>
            <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
              <sld:Graphic>
                <sld:ExternalGraphic>
                  <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/abbey-1.png"/>
                  <sld:Format>image/png</sld:Format>
                </sld:ExternalGraphic>
                <sld:Size>800</sld:Size>
              </sld:Graphic>
            </sld:PointSymbolizer>
          </sld:Rule>
          <sld:Rule>
            <sld:Name>Chapel</sld:Name>
            <ogc:Filter>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>typecart</ogc:PropertyName>
                <ogc:Literal>chapelle</ogc:Literal>
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
            <sld:Name>Burg</sld:Name>
            <ogc:Filter>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>typecart</ogc:PropertyName>
                <ogc:Literal>bourg</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            </ogc:Filter>
            <PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
              <Graphic>
                <Mark>
                  <WellKnownName>square</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#7a2712</CssParameter>
                  </Fill>
                </Mark>
                <Size>100</Size>
              </Graphic>
            </PointSymbolizer>
          </sld:Rule>          
          <sld:Rule>
            <sld:Name>Bell Tower</sld:Name>
            <ogc:Filter>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>typecart</ogc:PropertyName>
                <ogc:Literal>clocher</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            </ogc:Filter>
            <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
              <sld:Graphic>
                <sld:ExternalGraphic>
                  <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/belltower-1.png"/>
                  <sld:Format>image/png</sld:Format>
                </sld:ExternalGraphic>
                <sld:Size>800</sld:Size>
              </sld:Graphic>
            </sld:PointSymbolizer>
          </sld:Rule>
          <sld:Rule>
            <sld:Name>Bell Tower suc.</sld:Name>
            <ogc:Filter>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>typecart</ogc:PropertyName>
                <ogc:Literal>succursale</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            </ogc:Filter>
            <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
              <sld:Graphic>
                <sld:ExternalGraphic>
                  <sld:OnlineResource xlink:type="simple" xlink:href="file:///opt/geoserver/data_dir/styles/cassini-assets/mapicons/belltower-1.png"/>
                  <sld:Format>image/png</sld:Format>
                </sld:ExternalGraphic>
                <sld:Size>800</sld:Size>
              </sld:Graphic>
            </sld:PointSymbolizer>
            <PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
              <Graphic>
                <Mark>
                  <WellKnownName>square</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#ff0000</CssParameter>
                  </Fill>
                </Mark>
                <Size>100</Size>
              </Graphic>
            </PointSymbolizer>            
          </sld:Rule>          
        </sld:FeatureTypeStyle>
      </sld:UserStyle>
    </sld:NamedLayer>
  </sld:StyledLayerDescriptor>
