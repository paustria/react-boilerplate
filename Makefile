NAME := $(shell basename $$PWD | sed -e s/[\\.-]//g)

serve:
	docker exec -it ${NAME}_web_1 npm run dev
shell:
	docker exec -it ${NAME}_web_1 /bin/bash
install:
	docker exec -it ${NAME}_web_1 npm install
