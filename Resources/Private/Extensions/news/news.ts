# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:news/Configuration/TypoScript/setup.txt">


# **********************************************************
# Changes to EXT:news
# **********************************************************

plugin.tx_news {
	view {
		templateRootPath = EXT:theme_repute/Resources/Private/Templates/News/
		partialRootPath = EXT:theme_repute/Resources/Private/Partials/News/
		layoutRootPath = EXT:theme_repute/Resources/Private/Layouts/News/
        	widget.Tx_News_ViewHelpers_Widget_PaginateViewHelper.templateRootPath = EXT:theme_repute/Resources/Private/Templates/News/
	}

	settings {
		cssFile >
		list {
			paginate {
				insertAbove = 0
				insertBelow = 1
				itemsPerPage = 10
			}

			media {
				image {
					maxWidth = 400
					maxHeight = 350
				}
			}

			rss.channel {
				title       = {$plugin.tx_news.rss.channel.title}
				description = {$plugin.tx_news.rss.channel.description}
				link        = {$plugin.tx_news.rss.channel.link}
				language    = {$plugin.tx_news.rss.channel.language}
				copyright   = {$plugin.tx_news.rss.channel.copyright}
				category    = {$plugin.tx_news.rss.channel.category}
				generator   = {$plugin.tx_news.rss.channel.generator}
			}

		}
		detail {
			media {
				image {
					maxWidth = 900
					maxHeight = 600
				}
			}
		}

	}
}

#-------------------------------------------------------------------------------
#	EXT:news Latest news
#-------------------------------------------------------------------------------

lib.extensions.news_latest = USER
lib.extensions.news_latest {
	userFunc = tx_extbase_core_bootstrap->run
	extensionName = News
	pluginName = Pi1

	switchableControllerActions {
		News {
			1 = list
		}
	}
	settings < plugin.tx_news.settings
	settings {
		hidePagination = 1
		cropMaxCharacters = {$plugin.theme_configuration.extensions.news.latest.cropMaxCharacters}
		detailPid = {$plugin.theme_configuration.extensions.news.latest.detailPid}
		limit = {$plugin.theme_configuration.extensions.news.latest.limit}
		startingpoint = {$plugin.theme_configuration.extensions.news.latest.startingpoint}

		isLatest = 1
	}
}
