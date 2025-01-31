<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Bookstore Catalog</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 20px;
          }
          table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #fff;
          }

          th, td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
          }

          th {
            background-color: #4CAF50;
            color: white;
            font-size: 16px;
          }

          tr:nth-child(even) {
            background-color: #f2f2f2;
          }

          tr:hover {
            background-color: #ddd;
          }

          td {
            color: #555;
          }

          caption {
            font-size: 1.5em;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <table>
            <caption>Bookstore Catalog</caption>
            <tr bgcolor="#9acd32">
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Price</th>
            </tr>
            <xsl:for-each select="bookstore/book">
              <tr>
                <td><xsl:value-of select="title"/></td>
                <td><xsl:value-of select="author"/></td>
                <td><xsl:value-of select="year"/></td>
                <td><xsl:value-of select="price"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
