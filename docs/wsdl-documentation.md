# WSDL Documentation Display

WSDL Web UI extracts and displays `<wsdl:documentation>` elements from WSDL files, showing human-readable descriptions inline alongside services and operations.

## What's displayed

Documentation is extracted from these WSDL elements:

- **Services** — shown in the service header below the service name
- **Port types / interfaces** — shown in the interface description
- **Operations** — shown at the top of the expanded operation detail view

## WSDL 1.1 example

```xml
<service name="StockQuoteService">
  <documentation>Provides real-time stock quote information.</documentation>
  ...
</service>

<portType name="StockQuotePortType">
  <operation name="GetLastTradePrice">
    <documentation>Returns the last recorded trade price for a given ticker symbol.</documentation>
    ...
  </operation>
</portType>
```

## WSDL 2.0 example

```xml
<service name="WeatherService">
  <documentation>Provides weather forecasts and current conditions.</documentation>
  ...
</service>

<interface name="WeatherInterface">
  <operation name="GetWeather">
    <documentation>Returns current weather conditions for a given city and country.</documentation>
    ...
  </operation>
</interface>
```

## Notes

- If no `<documentation>` element is present, nothing is shown — the UI adapts gracefully.
- Both WSDL 1.1 and 2.0 documentation elements are supported.
