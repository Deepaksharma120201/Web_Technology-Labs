<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
        <head>
            <title>Furniture Shop - Chairs</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4; }
                table { width: 80%; margin: auto; border-collapse: collapse; }
                th, td { padding: 10px; border: 1px solid black; text-align: center; }
                th { background-color: #555; color: white; }
            </style>
        </head>
        <body>
            <h2>Chairs Available in Our Store</h2>
            <table>
                <tr>
                    <th>Color</th>
                    <th>Price ($)</th>
                    <th>Material</th>
                    <th>Date of Manufacture</th>
                    <th>Brand Name</th>
                </tr>
                <xsl:for-each select="furniture/chair">
                    <tr>
                        <td><xsl:value-of select="color"/></td>
                        <td><xsl:value-of select="price"/></td>
                        <td><xsl:value-of select="material"/></td>
                        <td><xsl:value-of select="date_of_manufacture"/></td>
                        <td><xsl:value-of select="brand_name"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
