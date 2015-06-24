# ******************************************************************************
#	(c) 2015 Yann Bogdanovic <support@cdgfpt46.fr>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Library for indexed_search snippets
# Content:
#	* Search box
# **********************************************************


#-------------------------------------------------------------------------------
#	EXT:indexed_search Searchform
#-------------------------------------------------------------------------------
lib.extensions.indexed_search.form = COA
lib.extensions.indexed_search.form {

	# Open form tag and set URL to target page
	10 = TEXT
	10 {
		wrap = <form class="form-search" action="|" method="post">
		typolink {
			parameter = {$plugin.theme_configuration.extensions.indexed_search.page}
			returnLast = url
		}
	}

	# Add rest of template
	20 = TEXT
	20 {
		insertData = 1
		value (
			<div class="input-group">
				<label for="search" class="hidden">{LLL:EXT:theme_anyname/Resources/Private/Language/locallang.xml:search-placeholder}</label>
				<input name="tx_indexedsearch[sword]" type="text" class="form-control" placeholder="{LLL:EXT:theme_anyname/Resources/Private/Language/locallang.xml:search-placeholder}">
				<span class="input-group-btn">
					<button class="btn btn-primary" type="button">{LLL:EXT:theme_anyname/Resources/Private/Language/locallang.xml:search-submit}</button>
				</span>
			</div>
		</form>
		)
	}
}
